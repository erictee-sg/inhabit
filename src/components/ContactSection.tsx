import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

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
  recaptcha: z
    .string()
    .min(1, { message: "Please complete the captcha verification." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = ({
  email = "info@inhabitconference.com",
  formRecipient = "info@inhabitconference.com",
}: ContactSectionProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptcha: "",
    },
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitTime, setSubmitTime] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  // Set the initial time when component mounts
  useEffect(() => {
    setSubmitTime(Date.now());
  }, []);

  const onSubmit = (data: FormValues) => {
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

    // Verify reCAPTCHA
    if (!data.recaptcha) {
      setCaptchaError("Please complete the captcha verification.");
      return;
    }

    setIsSubmitting(true);
    setCaptchaError("");

    // In a real implementation, you would send this to a server
    // For example using fetch or axios to a form handling service
    console.log(
      "Form submitted to",
      formRecipient || "default@example.com",
      ":",
      data,
    );

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      form.reset();
      // Reset the reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-cover bg-center"
      id="contact-us"
      style={{
        backgroundImage:
          "url('https://inhabit-dev.neliatiga.com/images/brisbane-unsplash.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Have questions about the inHabit Conference? We're here to help you.
          </p>
        </div>

        <div className="mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you as
                soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500">
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

                <div className="mb-6">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    // This is Google's test key - replace with your actual key in production
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(value) => {
                      form.setValue("recaptcha", value ? value : "");
                      setCaptchaError("");
                    }}
                  />
                  {captchaError && (
                    <p className="text-sm text-red-500 mt-2">{captchaError}</p>
                  )}
                  {form.formState.errors.recaptcha && (
                    <p className="text-sm text-red-500 mt-2">
                      {form.formState.errors.recaptcha.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {showSuccess && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
