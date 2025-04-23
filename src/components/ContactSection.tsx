import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactSectionProps {
  email?: string;
  formRecipient?: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = ({
  email = "hello@neliatiga.com",
  formRecipient = "hello@neliatiga.com",
}: ContactSectionProps) => {
  // Track if Supabase is properly configured
  const [supabaseConfigured, setSupabaseConfigured] = useState(
    isSupabaseConfigured(),
  );

  // Check if Supabase is properly configured on component mount
  useEffect(() => {
    if (!isSupabaseConfigured()) {
      console.error(
        "Supabase environment variables are not properly configured",
      );
      setSupabaseConfigured(false);
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitTime, setSubmitTime] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState(false);

  // Set the initial time when component mounts
  useEffect(() => {
    setSubmitTime(Date.now());
  }, []);

  const onSubmit = async (data: FormValues) => {
    // Check if Supabase is properly configured
    if (!supabaseConfigured) {
      alert(
        `Unable to submit form: The contact system is not properly configured. Please email us directly at ${formRecipient}`,
      );
      return;
    }

    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setRecaptchaError(true);
      return;
    }

    // Spam prevention checks
    const currentTime = Date.now();
    const timeElapsed = submitTime ? currentTime - submitTime : 0;

    // Check if honeypot field is filled (bots often fill hidden fields)
    if (honeypot) {
      console.log("Potential spam detected: honeypot field filled");
      form.reset();
      return;
    }

    // Check if form was submitted too quickly (less than 3 seconds)
    if (timeElapsed < 3000) {
      console.log("Potential spam detected: form submitted too quickly");
      form.reset();
      return;
    }

    setIsSubmitting(true);

    try {
      // Ensure data values are properly sanitized
      const sanitizedName =
        typeof data.name === "string" ? data.name.trim() : "";
      const sanitizedEmail =
        typeof data.email === "string" ? data.email.trim() : "";
      const sanitizedMessage =
        typeof data.message === "string" ? data.message.trim() : "";

      // Insert data into Supabase
      const { data: insertedData, error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: sanitizedName,
            email: sanitizedEmail,
            message: sanitizedMessage,
            recaptcha_token: recaptchaToken,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        console.error("Supabase insertion error:", error);
        setIsSubmitting(false);

        // More specific error messages based on error code
        if (error.code === "23505") {
          // Unique constraint violation
          alert(
            "This message appears to be a duplicate. Please try with different content.",
          );
        } else if (error.code === "23503") {
          // Foreign key violation
          alert(
            "There was a reference error in your submission. Please try again.",
          );
        } else if (error.code === "42P01") {
          // Undefined table
          alert(
            "The contact system is currently unavailable. Please try again later or contact us directly.",
          );
        } else if (error.code === "42501") {
          // Insufficient privilege
          alert(
            "You don't have permission to submit this form. Please contact us directly.",
          );
        } else if (error.code === "23502") {
          // Not null violation
          alert("Please ensure all required fields are filled out correctly.");
        } else if (error.message && error.message.includes("network")) {
          alert(
            "Network error. Please check your internet connection and try again.",
          );
        } else {
          alert(
            "Form submission failed. Please try again later or contact us directly at " +
              formRecipient,
          );
        }
        return;
      }

      setIsSubmitting(false);
      setShowSuccess(true);
      form.reset();
      setRecaptchaToken(null);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);

      // Handle different types of errors
      if (error.message && typeof error.message === "string") {
        if (
          error.message.includes("network") ||
          error.message.includes("fetch") ||
          error.message.includes("connection")
        ) {
          alert(
            "Network error. Please check your internet connection and try again.",
          );
        } else if (error.message.includes("timeout")) {
          alert("Request timed out. Please try again later.");
        } else if (
          error.message.includes("auth") ||
          error.message.includes("credentials") ||
          error.message.includes("permission")
        ) {
          alert("Authentication error. Please refresh the page and try again.");
        } else {
          alert(
            "Form submission failed. Please try again or contact us directly at " +
              formRecipient,
          );
        }
      } else {
        alert(
          "An unexpected error occurred. Please try again or contact us directly at " +
            formRecipient,
        );
      }
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    if (token) {
      setRecaptchaError(false);
    }
  };

  return (
    <section className="w-full py-8 bg-black text-white" id="contact-us">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading-bold mb-8 text-left">
            Get in Touch
          </h1>
        </div>

        <div className="mx-auto">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Your Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...form.register("name")}
                  className="bg-white/10 border-slate-700 text-white"
                />
                {form.formState.errors.name && (
                  <p className="text-sm text-red-400">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...form.register("email")}
                  className="bg-white/10 border-slate-700 text-white"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-400">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                {...form.register("message")}
                className="bg-white/10 border-slate-700 text-white"
              />
              {form.formState.errors.message && (
                <p className="text-sm text-red-400">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            {/* Hidden honeypot field to catch bots */}
            <div className="hidden" aria-hidden="true">
              <Input
                type="text"
                id="honeypot"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              <ReCAPTCHA
                sitekey="6LdWYyErAAAAANI5P0PHp434yaQXpWE4l7VPz2HS"
                onChange={handleRecaptchaChange}
                theme="dark"
              />
              {recaptchaError && (
                <p className="text-sm text-red-400">
                  Please complete the reCAPTCHA verification.
                </p>
              )}

              <Button
                type="submit"
                className="px-8 bg-brand-primary hover:bg-brand-primary/90 text-white mx-auto block rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {showSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
