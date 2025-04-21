import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import CountdownTimer from "./CountdownTimer";

const CTASection = () => {
  const bookingUrl =
    "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets";

  // inHabit event date: August 21, 2025
  const eventDate = new Date("2025-08-21T09:00:00");

  return (
    <section
      className="py-16 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(35deg, #fa7a2c, #889a98, #000000)",
      }}
    >
      {/* Diamond Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://inhabit-dev.neliatiga.com/images/inHabit-diamondbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.1",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Countdown Timer */}
        <div className="mb-8 text-white">
          <CountdownTimer targetDate={eventDate} />
        </div>

        {/* Book Tickets CTA */}
        <div className="text-center">
          <Button
            onClick={() => window.open(bookingUrl, "_blank")}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-7 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            size="lg"
          >
            Book your tickets
          </Button>
          <p className="mt-3 text-white/80">
            <ExternalLink className="inline mr-1 h-4 w-4 text-white/60" />
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
          opacity: "0.3",
        }}
      />
    </section>
  );
};

export default CTASection;
