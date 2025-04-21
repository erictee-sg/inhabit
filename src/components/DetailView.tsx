import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DetailView = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              About Ps. Neli Atiga
            </h1>
          </div>

          {/* Image - Right column on desktop */}
          <div className="w-full md:w-1/2">
            <img
              src="https://inhabit-dev.neliatiga.com/images/ps-neli-about-portrait2.jpg"
              alt="Ps. Neli Atiga"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Content - Full width row below header and image */}
        <div className="w-full mb-10">
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              Neli Atiga was raised in Auckland, New Zealand as a part of a
              musical Samoan family rooted in generations of pastors, hymn
              composers, and vocalists. A classically trained pianist from the
              age of five, Neli's passion for music deepened through Gospel, Hip
              Hop, and Jazz, eventually leading him to Dj'ing and MCing, band
              performance, and worship leadership.
            </p>
            <p>
              Since 2000, Neli has served in pastoral ministry with Every
              Nation, beginning as a campus minister in New Zealand, later
              stepping into worship leadership and global worship team training
              in nations and settings around the world, from large worship
              conferences and churches to smaller ministry gatherings and new
              church plants. A theological postgraduate from the University of
              Auckland in New Zealand and Wheaton College in the US, his heart
              burns to see the arts redeemed for Christ and worship leaders
              equipped in both craft and calling.
            </p>
            <p>
              Apart from pastoring in Auckland, Neli has served as a pastor
              alongside his wife Tina in Singapore, and now Brisbane, where they
              lead Every Nation Brisbane—an intercultural, intergenerational
              church in the heart of the city. Whether in a packed auditorium or
              a bar-turned-sanctuary on Orchard Road, his mission remains the
              same: to create environments where people encounter the presence
              of God.
            </p>
            <p>
              He is a proud husband and father of three: Nazareth, Zion, and
              Jordan.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-normal text-[#889a98] mb-6">
            Watch Neli talk about inHabit
          </h2>

          <div
            className="relative rounded-lg overflow-hidden shadow-lg w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/hxeWRuNMivc"
              title="Neli talks about inHabit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
