export interface Hotel {
  id: string;
  name: string;
  location: string;
  travelToENBHub: string;
  travelToQMC: string;
  reviews: string;
  website: string;
  images: string[];
}

export const hotels: Hotel[] = [
  {
    id: "eastwood-apartments",
    name: "Eastwood Apartments",
    location: "Logan Rd, Woolloongabba",
    travelToENBHub: "7 min drive / ~15 min public transport / 30 min walk",
    travelToQMC: "12 min drive / 25-30 min public transport",
    reviews:
      "positive – good location, proximity to supermarket / public transport, affordable, good rooms",
    website: "https://www.eastwoodbrisbane.com.au/",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    ],
  },
  {
    id: "hotel-chino",
    name: "Hotel Chino",
    location: "O'Keefe St, Woolloongabba",
    travelToENBHub: "9 min drive / ~15 min public transport / 35 min walk",
    travelToQMC: "12 min drive / ~30 min public transport",
    reviews:
      "positive – good location, proximity to public transport, clean & spacious rooms",
    website: "https://hotelchino.com.au/",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
  },
  {
    id: "rambla-south-city",
    name: "Rambla at South City SQ",
    location: "Logan Rd, Woolloongabba",
    travelToENBHub: "5 min drive / ~10 min public transport / 25 min walk",
    travelToQMC: "14 min drive / ~25 min public transport",
    reviews: "positive – clean rooms, good location, reasonably priced",
    website: "https://www.rambla.com.au/locations/south-city-sq",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    ],
  },
  {
    id: "rydges-south-bank",
    name: "Rydges South Bank Brisbane",
    location: "Glenelg St, South Brisbane",
    travelToENBHub: "~15 min drive / ~25 min public transport",
    travelToQMC: "~10 min drive / ~ 30 min public transport",
    reviews:
      "mostly positive – good location in South Bank with access to city, rooms are good value for money, some concern about noise",
    website:
      "https://www.rydges.com/accommodation/brisbane-qld/brisbane-south-bank/",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=800&q=80",
    ],
  },
  {
    id: "ibis-styles",
    name: "Ibis Styles Brisbane",
    location: "Elizabeth Street, Brisbane CBD",
    travelToENBHub: "14 min drive / 25 min public transport",
    travelToQMC: "12 min drive / 25 min public transport / 25 min walk",
    reviews:
      "mostly positive – location central to Brisbane CBD, rooms are clean and spacious but some concern about warm temperatures",
    website: "https://ibisstylesbrisbaneelizabeth.com.au/",
    images: [
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
  },
  {
    id: "the-point",
    name: "The Point Brisbane",
    location: "Kangaroo Point",
    travelToENBHub: "10-20 min drive / 45 min public transport",
    travelToQMC: "12 min walk",
    reviews:
      "positive – location close to ferry with easy access to city, clean & comfortable rooms",
    website: "https://gettothepoint.com.au/",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    ],
  },
];
