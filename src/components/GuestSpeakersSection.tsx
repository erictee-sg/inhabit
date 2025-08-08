import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface Speaker {
  id: string;
  name: string;
  imageUrl: string;
  shortBio: string;
  fullBio: string;
}

interface GuestSpeakersSectionProps {
  speakers?: Speaker[];
}

const GuestSpeakersSection = ({
  speakers = [
    {
      id: "josh-burnett",
      name: "Josh Burnett",
      imageUrl: "https://inhabit-dev.neliatiga.com/images/josh-burnett2.jpg",
      shortBio:
        "Josh Burnett is a man who carries a true heart of worship. Wholly submitted to Jesus, Josh is fully devoted to leading people into God's presence. He is passionate about the local church and believes that as worshipers, we are called to steward the gift that God has placed in us to its full potential.",
      fullBio:
        "Josh Burnett is a man who carries a true heart of worship. Wholly submitted to Jesus, Josh is fully devoted to leading people into God's presence. He is passionate about the local church and believes that as worshipers, we are called to steward the gift that God has placed in us to its full potential and to partner with the Holy Spirit in such potency that lives are changed in His presence.\n\nOn top of his massive passion for worshippers and creative teams: Josh is a husband, father of two, a multidisciplinary musician and MD, songwriter, producer, and studio engineer with particular expertise in creative technology. In his current capacity as Global Creative Development Director for Citipointe Church: Josh invests into creative teams across the globe in spiritual/practical leadership and culture to upskilling across many disciplines.",
    },
    {
      id: "chardon-lewis",
      name: "Chardon Lewis",
      imageUrl: "https://inhabit-dev.neliatiga.com/images/chardon-lewis.jpg",
      shortBio:
        "Chardon Lewis is the Global Creative Director of Citipointe Church. Along with his wife Jasmine, Chardon has a great desire to see people identify their God-designed creative gifts and activate them to magnify Jesus, serve their local church and reach people through their creative spheres of influence.",
      fullBio:
        'Chardon Lewis is the Global Creative Director of Citipointe Church. Along with his wife Jasmine, Chardon has a great desire to see people identify their God-designed creative gifts and activate them to magnify Jesus, serve their local church and reach people through their creative spheres of influence. Chardon & Jasmine have three sons, Hunter Duke and Knox Archibald and Ace Zephyr. Together, they launched a movement of Young Adults at Citipointe Church called "YASociety" which has rapidly become one of the most significant Young Adult communities that is recognised all across the globe.\n\nChardon has an incredible ability to develop pastors & leaders in creating a strong culture with momentum which sees him invited to speak all over the world at conferences, church services and events. Chardon and Jasmine\'s greatest passion is to see every individual walk in an intimate relationship with the Holy Spirit and as a result be a carrier of His presence everywhere they go. Chardon is a world-wide recognised songwriter and worship leader and is most recognised for his song "Into the Deep" which has reached millions of streams on Spotify alone. Developing worship leaders and Creative teams in how to lead a strong worship culture within your church is one of Chardon\'s greatest gifts and passions.',
    },
  ],
}: GuestSpeakersSectionProps) => {
  return (
    <section id="guest-speakers" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <h2 className="md:text-3xl text-left text-white mb-12 font-normal text-3xl">
          Guest Speakers
        </h2>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker) => (
            <Card
              key={speaker.id}
              className="bg-white/10 border-white/20 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="w-full md:w-1/3">
                    <img
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      className="w-full h-54 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {speaker.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {speaker.shortBio}
                    </p>
                    <Link
                      to={`/speaker/${speaker.id}`}
                      className="inline-flex items-center px-4 py-2 border border-white/50 text-white font-normal text-sm rounded-none hover:bg-white/10 hover:border-white transition-all"
                    >
                      Read More »
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestSpeakersSection;
