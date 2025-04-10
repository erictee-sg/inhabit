import React from "react";
import FAQ from "./FAQ";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is inHabit?",
      answer:
        "inHabit is developed by Pastor Neli Atiga (Every Nation Brisbane, Australia). It is a three day international gathering, offering you the opportunity for deep encounters with God, biblical teaching, and hands-on training, exploring how to host God's presence, release the sound of heaven, and co-labour effectively with ministry leaders to see the Kingdom advance through worship.",
      answerHTML: (
        <>
          inHabit is developed by Pastor Neli Atiga (Every Nation Brisbane,
          Australia). It is a three day international gathering, offering you
          the opportunity for deep encounters with God, biblical teaching, and
          hands-on training, exploring how to host God's presence, release the
          sound of heaven, and co-labour effectively with ministry leaders to
          see the{" "}
          <a
            href="https://youtu.be/f4eiXwkxVgM"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kingdom advance through worship
          </a>
          .
        </>
      ),
    },
    {
      question: "Who should attend inHabit?",
      answer:
        "Whether you're a seasoned leader or just stepping into your calling - inHabit is for you. Worship leaders, musicians, pastors, creatives, intercessors, dancers, artists - whether you're in full-time ministry or living out your faith in the marketplace, inHabit is designed to equip and commission you.",
    },
    {
      question: "What to expect from the experience?",
      answer:
        "Expect powerful worship, transformative teaching, personal ministry, prophetic encouragement to sustain a lifestyle of worship, and a strong sense of commissioning. An opportunity to share with other creatives and leaders from around the world, encouraging us and demonstrating in a very real way that we are part of a global movement. It's not just about what happens during our time together at inHabit, it's about how you'll be launched into what comes next.",
    },
    {
      question: "What does the registration fee include?",
      answer:
        "Your pass includes access to all sessions for 3 days, breakout sessions, resource materials, and tea breaks. Flights and accommodations are not included.",
    },
    {
      question: "Are group rates available?",
      answer:
        "Early bird Registration is available until May 31 at a discounted rate. We encourage churches and teams to attend together. Special group rates are available starting on June 1 for groups of 5 or more.",
    },
    {
      question: "Where is inHabit being held?",
      answer:
        "inHabit will take place at Coorparoo, Queensland 4151 Brisbane, Australia. Full directions and other info will be sent as soon as it’s available.",
    },
    {
      question: "What are the best travel options to the venue?",
      answer:
        "You can fly into Brisbane Airport, and the venue is approximately 30 minutes from there. ",
    },
    {
      question: "Is there accommodation available near the venue?",
      answer: "Yes! Please see the list of options for accommodations.",
      answerHTML: (
        <>
          Yes! Please see the{" "}
          <a
            href="#event-details"
            className="text-blue-600 underline hover:text-blue-800"
          >
            list of options for accommodations
          </a>
          .
        </>
      ),
    },
    {
      question: "Will there be food available?",
      answer:
        "Main meals are not included in the registration fee, but tea breaks will be provided. Complimentary coffee and tea will be available throughout the day. There will also be cafes and restaurants  nearby for lunch and dinner options. A list of recommended eateries will be shared closer to the date.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your Bible, journal, and an open heart. If you're a creative (photographer, artist, dancer), feel free to bring your tools of expression. Comfortable clothing and a refillable water bottle are also recommended.",
    },
    {
      question: "Will childcare be available?",
      answer:
        "At this time, we are not able to provide childcare. We recommend this event for ages 16 and above unless otherwise specified.",
    },
    {
      question: "Will the sessions be recorded or livestreamed?",
      answer:
        "Some sessions may be recorded, but inHabit is primarily designed to be an in-person experience. We encourage you to be there physically if possible—you won't want to miss the atmosphere in the room!",
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
