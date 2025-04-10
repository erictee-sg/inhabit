import React from "react";
import { ExternalLink } from "lucide-react";
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
  if (!hotel) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {hotel.name}
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            {hotel.location}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          {hotel.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden h-64">
              <img
                src={image}
                alt={`${hotel.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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
