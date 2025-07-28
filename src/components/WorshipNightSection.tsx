import React from "react";

const WorshipNightSection = () => {
  return (
    <section id="worship-night" className="py-16 px-4 md:px-8 bg-[#464f4e]">
      <div className="max-w-7xl mx-auto">
        {/* Banner with overlaid QR code for desktop */}
        <div className="relative mb-12">
          <img
            src="https://inhabit-dev.neliatiga.com/images/inHabit-Worship-Night-22-August-2025-Promo-Projection.png"
            alt="inHabit Worship Night 22 August 2025"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          {/* QR Code overlay for desktop - positioned at bottom right */}
          <div className="hidden md:block absolute bottom-4 right-4">
            <div className="p-2 rounded-lg shadow-lg inline-block flex justify-center items-center flex-col">
              <img
                src="https://inhabit-dev.neliatiga.com/images/qrcode_inHabit+Worship+Night.png"
                alt="QR Code for inHabit Worship Night"
                className="w-32 h-32"
              />
            </div>
            <p className="text-white text-sm font-medium text-center mt-2">
              Scan the QR code to book your free seat
            </p>
          </div>
        </div>

        {/* QR Code for mobile - below banner */}
        <div className="md:hidden mb-8 flex flex-col items-center">
          <div className="bg-white p-3 rounded-lg mb-4 inline-block">
            <img
              src="https://inhabit-dev.neliatiga.com/images/qrcode_inHabit+Worship+Night.png"
              alt="QR Code for inHabit Worship Night"
              className="w-48 h-48 block mx-auto"
            />
          </div>
          <p className="text-white text-lg font-medium text-center">
            Scan the QR code to book your free seat
          </p>
        </div>

        {/* Text Content */}
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <p className="text-white text-3xl mb-6 leading-relaxed md:text-left">
              We invite you to join inHabit conference participants and
              worshippers across Brisbane to create a space where King Jesus is
              welcome and lifted high! Come as you are and let's give Him the
              highest praise on this one night open to all. The venue has
              limited capacity so book your free seat{" "}
              <a
                href="https://www.trybooking.com/events/1442646/sessions/5789118/sections/2767856/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fa7a2c] hover:text-white underline transition-colors"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipNightSection;
