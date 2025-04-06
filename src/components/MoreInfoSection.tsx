import React from "react";
import { CircleUser, Lightbulb, Globe, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const MoreInfoSection = () => {
  const bookingUrl =
    "https://www.trybooking.com/events/1383334/sessions/5534205/sections/2638189/tickets";

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-full bg-[#889a9a] flex items-center justify-center mb-6">
              <CircleUser className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Prophetic Encounter
            </h3>
            <p className="text-slate-600">
              This conference commissions worship leaders, musicians, and
              creatives to build prophetic cultures that transform communities.
              Through biblical teaching, you'll learn to host God's presence and
              advance the Kingdom through authentic worship.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-full bg-[#889a9a] flex items-center justify-center mb-6">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Equipping for Excellence
            </h3>
            <p className="text-slate-600">
              Receive ministry and training to sustain worship as a lifestyle.
              Our sessions blend practical skills with spiritual depth,
              preparing you to create environments where people genuinely
              encounter Jesus.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-full bg-[#889a9a] flex items-center justify-center mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Worship Beyond Walls
            </h3>
            <p className="text-slate-600">
              This gathering equips and commissions leaders to carry God's
              presence beyond church walls into every sphere of influence. Join
              a movement creating not just worship moments, but a lifestyle that
              transforms nations.
            </p>
          </div>
        </div>

        {/* Book Tickets CTA */}
        <div className="mt-16 text-center">
          <Button
            onClick={() => window.open(bookingUrl, "_blank")}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-7 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
            size="lg"
          >
            Book Tickets
          </Button>
          <p className="mt-3 text-slate-600">
            <ExternalLink className="inline mr-1 h-4 w-4 text-slate-600" />
            trybooking.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreInfoSection;
