import React, { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Hotel } from "@/data/hotels";

interface HotelModalProps {
  hotel: Hotel | null;
  isOpen: boolean;
  onClose: () => void;
}

const HotelModal: React.FC<HotelModalProps> = ({ hotel, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!hotel) return null;

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + hotel.images.length) % hotel.images.length,
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {hotel.name}
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            {hotel.location}
          </DialogDescription>
        </DialogHeader>

        <div className="my-4">
          <div className="relative rounded-lg overflow-hidden h-64">
            {hotel.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${hotel.name} - Image ${index + 1}`}
                className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
              />
            ))}

            {/* Navigation arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {currentImageIndex + 1} / {hotel.images.length}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-slate-900">Travel to ENB Hub</h3>
            <p className="text-slate-600">{hotel.travelToENBHub}</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">Travel to QMC</h3>
            <p className="text-slate-600">{hotel.travelToQMC}</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900">Reviews</h3>
            <p className="text-slate-600">{hotel.reviews}</p>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button
            onClick={() => window.open(hotel.website, "_blank")}
            className="bg-brand-primary hover:bg-brand-primary/90 text-white"
          >
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HotelModal;
