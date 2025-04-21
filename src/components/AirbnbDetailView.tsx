import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Star,
  Users,
  Wifi,
  Tv,
  Coffee,
} from "lucide-react";

interface AirbnbOption {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
  amenities: string[];
  description: string;
  link: string;
  distance: string;
}

const airbnbOptions: AirbnbOption[] = [
  {
    id: "1",
    title: "Modern Apartment in Coorparoo",
    location: "Coorparoo, Brisbane",
    price: "$120 AUD per night",
    rating: 4.8,
    reviewCount: 65,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    amenities: [
      "Wifi",
      "Kitchen",
      "Air conditioning",
      "Washer",
      "Free parking",
    ],
    description:
      "Bright and spacious apartment in the heart of Coorparoo. Walking distance to cafes, restaurants, and public transport. Only 15 minutes to the conference venue.",
    link: "https://airbnb.com",
    distance: "15 min drive to venue",
  },
  {
    id: "2",
    title: "Cozy Studio in Woolloongabba",
    location: "Woolloongabba, Brisbane",
    price: "$95 AUD per night",
    rating: 4.6,
    reviewCount: 42,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    amenities: ["Wifi", "Kitchen", "Pool", "Gym", "Dedicated workspace"],
    description:
      "Stylish studio apartment in Woolloongabba with modern amenities. Close to The Gabba stadium and easy access to public transport. Perfect for conference attendees.",
    link: "https://airbnb.com",
    distance: "10 min drive to venue",
  },
  {
    id: "3",
    title: "Luxury Apartment in South Bank",
    location: "South Bank, Brisbane",
    price: "$180 AUD per night",
    rating: 4.9,
    reviewCount: 87,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    amenities: ["Wifi", "Kitchen", "Pool", "Gym", "River views", "Balcony"],
    description:
      "Premium apartment with stunning views of the Brisbane River and city skyline. Located in the vibrant South Bank precinct with restaurants, cafes, and cultural attractions at your doorstep.",
    link: "https://airbnb.com",
    distance: "20 min drive to venue",
  },
  {
    id: "4",
    title: "Charming Queenslander in Kangaroo Point",
    location: "Kangaroo Point, Brisbane",
    price: "$150 AUD per night",
    rating: 4.7,
    reviewCount: 53,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    amenities: ["Wifi", "Kitchen", "Garden", "Patio", "Free street parking"],
    description:
      "Traditional Queenslander home with modern comforts. Enjoy the peaceful garden and outdoor dining area. Located in Kangaroo Point with easy access to the CBD and conference venues.",
    link: "https://airbnb.com",
    distance: "15 min drive to venue",
  },
];

const AirbnbDetailView = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<AirbnbOption | null>(
    null,
  );

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const accordionItem = document.querySelector(
                '[data-state="closed"][value="item-1"]',
              );
              if (accordionItem) {
                accordionItem.click();
              }
              const accommodationSection = document.getElementById(
                "suggested-accommodation",
              );
              if (accommodationSection) {
                accommodationSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
          className="flex items-center text-[#889a98] mb-8 hover:text-opacity-80 transition-all"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Accommodation Options
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
            alt="Airbnb in Brisbane"
            className="rounded-lg shadow-lg w-full md:w-1/3 h-auto object-cover"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#889a98] mb-4">
              Airbnb Options
            </h1>
            <p className="text-lg text-slate-600">
              Find comfortable and convenient accommodations near the conference
              venue
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-slate-700 space-y-6 mb-10">
          <p>
            Reasonably priced apartments and Airbnbs are available in Coorparoo
            and the neighboring suburb of Woolloongabba on trusted websites.
            Alternatively, you may consider booking in the more popular suburbs
            of South Brisbane (South Bank), Kangaroo Point, or the CBD, which
            are also within reasonable proximity to the hub.
          </p>
          <p>
            Below are some recommended options that offer good value and
            convenient access to the conference venue. Click on any listing to
            view more details or visit the Airbnb website to make a booking.
          </p>
        </div>

        {/* Airbnb Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {airbnbOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedOption(option)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-[#889a98] mr-1" />
                  <span className="text-sm text-gray-500">
                    {option.location}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#889a98]">
                  {option.title}
                </h3>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{option.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({option.reviewCount} reviews)
                  </span>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{option.distance}</p>
                <p className="font-semibold text-[#889a98]">{option.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Tips */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#889a98] mb-4">
            Booking Tips
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="bg-[#889a98] rounded-full p-1 text-white mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>
                Book early to secure the best rates and availability, especially
                if you're attending during peak season.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#889a98] rounded-full p-1 text-white mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>
                Check the reviews and ratings from previous guests before making
                your reservation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#889a98] rounded-full p-1 text-white mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>
                Consider the proximity to public transport if you won't have a
                car during your stay.
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#889a98] rounded-full p-1 text-white mr-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>
                Message the host with any specific questions or requirements
                before booking.
              </span>
            </li>
          </ul>
        </div>

        {/* Selected Option Modal */}
        {selectedOption && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-[#889a98]">
                    {selectedOption.title}
                  </h2>
                  <button
                    onClick={() => setSelectedOption(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <img
                    src={selectedOption.image}
                    alt={selectedOption.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-[#889a98] mr-2" />
                      <span className="text-gray-700">
                        {selectedOption.location}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="font-medium">
                        {selectedOption.rating}
                      </span>
                      <span className="text-gray-500 ml-1">
                        ({selectedOption.reviewCount} reviews)
                      </span>
                    </div>
                    <p className="text-xl font-semibold text-[#889a98] mb-2">
                      {selectedOption.price}
                    </p>
                    <p className="text-gray-600">{selectedOption.distance}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedOption.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center">
                          {amenity.includes("Wifi") && (
                            <Wifi className="w-4 h-4 mr-2 text-[#889a98]" />
                          )}
                          {amenity.includes("TV") && (
                            <Tv className="w-4 h-4 mr-2 text-[#889a98]" />
                          )}
                          {amenity.includes("Kitchen") && (
                            <Coffee className="w-4 h-4 mr-2 text-[#889a98]" />
                          )}
                          {!amenity.includes("Wifi") &&
                            !amenity.includes("TV") &&
                            !amenity.includes("Kitchen") && (
                              <Users className="w-4 h-4 mr-2 text-[#889a98]" />
                            )}
                          <span className="text-gray-600 text-sm">
                            {amenity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{selectedOption.description}</p>
                </div>

                <div className="flex justify-end">
                  <a
                    href={selectedOption.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#889a98] text-white px-6 py-2 rounded-md flex items-center hover:bg-opacity-90 transition-colors"
                  >
                    View on Airbnb
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirbnbDetailView;
