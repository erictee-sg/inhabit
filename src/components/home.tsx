import React from "react";
import HeroSection from "./HeroSection";
import VideoModule from "./VideoModule";
import MoreInfoSection from "./MoreInfoSection";
import PsNeliSection from "./PsNeliSection";
import VisitingBrisbane from "./VisitingBrisbane";

import Footer from "./Footer";

const Home = () => {
  const scrollToRegistration = () => {
    // Removed scrolling behavior
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection onRegisterClick={scrollToRegistration} />
      {/* Video Module */}
      <VideoModule />
      {/* More Info Section */}
      <MoreInfoSection />
      {/* About Ps. Neli Section */}
      <PsNeliSection />
      {/* Visiting Brisbane Section */}
      <VisitingBrisbane />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
