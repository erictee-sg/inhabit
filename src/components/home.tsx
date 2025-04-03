import React, { useState, useRef } from "react";
import HeroSection from "./HeroSection";
import VideoModule from "./VideoModule";
import ScheduleSection from "./ScheduleSection";
import MoreInfoSection from "./MoreInfoSection";
import RegistrationSection from "./RegistrationSection";
import Footer from "./Footer";

const Home = () => {
  const registrationSectionRef = useRef<HTMLDivElement>(null);

  const scrollToRegistration = () => {
    registrationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onRegisterClick={scrollToRegistration} />
      {/* Video Module */}
      <VideoModule />
      {/* More Info Section */}
      <MoreInfoSection />
      {/* Registration Section */}
      <div ref={registrationSectionRef}>
        <RegistrationSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
