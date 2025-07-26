import React from "react";

const WorshipNightSection = () => {
  const description =
    "We invite you to join inHabit conference participants and worshippers across Brisbane to create a space where King Jesus is welcome and lifted high! Come as you are and let's give Him the highest praise on this one night open to all. Register now to ensure a free seat.";

  return (
    <section id="worship-night" className="py-16 px-4 md:px-8 bg-[#464f4e]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-left text-white mb-0 leading-tight">
              inHabit Worship Night
            </h1>
            <h2 className="md:text-3xl text-gray-400 mb-12 text-3xl leading-tight mt-0">
              7pm 22 August, Queensland Multicultural Centre
            </h2>
            <p className="text-3xl mb-6 text-white">{description}</p>
            <a
              href="https://www.trybooking.com/events/1442646/sessions/5789118/sections/2767856/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#fa7a2c] text-[#fa7a2c] font-normal rounded-none hover:bg-[#fa7a2c] hover:text-white transition-all"
            >
              Free Admission »
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src="https://inhabit-dev.neliatiga.com/images/worship01-unsplash.jpg"
              alt="inHabit Worship Night"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipNightSection;
