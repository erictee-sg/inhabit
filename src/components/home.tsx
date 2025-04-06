import React from "react";
import HeroSection from "./HeroSection";
import VideoModule from "./VideoModule";
import ScheduleSection from "./ScheduleSection";
import MoreInfoSection from "./MoreInfoSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  const scrollToRegistration = () => {
    // Removed scrolling behavior
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onRegisterClick={scrollToRegistration} />
      {/* Video Module */}
      <VideoModule />
      {/* More Info Section */}
      <MoreInfoSection />
      {/* Contact Section */}
      <ContactSection email="ericzigbiz@gmail.com" />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
