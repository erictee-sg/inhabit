import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface FooterProps {
  logoSrc?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  navigationLinks?: Array<{
    title: string;
    href: string;
  }>;
}

const Footer = ({
  logoSrc = "/vite.svg",
  contactEmail = "info@inhabitconference.com",
  contactPhone = "+1 (555) 123-4567",
  address = "123 Worship Avenue, Nashville, TN 37203",
  socialLinks = {
    instagram: "https://instagram.com/inhabit.neliatiga",
    youtube: "https://youtube.com/@inhabit.neliatiga",
  },
  navigationLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Schedule", href: "/schedule" },
    { title: "Speakers", href: "/speakers" },
    { title: "Register", href: "/register" },
    { title: "Contact", href: "/contact" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-brand-black text-white py-12 px-4 md:px-8 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://instagram.com/inhabit.neliatiga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com/@inhabit.neliatiga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Neli Atiga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
