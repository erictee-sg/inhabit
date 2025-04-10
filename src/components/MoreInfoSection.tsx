import React from "react";
import { CircleUser, Lightbulb, Globe } from "lucide-react";

const MoreInfoSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#889a98]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <CircleUser className="w-10 h-10 text-[#889a98]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Prophetic Encounter
            </h3>
            <p className="text-slate-100">
              This conference commissions worship leaders, musicians, and
              creatives to build prophetic cultures that transform communities.
              Through biblical teaching, you'll learn to host God's presence and
              advance the Kingdom through authentic worship.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
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
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
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
