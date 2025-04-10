import React from "react";
import FAQ from "./FAQ";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is inHabit?",
      answer:
        "inHabit is developed by Pastor Neli Atiga (Every Nation Brisbane, Australia). It is a three day international gathering, offering you the opportunity for deep encounters with God, biblical teaching, and hands-on training, exploring how to host God's presence, release the sound of heaven, and co-labour effectively with ministry leaders to see the Kingdom advance through worship.",
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
        "inHabit will be held at Every Nation Brisbane, 100 Flockton Street, Everton Park, QLD 4053, Australia. The venue offers modern facilities with ample parking and is easily accessible by public transport.",
    },
    {
      question: "Is there accommodation available near the venue?",
      answer:
        "While we don't provide accommodation, there are several hotels and serviced apartments within a 10-15 minute drive from the venue. We recommend booking early as August is a popular time for visitors to Brisbane.",
    },
    {
      question: "Will there be food available?",
      answer:
        "Light refreshments will be provided during tea breaks. For meals, there are several cafes and restaurants within walking distance of the venue, and a list of recommended eateries will be provided in your welcome pack.",
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer:
        "Refunds are available up to 30 days before the event with a 15% administration fee. Within 30 days of the event, we can transfer your registration to another person but cannot offer refunds. Please contact our team at support@inhabitconference.com for assistance.",
    },
    {
      question: "Will sessions be recorded?",
      answer:
        "Yes, all main sessions will be recorded and made available to registered attendees after the conference for a limited time. Breakout sessions will not be recorded to encourage open sharing and participation.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <FAQ items={faqItems} />
      </div>
    </section>
  );
};

export default FAQSection;
