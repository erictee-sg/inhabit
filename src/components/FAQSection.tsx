import React from "react";
import FAQ from "./FAQ";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What does the registration fee include?",
      answer:
        "Your pass includes access to all sessions for 3 days, breakout sessions, resource materials, and tea breaks. Flights and accommodations are not included.\n\nMain meals are not included in the registration fee, but tea breaks will be provided. Complimentary coffee and tea will be available throughout the day. There will also be cafes and restaurants nearby for lunch and dinner options. A list of recommended eateries will be shared closer to the date.",
    },
    {
      question: "Will childcare be available?",
      answer:
        "At this time, we are not able to provide childcare. We recommend this event for ages 16 and above unless otherwise specified.",
    },
    {
      question: "Will the sessions be recorded or livestreamed?",
      answer:
        "Some sessions may be recorded, but inHabit is primarily designed to be an in-person experience. We encourage you not to miss out on this gathering.",
    },
  ];

  return (
    <section id="faqs" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FAQ items={faqItems} />
      </div>
    </section>
  );
};

export default FAQSection;
