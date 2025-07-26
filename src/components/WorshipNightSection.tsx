import React from "react";

const WorshipNightSection = () => {
  return (
    <section id="worship-night" className="py-16 px-4 md:px-8 bg-[#464f4e]">
      <div className="max-w-7xl mx-auto">
        {/* First Row - Landscape Image */}
        <div className="mb-12">
          <img
            src="https://inhabit-dev.neliatiga.com/images/inHabit-Worship-Night-22-August-2025-Promo-Projection.png"
            alt="inHabit Worship Night 22 August 2025"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Second Row - Two Columns */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* First Column - Text Content (66% on desktop) */}
          <div className="w-full md:w-2/3">
            <p className="text-white text-3xl mb-6 leading-relaxed">
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

          {/* Second Column - QR Code (33% on desktop) */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg mb-4">
              <img
                src="https://inhabit-dev.neliatiga.com/images/qrcode_inHabit+Worship+Night.png"
                alt="QR Code for inHabit Worship Night"
                className="w-64 h-64"
              />
            </div>
            <p className="text-white text-lg font-medium">Scan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipNightSection;
