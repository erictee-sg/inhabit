import React, { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { hotels } from "@/data/hotels";
import { useNavigate } from "react-router-dom";

interface AccommodationDetailOverlayProps {
  hotelId: string;
  onClose: () => void;
}

const AccommodationDetailOverlay: React.FC<AccommodationDetailOverlayProps> = ({
  hotelId,
  onClose,
}) => {
  const navigate = useNavigate();
  const hotel = hotels.find((h) => h.id === hotelId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Only prevent background scrolling when modal is open
  useEffect(() => {
    // Prevent scrolling of the background content
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scroll ability when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!hotel) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hotel.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-full bg-white py-12 px-4 md:px-8 max-w-4xl mx-auto my-8 rounded-lg shadow-xl">
        {/* Back button */}
        <button
          onClick={onClose}
          className="flex items-center text-[#889a98] mb-8 hover:text-opacity-80 transition-all"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Header - Mobile: Stacked, Desktop: Two columns */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
          {/* Text Header - Left column on desktop */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-normal text-[#889a98] mb-6">
              {hotel.name}
            </h2>
          </div>

          {/* Image - Right column on desktop */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden">
            <img
              src={hotel.images[currentImageIndex]}
              alt={hotel.name}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            {hotel.images.length > 1 && (
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {hotel.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content - Full width row below header and image */}
        <div className="w-full mb-10">
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <div>
              <h3 className="text-2xl font-normal mt-6 mb-2">Location</h3>
              <p>{hotel.location}</p>

              <h3 className="text-2xl font-normal mt-6 mb-2">Travel Times</h3>
              <p>
                <strong>To ENB Hub:</strong> {hotel.travelToENBHub}
              </p>
              <p>
                <strong>To QMC:</strong> {hotel.travelToQMC}
              </p>

              <h3 className="text-2xl font-normal mt-6 mb-2">Reviews</h3>
              <p>{hotel.reviews}</p>

              <div className="mt-8">
                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Visit accommodation website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetailOverlay;
