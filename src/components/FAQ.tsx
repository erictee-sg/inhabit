import React from "react";

type FAQItem = {
  question: string;
  answer: string;
  answerHTML?: React.ReactNode;
};

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items = [] }: FAQProps) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-heading-bold mb-8 text-left">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border-8 border-gray-300"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {item.question}
            </h3>
            <div className="text-slate-600">
              {item.answerHTML ? item.answerHTML : item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
