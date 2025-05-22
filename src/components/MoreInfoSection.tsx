import React from "react";
import {
  BookOpen,
  Cross,
  Lightbulb,
  Globe,
  Calendar,
  Clock,
  Video,
  Link,
} from "lucide-react";

const MoreInfoSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-[#889a98]">
      <div className="max-w-7xl mx-auto">
        {/* Header and Description */}
        <div className="text-left mb-12">
          <h1 className="md:text-4xl font-bold text-white mb-6 text-5xl">
            What is inHabit?
          </h1>
          <div className="text-slate-100 space-y-4 md:w-2/3 text-3xl">
            <p>
              Spanning across 3 days, this conference, open to both local and
              international delegates, offers meticulously curated sessions for
              equipping, empowering and for transforming encounters with God.
            </p>
            <p>
              inHabit aims to cultivate an experiential learning environment set
              up for:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-left p-6 rounded-lg border border-white">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <div className="flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-[#889a98] mr-1" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Prophetic Encounter
            </h3>
            <p className="text-slate-100">
              Experience the prophetic in worship and learn how to generate a
              transforming environment and culture for the prophetic to flow.
              Receive biblically based teachings on hosting God's presence and
              advancing the Kingdom through authentic worship.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-left p-6 rounded-lg border border-white">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <Lightbulb className="w-10 h-10 text-[#889a98]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Equipping for Excellence
            </h3>
            <p className="text-slate-100">
              Receive ministry and training to sustain worship as a lifestyle.
              Our sessions blend practical skills with spiritual depth,
              preparing you to create environments where people genuinely
              encounter Jesus.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-left p-6 rounded-lg border border-white">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <Globe className="w-10 h-10 text-[#889a98]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Worship Beyond Walls
            </h3>
            <p className="text-slate-100">
              This gathering equips and commissions leaders to carry God's
              presence beyond church walls into every sphere of influence. Join
              a movement creating not just worship moments, but a lifestyle that
              transforms nations.
            </p>
          </div>
        </div>

        {/* Pre-Conference Connect Section */}
        <div className="mt-16 relative overflow-hidden">
          {/* Background "Connect" Text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ top: "150px" }}
          >
            <div
              className="text-black font-black text-9xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] select-none whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connect
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Description (spans 2 columns) */}
              <div className="md:col-span-2 text-slate-100 space-y-4 text-3xl">
                <p id="connect-details" className="mb-4">
                  Join us for an hour of candid conversation with Ps Neli as he:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Unpacks the vision and heart behind inHabit</li>
                  <li>
                    Shares insights for worship teams and ministry leaders
                  </li>
                  <li>
                    Explores how inHabit can support your worship community
                  </li>
                  <li>
                    Connects you with others passionate about authentic and
                    diverse worship
                  </li>
                </ul>
              </div>

              {/* Right Column - When and Where (spans 1 column) */}
              <div className="bg-white/10 p-6 rounded-lg border border-white">
                <h3 className="text-xl font-bold text-white mb-4">
                  Friday, 30 May
                </h3>

                <div className="space-y-6">
                  {/* First Session */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">6pm AEST</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">
                        Zoom Link:{" "}
                        <a
                          href="https://us02web.zoom.us/j/81986661721?pwd=naia6u8ruynaaQNGf6VLVY3mazw9bw.1"
                          className="underline"
                        >
                          Click here
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Link className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">Password: 4642248</span>
                    </div>
                  </div>

                  <div className="text-center flex justify-center items-center bg-white rounded-md">
                    <div className="text-[#889a9a]">OR</div>
                  </div>

                  {/* Second Session */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    Saturday, 31 May
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">8.00am AEST</span>
                    </div>
                    <div className="flex items-center">
                      <Video className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">
                        Zoom Link:{" "}
                        <a
                          href="https://us02web.zoom.us/j/81606190413?pwd=cdY4g5Bxn65Y3ep4oW9bhmVGBqzSc9.1"
                          className="underline"
                        >
                          Click here
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Link className="w-5 h-5 text-white mr-2" />
                      <span className="text-white">Password: 4642248</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfoSection;
