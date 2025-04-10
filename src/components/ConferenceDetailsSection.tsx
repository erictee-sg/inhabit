import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const ConferenceDetailsSection = () => {
  const bookingUrl =
    "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets";

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-[#889a9866] rotate-180 relative overflow-hidden">
      <div className="max-w-7xl mx-auto rotate-180 relative z-10">
        {/* Section Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Conference Details
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 mb-16">
          {/* Pricing Section - Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Pricing
            </h2>
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#889a9a] text-white">
                    <th className="p-4 text-left border">Registration</th>
                    <th className="p-4 text-left border">Date</th>
                    <th className="p-4 text-left border">Booking type</th>
                    <th className="p-4 text-right border">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="p-4 border">Early bird</td>
                    <td className="p-4 border">12 April - 31 May</td>
                    <td className="p-4 border">Individual booking</td>
                    <td className="p-4 text-right border font-semibold">
                      $90.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-4 border" rowSpan={2}>
                      Regular sign up
                    </td>
                    <td className="p-4 border" rowSpan={2}>
                      1 June - 31 July
                    </td>
                    <td className="p-4 border">Individual booking</td>
                    <td className="p-4 text-right border font-semibold">
                      $130.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="p-4 border">Group booking (minimum 5)</td>
                    <td className="p-4 text-right border font-semibold">
                      $100.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Programme Details - Column 2 */}
          <div>
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">
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
        </div>

        {/* Book Tickets CTA - Row below columns */}
        <div className="text-center mt-8 mb-16">
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
    </section>
  );
};

export default ConferenceDetailsSection;
