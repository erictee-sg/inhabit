import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Play, Pause } from "lucide-react";

// Add animation for the logo
import "../index.css";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  conferenceTagline?: string;
  ctaText?: string;
  videoUrl?: string;
  logoUrl?: string;
  ctaUrl?: string;
  onRegisterClick?: () => void;
}

const HeroSection = ({
  title = "inHabit",
  tagline = "21-23 August, 2025\nBrisbane, Australia",
  conferenceTagline = "It's more than a conference, it's a commissioning",
  ctaText = "Book Tickets",
  ctaUrl = "https://www.trybooking.com/events/1383334/sessions/5534205/sections/2638189/tickets",
  videoUrl = "/background-video.mp4", // This would be replaced with an actual video URL
  logoUrl = "https://inhabit-dev.neliatiga.com/images/inHabit-Primary-White-Logo.svg",
  onRegisterClick = () => {
    window.open(
      "https://www.trybooking.com/events/1383334/sessions/5534205/sections/2638189/tickets",
      "_blank",
    );
    return false;
  },
}: HeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images for carousel
  const backgroundImages = [
    "https://inhabit-dev.neliatiga.com/images/inhabit-frankie-cordoba--unsplash.jpg",
    "https://inhabit-dev.neliatiga.com/images/inhabit-orimi-protograph--unsplash.jpg",
    "https://inhabit-dev.neliatiga.com/images/inhabit-pexels--7520745.jpg",
    "https://inhabit-dev.neliatiga.com/images/inhabit-sam-moghadam--unsplash.jpg",
  ];

  // Check if on mobile device for responsive design
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Background image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Toggle video play/pause
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById(
      "background-video",
    ) as HTMLVideoElement;
    if (video) {
      isPlaying ? video.pause() : video.play();
    }
  };

  return (
    <section className="relative w-full h-[800px] overflow-hidden bg-brand-black">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image carousel */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ${index === currentBgIndex ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        ))}

        {/* Video element - hidden on mobile for performance */}
        {!isMobile && (
          <video
            id="background-video"
            className="absolute object-cover w-full h-full opacity-60"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/90 z-10"></div>
      </div>
      {/* Content Container */}
      <div className="relative z-20 h-full px-4 md:px-8 max-w-7xl mx-auto">
        {/* Two-column layout for desktop */}
        <div className="flex flex-col md:flex-row h-full items-center">
          {/* First column (1/3) - Logo and date/location */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start md:pr-8 self-start pt-8 md:pt-12">
            {/* Logo */}
            <img
              src={logoUrl}
              alt="Inhabit Conference Logo"
              className="md:w-56 mb-6 animate-fade-in-down w-44"
            />

            {/* Date and Location */}
            <p className="md:text-xl text-white/90 mb-4 whitespace-pre-line text-center md:text-left text-xl">
              {tagline}
            </p>
          </div>

          {/* Second column (2/3) - Tagline and CTA */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start mt-8 md:mt-0 justify-center self-center">
            {/* Conference Tagline */}
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d2dbda] font-bold mb-8 text-center md:text-left pb-2 tracking-tight leading-tight text-5xl md:text-7xl">
              {conferenceTagline}
            </h1>

            {/* CTA Button */}
            <div className="flex flex-col md:items-start items-center">
              <Button
                onClick={() =>
                  window.open(
                    "https://www.trybooking.com/events/1383334/sessions/5534205/sections/2638189/tickets",
                    "_blank",
                  )
                }
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-7 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
              >
                {ctaText}
              </Button>
              <div className="flex items-center mt-2 text-white/70 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>trybooking.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Controls - only shown when not on mobile */}
        {!isMobile && (
          <div className="absolute bottom-8 right-8 z-30">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleVideo}
              className={cn(
                "rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20",
                "transition-all duration-300",
              )}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
