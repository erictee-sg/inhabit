import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import HotelModal from "./HotelModal";
import PricingTable from "./PricingTable";
import { hotels, Hotel } from "@/data/hotels";

const ConferenceDetailsSection = () => {
  const bookingUrl =
    "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets";

  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHotelClick = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="event-details"
      className="py-16 px-4 md:px-8 from-white to-[#889a9866] relative overflow-hidden rotate-[180deg] to-[100%] via-slate-100 from-[38%] via-[76%] bg-gradient-to-r"
    >
      <div className="max-w-7xl mx-auto rotate-180 relative z-10">
        {/* Section Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Conference Details
        </h1>

        {/* Pricing Table - Full Width */}
        <div className="mb-16">
          <PricingTable />
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Programme Details - Left Column */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Programme
            </h2>
            <div className="h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  21 August: Welcome
                </h3>
                <p className="text-slate-600">Evening Session only @ 19:00</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  22 August: Equipping sessions
                </h3>
                <p className="text-slate-600">
                  Morning & Afternoon sessions @ 09:00
                </p>
                <p className="text-slate-600">Evening session @ 19:00</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  23 August: Equipping Sessions & Commissioning
                </h3>
                <p className="text-slate-600">
                  Morning & Afternoon session @ 09:00-17:00
                </p>
              </div>
            </div>
          </div>

          {/* Hotel Options - Right Column */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Hotel Options
            </h2>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="p-4 border-2 border-slate-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors flex items-center gap-4"
                  onClick={() => handleHotelClick(hotel)}
                >
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      {hotel.name}
                    </h2>
                    <p className="text-slate-600">{hotel.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Book Tickets CTA - Row below columns */}
        <div className="text-center mt-8 mb-16">
          <Button
            onClick={() => window.open(bookingUrl, "_blank")}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-7 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            size="lg"
          >
            Book inHabit 2025 Tickets
          </Button>
          <p className="mt-3 text-slate-600">
            <ExternalLink className="inline mr-1 h-4 w-4 text-slate-600" />
            trybooking.com
          </p>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 h-full w-auto z-0"
        style={{
          backgroundImage: "url('/images/chevron-pattern.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          backgroundPosition: "right center",
          width: "800px",
          opacity: "0.7",
        }}
      />
      {/* Hotel Modal */}
      <HotelModal
        hotel={selectedHotel}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ConferenceDetailsSection;
