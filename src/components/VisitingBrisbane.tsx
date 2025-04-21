import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccommodationDetailOverlay from "./AccommodationDetailOverlay";

const VisitingBrisbane = () => {
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const location = useLocation();

  const handleHotelClick = (hotelId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation to prevent any parent handlers
    // Store current scroll position before setting the hotel
    const scrollPosition = window.scrollY;
    setSelectedHotel(hotelId);
    // Restore scroll position after a short delay to ensure it happens after state update
    setTimeout(() => window.scrollTo(0, scrollPosition), 10);
  };

  // Check if we need to open a specific accordion when the component mounts
  useEffect(() => {
    if (location.state && location.state.openAccordion) {
      setOpenAccordion(location.state.openAccordion);

      // Scroll to the accordion section
      const element = document.getElementById(location.state.openAccordion);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="visiting-brisbane" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-heading-bold mb-8 text-left">
          Visiting Brisbane
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1802244164355!2d153.05349271161768!3d-27.494769976206182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1fcc5eaa6f%3A0x375bc6ccbb6d2bc1!2sEvery%20Nation%20Brisbane!5e0!3m2!1sen!2sus!4v1745079747552!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full">
            <p className="text-xl mb-6">
              The conference is located at the Every Nation Brisbane Hub (ENB
              Hub) - 3/61 Holdsworth Street, Coorparoo 4151
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openAccordion}
              onValueChange={setOpenAccordion}
            >
              <AccordionItem value="item-1" id="suggested-accommodation">
                <AccordionTrigger className="text-xl font-normal">
                  Suggested Accommodation
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("airbnb")}
                        className="text-blue-600"
                      >
                        Airbnb
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("courtyard-marriott")}
                        className="text-blue-600"
                      >
                        Courtyard by Marriott Brisbane South Bank
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("eastwood-apartments")}
                        className="text-blue-600"
                      >
                        Eastwood Apartments
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("hotel-chino")}
                        className="text-blue-600"
                      >
                        Hotel Chino
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("rambla-south-city")}
                        className="text-blue-600"
                      >
                        Rambla at South City SQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("rydges-south-bank")}
                        className="text-blue-600"
                      >
                        Rydges South Bank Brisbane
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={handleHotelClick("the-point")}
                        className="text-blue-600"
                      >
                        The Point Brisbane
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-normal">
                  Transportation
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Getting around Brisbane is simple with the TransLink
                      network, which connects buses, trains, and ferries across
                      southeast Queensland. Use a Go Card, available at
                      stations, convenience stores, and the airport, or pay
                      contactless on select trains.
                    </p>
                    <p>
                      Driving is easy, with public parking at King George Square
                      and Wickham Terrace. Check if your hotel charges for
                      parking.
                    </p>
                    <p>
                      From the airport, take the Airtrain to the city in 20
                      minutes, or choose a taxi, rideshare, or door-to-door
                      transfer.
                    </p>
                    <p>
                      For more details, visit the{" "}
                      <a
                        href="https://www.australia.com/en-sg/places/brisbane-and-surrounds/getting-around-brisbane.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        official Australia tourism website
                      </a>
                      .
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-normal">
                  Australian Entry Requirements
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Australia enforces strict border rules on items brought into
                    the country to protect its unique environment and
                    agriculture. For more information on immigration
                    requirements, visit{" "}
                    <a
                      href="https://immi.homeaffairs.gov.au/entering-and-leaving-australia/entering-australia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      this link
                    </a>
                    .
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {selectedHotel && (
        <AccommodationDetailOverlay
          hotelId={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </section>
  );
};

export default VisitingBrisbane;
