import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

interface ContactSectionProps {
  venueAddress?: string;
  venueCity?: string;
  venueState?: string;
  venueZip?: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
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
  venueAddress = "123 Worship Avenue",
  venueCity = "Nashville",
  venueState = "TN",
  venueZip = "37203",
  email = "info@inhabitconference.com",
  phone = "(615) 555-1234",
  socialLinks = {
    facebook: "https://facebook.com/inhabitconference",
    twitter: "https://twitter.com/inhabitconf",
    instagram: "https://instagram.com/inhabitconference",
  },
}: ContactSectionProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This would typically send the form data to a server
    console.log("Form submitted:", data);
    // Reset form after submission
    form.reset();
    // Show success message (would use toast in a real implementation)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about the inHabit Conference? We're here to help you
            on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg bg-white">
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

                <Button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <Card className="shadow-lg bg-white mb-6">
              <CardHeader>
                <CardTitle>Venue Information</CardTitle>
                <CardDescription>
                  Join us at our beautiful conference venue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">{venueAddress}</p>
                    <p className="text-slate-600">
                      {venueCity}, {venueState} {venueZip}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-primary mr-3" />
                  <a
                    href={`mailto:${email}`}
                    className="text-brand-primary hover:underline"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-primary mr-3" />
                  <a
                    href={`tel:${phone}`}
                    className="text-brand-primary hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
                <CardDescription>
                  Follow us on social media for updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.facebook && (
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 rounded-full hover:bg-brand-primary/10 transition-colors"
                    >
                      <Facebook className="h-6 w-6 text-brand-primary" />
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 rounded-full hover:bg-brand-primary/10 transition-colors"
                    >
                      <Twitter className="h-6 w-6 text-brand-primary" />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-100 rounded-full hover:bg-brand-primary/10 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-brand-primary" />
                    </a>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6">
                <p className="text-sm text-slate-600">
                  Join our community and stay updated on the latest inHabit
                  Conference news and announcements.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
