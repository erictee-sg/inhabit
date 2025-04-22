import React from "react";
import { BookOpen, Cross, Lightbulb, Globe } from "lucide-react";

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
              international delegates, offer meticulously curated sessions for
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
      </div>
    </section>
  );
};

export default MoreInfoSection;
