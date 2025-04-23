import React from "react";
import { Instagram, Youtube } from "lucide-react";

interface FooterProps {
  email?: string;
}

const Footer = ({ email = "hello@neliatiga.com" }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/inhabit.neliatiga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://youtube.com/@inhabit.neliatiga"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 Neli Atiga. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
