import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { ExternalLink, Menu } from "lucide-react";

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
  conferenceTagline = "It's more than a conference, it's a movement",
  ctaText = "Book Tickets",
  ctaUrl = "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets",
  videoUrl = "/background-video.mp4", // This would be replaced with an actual video URL
  logoUrl = "https://inhabit-dev.neliatiga.com/images/inHabit-Primary-White-Logo.svg",
  onRegisterClick = () => {
    window.open(
      "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets",
      "_blank",
    );
    return false;
  },
}: HeroSectionProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add useEffect for smooth scrolling
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) return;

      const targetElement = document.getElementById(targetId.substring(1));

      if (targetElement) {
        // Get the position of the target element
        const elementPosition = targetElement.getBoundingClientRect().top;
        // Get the current scroll position
        const offsetPosition = elementPosition + window.scrollY - 70; // Add 70px offset

        // Scroll to the adjusted position
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        setMobileMenuOpen(false);
      }
    };

    // Add event listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Handle direct navigation to hash URLs when page loads
    if (window.location.hash) {
      setTimeout(() => {
        const targetId = window.location.hash;
        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - 70;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 500); // Small delay to ensure page is fully loaded
    }

    // Clean up event listeners on unmount
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [setMobileMenuOpen]);

  // Background images for carousel
  const backgroundImages = [
    "https://inhabit-dev.neliatiga.com/images/inhabit-frankie-cordoba--unsplash.jpg",
    "https://inhabit-dev.neliatiga.com/images/inhabit-orimi-protograph--unsplash.jpg",
    "https://inhabit-dev.neliatiga.com/images/inhabit-pexels--7520745.jpg",
    "https://inhabit-dev.neliatiga.com/images/inhabit-sam-moghadam--unsplash.jpg",
    "https://inhabit-dev.neliatiga.com/images/worship01-unsplash.jpg",
    "https://inhabit-dev.neliatiga.com/images/worship02-unsplash.jpg",
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

  // State to track scroll position for parallax effect and content visibility
  const [scrollY, setScrollY] = useState(0);
  const [parallaxFixed, setParallaxFixed] = useState(true);
  const [activeSection, setActiveSection] = useState(1); // Track which section is active (1, 2, or 3)
  const [scrollProgress, setScrollProgress] = useState(0); // Track scroll progress for smoother transitions

  // State for line-by-line animation
  const [secondSectionLines, setSecondSectionLines] = useState<boolean[]>([
    false,
  ]);
  const [thirdSectionLines, setThirdSectionLines] = useState<boolean[]>([
    false,
  ]);

  // Update scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Calculate viewport height and scroll progress
      const vh = window.innerHeight;
      const totalScrollHeight = vh * 3; // Total height of all three sections
      const progress = Math.min(1, window.scrollY / totalScrollHeight);
      setScrollProgress(progress);

      // Determine which section is currently active based on scroll position with smoother thresholds
      // Use a responsive threshold that's smaller on mobile devices
      const mobileAdjustment = window.innerWidth < 768 ? 0.3 : 0; // Reduce threshold on mobile

      if (window.scrollY < vh * 0.5) {
        setActiveSection(1);
      } else if (window.scrollY < vh * (1.5 - mobileAdjustment)) {
        setActiveSection(2);

        // Trigger line-by-line animation for second section
        const secondSectionProgress = (window.scrollY - vh * 0.5) / (vh * 1.0);
        const newSecondSectionLines = [secondSectionProgress > 0.1];
        setSecondSectionLines(newSecondSectionLines);
      } else {
        setActiveSection(3);

        // Trigger line-by-line animation for third section
        const thirdSectionProgress =
          (window.scrollY - vh * (1.5 - mobileAdjustment)) / (vh * 1.0);
        const newThirdSectionLines = [thirdSectionProgress > 0.1];
        setThirdSectionLines(newThirdSectionLines);
      }

      // Keep parallax fixed until the bottom of the third content block is reached
      // This happens at approximately 2.5x viewport height
      // When we pass this threshold, the background will start scrolling with the content
      setParallaxFixed(window.scrollY < vh * 2.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the Visiting Brisbane section
  const scrollToVisitingBrisbane = (e: React.MouseEvent) => {
    e.preventDefault();
    const visitingBrisbaneSection =
      document.getElementById("visiting-brisbane");

    if (visitingBrisbaneSection) {
      const elementPosition =
        visitingBrisbaneSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 70;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section className="relative w-full h-[270vh] overflow-hidden bg-brand-black">
      {/* Background Images Carousel with parallax effect */}
      <div
        className={`${parallaxFixed ? "fixed" : "absolute"} inset-0 w-full h-screen transition-all duration-500 ease-out z-10`}
        // Parallax effect - only starts after the bottom of the third content block reaches top of viewport
        style={{
          transform: parallaxFixed
            ? "none"
            : `translateY(${(scrollY - window.innerHeight * 2.5) * 0.8}px)`,
          top: parallaxFixed ? 0 : `${window.innerHeight * 2.5}px`,
        }}
      >
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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/90"></div>
      </div>
      {/* Sticky Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md transition-all duration-300 shadow-md">
        <div className="max-w-7xl mx-auto p-4 md:p-6 flex justify-between items-center">
          {/* Logo in nav - only visible after scroll */}
          <div
            className={`transition-opacity duration-500 ${scrollY > 100 ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src="https://inhabit-dev.neliatiga.com/images/inHabit-Alternate-Horizontal-White.svg"
              alt="Inhabit Conference Logo"
              className="h-8 md:h-10"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Book Now button */}
            <Button
              onClick={() =>
                window.open(
                  "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets",
                  "_blank",
                )
              }
              size="sm"
              className="md:hidden bg-brand-primary hover:bg-brand-primary/90 text-white px-3 py-1 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-sm"
            >
              Book Now
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>

            {/* Mobile hamburger menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6 text-white/90 font-medium">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#event-details"
                className="hover:text-white transition-colors duration-200"
              >
                Registration Details
              </a>
              <a
                href="#visiting-brisbane"
                className="hover:text-white transition-colors duration-200"
                onClick={scrollToVisitingBrisbane}
              >
                Visiting Brisbane
              </a>
              <a
                href="#faqs"
                className="hover:text-white transition-colors duration-200"
              >
                FAQs
              </a>
              <a
                href="#contact-us"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets",
                    "_blank",
                  )
                }
                size="default"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-base"
              >
                Book Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </nav>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-brand-black/95 backdrop-blur-md rounded-lg shadow-lg p-4 w-48 z-50 border border-white/10">
            <nav className="flex flex-col gap-4 text-white/90 font-medium">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200 py-2"
              >
                About
              </a>
              <a
                href="#event-details"
                className="hover:text-white transition-colors duration-200 py-2"
              >
                Registration Details
              </a>
              <a
                href="#programme-schedule"
                className="hover:text-white transition-colors duration-200 py-2"
              >
                Programme Schedule
              </a>
              <a
                href="#visiting-brisbane"
                className="hover:text-white transition-colors duration-200 py-2"
                onClick={scrollToVisitingBrisbane}
              >
                Visiting Brisbane
              </a>
              <a
                href="#faqs"
                className="hover:text-white transition-colors duration-200 py-2"
              >
                FAQs
              </a>
              <a
                href="#contact-us"
                className="hover:text-white transition-colors duration-200 py-2"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
      {/* Content Container */}
      <div className="relative z-20 w-full h-[270vh] pointer-events-none">
        {/* Content sections - each taking full viewport height */}

        {/* First content section - Logo and date/location */}
        <div
          className={`h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto transition-all duration-700 ${activeSection === 1 ? "opacity-100" : "opacity-0"}`}
          style={{
            transform: `translateY(${activeSection === 1 ? 0 : -20}px)`,
            pointerEvents: activeSection === 1 ? "auto" : "none",
          }}
        >
          {/* Logo */}
          <img
            src={logoUrl}
            alt="Inhabit Conference Logo"
            className="w-80 md:w-96 mb-8 animate-fade-in-down"
          />
          {/* Date and Location */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 whitespace-pre-line text-center">
            {tagline}
          </p>
          {/* Pre-Conference Connect Info */}
        </div>

        {/* Second content section - appears on first scroll */}
        <div
          className={`h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto transition-all duration-700 ${activeSection === 2 ? "opacity-100" : "opacity-0"}`}
          style={{
            transform: `translateY(${activeSection === 2 ? 0 : activeSection < 2 ? 20 : -20}px)`,
            pointerEvents: activeSection === 2 ? "auto" : "none",
          }}
        >
          {/* Second content - description with line-by-line fade-in */}
          <div className="text-white/90 text-3xl md:text-6xl text-center mb-8 max-w-5xl overflow-visible">
            <div
              className={`transition-all duration-1000 transform ${secondSectionLines[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} pb-8`}
            >
              If you belong to a worship, prayer or creative ministry or you
              simply want to go deeper in worship, inHabit is for you!
            </div>
          </div>
        </div>

        {/* Third content section - appears on second scroll */}
        <div
          className={`h-screen w-full flex flex-col items-center justify-start px-4 md:px-8 max-w-7xl mx-auto transition-all duration-700 ${activeSection === 3 ? "opacity-100" : "opacity-0"} mb-[90vh]`}
          style={{
            transform: `translateY(${activeSection === 3 ? 0 : 20}px)`,
            pointerEvents: activeSection === 3 ? "auto" : "none",
          }}
        >
          <div className="overflow-hidden">
            <h1
              className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d2dbda] font-bold text-center pb-2 tracking-tight leading-tight text-5xl md:text-7xl max-w-5xl transition-all duration-1000 transform ${thirdSectionLines[0] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              It's more than a conference, it's a movement.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
