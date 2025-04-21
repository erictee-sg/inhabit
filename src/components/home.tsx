import React from "react";
import HeroSection from "./HeroSection";
import VideoModule from "./VideoModule";
import ScheduleSection from "./ScheduleSection";
import MoreInfoSection from "./MoreInfoSection";
import PsNeliSection from "./PsNeliSection";
import ConferenceDetailsSection from "./ConferenceDetailsSection";
import CTASection from "./CTASection";
import VisitingBrisbane from "./VisitingBrisbane";
import FAQSection from "./FAQSection";
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
      {/* About Ps. Neli Section */}
      <PsNeliSection />
      {/* Conference Details Section */}
      <ConferenceDetailsSection />
      {/* CTA Section */}
      <CTASection />
      {/* Visiting Brisbane Section */}
      <VisitingBrisbane />
      {/* FAQ Section */}
      <FAQSection />
      {/* Footer with Contact Section */}
      <Footer email="ericzigbiz@gmail.com" />
    </div>
  );
};

export default Home;
