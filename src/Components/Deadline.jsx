import { useEffect, useState } from "react";

const Deadline = ({ deadline }) => {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    if (deadline) {
      const today = new Date();
      const targetDate = new Date(deadline);

      // Difference
      const timeDiff = targetDate.getTime() - today.getTime();

      // Days
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }
  }, [deadline]);

  return (
    <div className="text-sm text-gray-700 mt-2">
      {daysLeft > 0
        ? `⏳ ${daysLeft} days left `
        : daysLeft === 0
        ? "✅ Today is the deadline!"
        : "❌ Deadline has passed"}
    </div>
  );
};

export default Deadline;
