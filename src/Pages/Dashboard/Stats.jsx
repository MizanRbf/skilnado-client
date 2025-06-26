import CountUp from "react-countup";
import { motion } from "motion/react";
import { AuthContext } from "../../Provider/AuthContext";

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

const Stats = ({ myTasks, bids, allTasks }) => {
  return (
    <Section>
      <div className="p-6 mt-10">
        <div className="p-4 grid justify-center grid-cols-2 text-center lg:grid-cols-4">
          {/* All tasks */}
          <div className="flex flex-col justify-start m-2 lg:m-6 shadow-lg rounded-sm px-10 py-4">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={allTasks.length} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">All tasks</p>
          </div>

          {/* My Posted Tasks */}
          <div className="flex flex-col justify-start m-2 lg:m-6 shadow-lg rounded-sm px-10 py-4">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={myTasks.length} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">My Posted Tasks</p>
          </div>

          {/* Total Bids */}
          <div className="flex flex-col justify-start m-2 lg:m-6 shadow-lg rounded-sm px-10 py-4">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={bids.length} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">Total Bids</p>
          </div>

          {/* Total Users */}
          <div className="flex flex-col justify-start m-2 lg:m-6 shadow-lg rounded-sm px-10 py-4">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end="44" duration={20} />+
            </p>
            <p className="text-sm sm:text-base">Total Users</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
