import React, { useEffect } from "react";

interface RegistrationSectionProps {
  title?: string;
  description?: string;
  bannerImage?: string;
}

const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  title = "Register Your Interest for inHabit Conference",
  description = "Help us create an extraordinary experience by letting us know you're planning to attend. We'll notify you as soon as ticketing opens so you can secure your place.",
  bannerImage = "https://inhabit-dev.neliatiga.com/images/brisbane-unsplash.jpg",
}) => {
  useEffect(() => {
    // Load TryBooking widget script
    const script = document.createElement("script");
    script.src = "https://www.trybooking.com/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-[#c0cfcd] to-[#889a98]">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md max-w-4xl mx-auto overflow-hidden">
          <div
            className="p-8 relative bg-cover bg-center"
            style={{
              backgroundImage: `url("https://inhabit-dev.neliatiga.com/images/brisbane-unsplash.jpg")`,
              position: "relative",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-orange-900/60"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-center text-white">
                Book Your Tickets for inHabit Conference
              </h2>
              <p className="text-center mb-6 text-white text-lg">
                Secure your place for this transformative gathering.
              </p>
            </div>
          </div>

          {/* TryBooking Widget */}
          <div
            className="tryb-widget mb-4"
            data-type="expressEmbed"
            data-eid="1383334"
          ></div>

          {/* Note below widget */}
          <p className="text-center text-sm text-gray-600 italic mb-10 px-8">
            After clicking 'Next,' you'll be directed to our inHabit Trybooking
            event page in a new tab to complete your registration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
