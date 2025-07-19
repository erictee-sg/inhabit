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
      className="py-16 px-4 md:px-8 from-[#464f4e] to-[#464f4e]/80 relative overflow-hidden rotate-[180deg] to-[100%] via-[#464f4e]/90 from-[38%] via-[76%] bg-gradient-to-r"
    >
      <div className="max-w-7xl mx-auto rotate-180 relative z-10">
        {/* Section Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-left text-white mb-12">
          Registration Details
        </h1>

        {/* Pricing Table - Full Width */}
        <div className="mb-0">
          <PricingTable />
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
