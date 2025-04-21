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
    id: "airbnb",
    name: "Airbnb",
    location:
      "Reasonably priced apartments and Airbnbs are available in Coorparoo and the neighboring suburb of Woolloongabba. Alternatively, you may consider booking in the more popular suburbs of South Brisbane (South Bank), Kangaroo Point, or the CBD, which are also within reasonable proximity to the hub.",
    travelToENBHub: "Varies by location",
    travelToQMC: "Varies by location",
    reviews: "Varies by property - check individual listings for reviews",
    website: "https://www.airbnb.com.au/s/Brisbane--Australia",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    ],
  },
  {
    id: "courtyard-marriott",
    name: "Courtyard by Marriott Brisbane South Bank",
    location: "218 Vulture Street, South Brisbane, 4101 Brisbane, Australia",
    travelToENBHub: "10-15 min drive / 25 min public transport",
    travelToQMC: "10-15 min drive / 35 min public transport",
    reviews: "Positive – good location, 30 min pleasant walk to the city",
    website:
      "https://www.marriott.com/en-us/hotels/bnecy-courtyard-brisbane-south-bank/",
    images: [
      "https://inhabit-dev.neliatiga.com/images/hotels-courtyardsouthbank01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-courtyardsouthbank02.jpg",
    ],
  },
  {
    id: "eastwood-apartments",
    name: "Eastwood Apartments",
    location: "Logan Rd, Woolloongabba",
    travelToENBHub: "7 min drive / ~15 min public transport / 30 min walk",
    travelToQMC: "12 min drive / 25-30 min public transport",
    reviews:
      "Positive – good location, proximity to supermarket / public transport, affordable, good rooms",
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
      "Positive – good location, proximity to public transport, clean & spacious rooms",
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
    reviews: "Positive – clean rooms, good location, reasonably priced",
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
      "Mostly positive – good location in South Bank with access to city, rooms are good value for money, some concern about noise",
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
      "Mostly positive – location central to Brisbane CBD, rooms are clean and spacious but some concern about warm temperatures",
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
      "Positive – location close to ferry with easy access to city, clean & comfortable rooms",
    website: "https://gettothepoint.com.au/",
    images: [
      "https://inhabit-dev.neliatiga.com/images/hotels-thepointbrisbane01.jpg",
      "https://inhabit-dev.neliatiga.com/images/hotels-thepointbrisbane02.jpg",
    ],
  },
];
