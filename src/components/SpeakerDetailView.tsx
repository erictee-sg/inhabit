import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Speaker {
  id: string;
  name: string;
  imageUrl: string;
  fullBio: string;
}

const speakers: Speaker[] = [
  {
    id: "josh-burnett",
    name: "Josh Burnett",
    imageUrl: "https://inhabit-dev.neliatiga.com/images/josh-burnett-hor.jpg",
    fullBio:
      "Josh Burnett is a man who carries a true heart of worship. Wholly submitted to Jesus, Josh is fully devoted to leading people into God's presence. He is passionate about the local church and believes that as worshipers, we are called to steward the gift that God has placed in us to its full potential and to partner with the Holy Spirit in such potency that lives are changed in His presence.\n\nOn top of his massive passion for worshippers and creative teams: Josh is a husband, father of two, a multidisciplinary musician and MD, songwriter, producer, and studio engineer with particular expertise in creative technology. In his current capacity as Global Creative Development Director for Citipointe Church: Josh invests into creative teams across the globe in spiritual/practical leadership and culture to upskilling across many disciplines.",
  },
  {
    id: "chardon-lewis",
    name: "Chardon Lewis",
    imageUrl: "https://inhabit-dev.neliatiga.com/images/chardon-lewis-hor.jpg",
    fullBio:
      'Chardon Lewis is the Global Creative Director of Citipointe Church. Along with his wife Jasmine, Chardon has a great desire to see people identify their God-designed creative gifts and activate them to magnify Jesus, serve their local church and reach people through their creative spheres of influence. Chardon & Jasmine have three sons, Hunter Duke and Knox Archibald and Ace Zephyr. Together, they launched a movement of Young Adults at Citipointe Church called "YASociety" which has rapidly become one of the most significant Young Adult communities that is recognised all across the globe.\n\nChardon has an incredible ability to develop pastors & leaders in creating a strong culture with momentum which sees him invited to speak all over the world at conferences, church services and events. Chardon and Jasmine\'s greatest passion is to see every individual walk in an intimate relationship with the Holy Spirit and as a result be a carrier of His presence everywhere they go. Chardon is a world-wide recognised songwriter and worship leader and is most recognised for his song "Into the Deep" which has reached millions of streams on Spotify alone. Developing worship leaders and Creative teams in how to lead a strong worship culture within your church is one of Chardon\'s greatest gifts and passions.',
  },
];

const SpeakerDetailView = () => {
  const navigate = useNavigate();
  const { speakerId } = useParams<{ speakerId: string }>();

  const speaker = speakers.find((s) => s.id === speakerId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!speaker) {
    return (
      <div className="min-h-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#889a98] mb-8 hover:text-opacity-80 transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-normal text-[#889a98] mb-6">
            Speaker not found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#889a98] mb-8 hover:text-opacity-80 transition-all"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Header - Mobile: Stacked, Desktop: Two columns */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
          {/* Text Header - Left column on desktop */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-normal text-[#889a98] mb-6">
              About {speaker.name}
            </h1>
          </div>

          {/* Image - Right column on desktop */}
          <div className="w-full md:w-1/2">
            <img
              src={speaker.imageUrl}
              alt={speaker.name}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Content - Full width row below header and image */}
        <div className="w-full mb-10">
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            {speaker.fullBio.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetailView;
