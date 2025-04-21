import React, { useState, useEffect } from "react";
import { format, differenceInSeconds } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

interface CountdownTimerProps {
  targetDate: Date | string;
  timezone?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  timezone = "Australia/Brisbane",
}) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Convert target date to Brisbane time
      const targetDateTime =
        typeof targetDate === "string" ? new Date(targetDate) : targetDate;

      // Get current time in Brisbane timezone
      const now = new Date();
      // Since we can't use utcToZonedTime, we'll calculate the time difference directly
      // by comparing the current time to the target time in the specified timezone

      // Calculate difference in seconds
      // We need to account for timezone differences in our calculation
      const targetTimestamp = targetDateTime.getTime();
      const nowTimestamp = now.getTime();

      // Get timezone offsets in milliseconds
      const targetOffset = targetDateTime.getTimezoneOffset() * 60 * 1000;
      const nowOffset = now.getTimezoneOffset() * 60 * 1000;

      // Calculate the difference in seconds, accounting for timezone
      const diffInSeconds = Math.floor((targetTimestamp - nowTimestamp) / 1000);

      if (diffInSeconds <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate days, hours, minutes, seconds
      const days = Math.floor(diffInSeconds / (60 * 60 * 24));
      const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(diffInSeconds % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate immediately
    calculateTimeRemaining();

    // Update every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up interval
    return () => clearInterval(interval);
  }, [targetDate, timezone]);

  return (
    <div className="text-center text-3xl font-normal">
      <span className="inline-flex items-center">
        <span className="border border-white rounded px-3 py-1 mx-3">
          {timeRemaining.days}
        </span>
        {" days left before inHabit"}
      </span>
    </div>
  );
};

export default CountdownTimer;
