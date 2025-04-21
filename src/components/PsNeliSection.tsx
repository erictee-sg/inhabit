import React from "react";
import { Link } from "react-router-dom";

const PsNeliSection = () => {
  // 40-word summary of the full content
  const summary =
    "Neli Atiga has served in pastoral ministry since 2000. He leads worship globally and currently pastors Every Nation Brisbane with his wife Tina.";

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-left text-slate-900 mb-0 leading-tight">
              Ps. Neli Atiga
            </h1>
            <h2 className="md:text-3xl text-[#889a98] mb-12 text-3xl leading-tight mt-0">
              inHabit Founder
            </h2>
            <p className="text-3xl mb-6">{summary}</p>
            <Link
              to="/ps-neli-detail"
              className="inline-flex items-center px-6 py-3 border border-[#889a98] text-[#889a98] font-normal rounded-none hover:bg-[#889a98] hover:text-white transition-all"
            >
              Read More »
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src="https://inhabit-dev.neliatiga.com/images/ps-neli-about-portrait.jpg"
              alt="Ps. Neli Atiga"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsNeliSection;
