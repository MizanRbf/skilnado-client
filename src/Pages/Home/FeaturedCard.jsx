import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Deadline from "../../shared/Deadline";
import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const FeaturedCard = ({ featuredTask }) => {
  const { _id, taskTitle, category, budget, email, name } = featuredTask;

  return (
    <Section>
      <div className="bg-gray-100 rounded-lg text-black border border-primary shadow-lg">
        <Helmet>
          <title>Skilnado || Featured Task</title>
        </Helmet>
        <div className="bg-black text-white text-center rounded-t-lg">
          <h2 className="py-2">{taskTitle}</h2>
        </div>
        <div className="p-6">
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold">Budget:</span> {budget}
          </p>
          <div className="bg-white rounded-2xl text-center font-bold text-black shadow-xl">
            <Deadline deadline={featuredTask?.deadline}></Deadline>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedCard;
