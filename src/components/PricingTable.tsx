import React from "react";
import { Button } from "./ui/button";

interface PricingTier {
  registration: string;
  date: string;
  bookingTypes: {
    type: string;
    price: string;
  }[];
  buttonUrl: string;
}

const pricingTiers: PricingTier[] = [
  /*
  {
    registration: "Early bird",
    date: "7 April - 15 June",
    bookingTypes: [
      {
        type: "Individual booking",
        price: "$90.00",
      },
    ],
    buttonUrl:
      "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets",
  },
  */
  {
    registration: "Standard",
    date: "16 June - 20 August",
    bookingTypes: [
      {
        type: "Individual booking",
        price: "$130.00",
      },
      {
        type: "Group booking (minimum 5)",
        price: "$100.00",
      },
      {
        type: "Day Pass (22 or 23 August)",
        price: "$70.00",
      },
    ],
    buttonUrl:
      "https://www.trybooking.com/events/1386301/sessions/5546830/sections/2643979/tickets",
  },
];

const PricingTable: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="bg-[#889a98] text-white">
          <tr>
            <th className="p-4 font-normal text-left border border-gray-200">
              Registration Period
            </th>
            <th className="p-4 font-normal text-left border border-gray-200">
              Booking type
            </th>
            <th className="p-4 font-normal text-right  border border-gray-200">
              Ticket Price (AUD)
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingTiers.map((tier, tierIndex) => (
            <React.Fragment key={tierIndex}>
              {tier.bookingTypes.map((bookingType, bookingTypeIndex) => (
                <tr
                  key={`${tierIndex}-${bookingTypeIndex}`}
                  className={`${tierIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                >
                  {bookingTypeIndex === 0 && (
                    <td
                      className="p-4 border border-gray-200 font-normal"
                      rowSpan={tier.bookingTypes.length}
                    >
                      {tier.registration}
                      <div className="font-normal text-sm mt-1">
                        {tier.date}
                      </div>
                    </td>
                  )}
                  <td className="p-4 border border-gray-200 font-normal">
                    {bookingType.type}
                  </td>
                  <td className="p-4 text-right border border-gray-200 font-normal">
                    {bookingType.price}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
