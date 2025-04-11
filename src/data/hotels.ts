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
      "https://inhabit-dev.neliatiga.com/images/hotels-eastwoodbrisbane01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-eastwoodbrisbane02.jpg",
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
      "https://inhabit-dev.neliatiga.com/images/hotels-hotelchino01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-hotelchino02.jpg",
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
      "https://inhabit-dev.neliatiga.com/images/hotels-rambla01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-rambla02.jpg",
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
      "https://inhabit-dev.neliatiga.com/images/hotels-rydges01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-rydges02.jpg",
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
      "https://inhabit-dev.neliatiga.com/images/hotels-ibisstyles01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-ibisstyles02.jpg",
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
      "https://inhabit-dev.neliatiga.com/images/hotels-thepointbrisbane01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-thepointbrisbane02.jpg",
    ],
  },
];
