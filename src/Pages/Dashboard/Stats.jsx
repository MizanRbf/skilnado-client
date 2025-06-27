import CountUp from "react-countup";
import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="mb-16"
  >
    {children}
  </motion.div>
);

const Stats = ({ myTasks, bids, allTasks, eliteFreelancers }) => {
  return (
    <Section>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full">
          {/* All tasks */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={allTasks.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">All Tasks</p>
          </div>
          {/* My Posted Tasks */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={myTasks.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">
              My Posted Tasks
            </p>
          </div>
          {/* Total Bids */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={bids.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">Total Bids</p>
          </div>
          {/* Total Users */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={eliteFreelancers.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">
              Elite Freelancers
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
