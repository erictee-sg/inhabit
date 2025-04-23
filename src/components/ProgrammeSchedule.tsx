import React from "react";

const ProgrammeSchedule = () => {
  const scheduleData = [
    {
      day: "Thursday",
      date: "August 21, 2025",
      schedule: [
        { time: "5:00 PM", activity: "Registration / Welcome" },
        { time: "6:00 PM", activity: "Session 1" },
        { time: "7:00 PM", activity: "Worship & Ministry Time" },
        { time: "9:00 PM", activity: "Session Ends" },
      ],
    },
    {
      day: "Friday",
      date: "August 22, 2025",
      schedule: [
        { time: "9:00 AM", activity: "Session 2" },
        { time: "12:00 PM", activity: "Break" },
        { time: "1:00 PM", activity: "Session 3" },
        { time: "5:00 PM", activity: "Break" },
        { time: "7:00 PM", activity: "inHabit Worship Night\n(open to all)" },
      ],
    },
    {
      day: "Saturday",
      date: "August 23, 2025",
      schedule: [
        { time: "9:00 AM", activity: "Session 4" },
        { time: "12:00 PM", activity: "Break" },
        { time: "1:00 PM", activity: "Session 5" },
        { time: "5:00 PM", activity: "Program End" },
      ],
    },
  ];

  return (
    <section
      id="programme-schedule"
      className="py-16  relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <h2 className="md:text-3xl text-left text-white mb-12 font-normal text-3xl">
          Programme Schedule
        </h2>

        {/* Schedule Table - Hidden on Mobile */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr>
                {scheduleData.map((day, index) => {
                  // Apply special border styling based on column position
                  const isFirstColumn = index === 0;
                  const isLastColumn = index === scheduleData.length - 1;
                  const thBorderClasses = isFirstColumn
                    ? "border-t border-b border-r border-white/70 border-b-dashed p-4 text-left"
                    : isLastColumn
                      ? "border-t border-b border-l border-white/70 border-b-dashed p-4 text-left"
                      : "border-t border-b border-l border-r border-white/70 border-b-dashed p-4 text-left";

                  return (
                    <th key={index} className={thBorderClasses}>
                      <h2 className="text-base md:text-lg font-semibold text-white">
                        {day.day}, {day.date.split(" ")[1].replace(",", "")}{" "}
                        {day.date.split(" ")[0]}
                      </h2>
                    </th>
                  );
                })}
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {/* Find the maximum number of schedule items across all days */}
              {Array.from(
                {
                  length: Math.max(
                    ...scheduleData.map((d) => d.schedule.length),
                  ),
                },
                (_, rowIndex) => (
                  <tr key={rowIndex}>
                    {scheduleData.map((day, dayIndex) => {
                      const item = day.schedule[rowIndex];
                      // Apply special border styling based on column position
                      const isFirstColumn = dayIndex === 0;
                      const isLastColumn = dayIndex === scheduleData.length - 1;
                      const tdBorderClasses = isFirstColumn
                        ? "border-t border-b border-r border-white/70 border-b-dashed p-4 text-left"
                        : isLastColumn
                          ? "border-t border-b border-l border-white/70 border-b-dashed p-4 text-left"
                          : "border-t border-b border-l border-r border-white/70 border-b-dashed p-4 text-left";

                      return (
                        <td key={dayIndex} className={tdBorderClasses}>
                          {item ? (
                            <>
                              <div className="text-base md:text-lg font-normal text-white text-left">
                                {item.time}
                              </div>
                              <div className="text-sm md:text-base font-normal text-white/80 whitespace-pre-line text-left">
                                {item.activity}
                              </div>
                            </>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Accordion Style */}
        <div className="block md:hidden mt-8 space-y-6">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="border border-white/70 rounded-lg overflow-hidden"
            >
              <div className="border-t border-r border-l border-b border-white/70 border-b-dashed p-4 text-left">
                <h2 className="text-base font-semibold text-white">
                  {day.day}, {day.date.split(" ")[1].replace(",", "")}{" "}
                  {day.date.split(" ")[0]}
                </h2>
              </div>
              <div className="divide-y divide-dashed divide-white/70">
                {day.schedule.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="p-4 border-b border-dashed border-white/70 last:border-b-0"
                  >
                    <div className="text-base font-normal text-white text-left">
                      {item.time}
                    </div>
                    <div className="text-sm font-normal text-white/80 whitespace-pre-line text-left">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSchedule;
