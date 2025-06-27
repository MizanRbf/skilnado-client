import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
const EliteFreelancers = () => {
  const [eliteFreelancers, setEliteFreelancers] = useState([]);
  useEffect(() => {
    fetch("/Freelancers.json")
      .then((res) => res.json())
      .then((data) => setEliteFreelancers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eliteFreelancers.map((freelancer) => (
        <Section>
          <div key={freelancer.id} className="rounded-lg bg-slate-100 ">
            <div className="relative">
              <img
                className="w-full h-[250px] rounded-t-lg"
                src={freelancer.image}
                alt=""
              />
            </div>

            <div className="bg-secondary rounded-b-lg">
              <div className="px-6 space-y-1 py-3  text-white">
                <h2>{freelancer.name}</h2>
                <p>{freelancer.title}</p>
                <p className="text-lg font-semibold">{freelancer.location}</p>

                <div className="flex items-center text-amber-500 mb-2 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <p className="text-white ml-2 text-sm">5.00</p>
                </div>
                <p>
                  <span className="font-semibold">Projects: </span>
                  {freelancer.projects}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  <br />
                  {freelancer.email}
                </p>
                <div className="flex gap-3">
                  <p className="font-bold">Skills:</p>
                  {freelancer.skills.map((skill, index) => (
                    <div key={index}>
                      <p className="bg-amber-300 text-black px-2 rounded-xl text-xs">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mail Button */}
              {/* <button className="bg-primary w-full rounded-b-lg text-white font-bold py-2">
                Send Mail
              </button> */}
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
};

export default EliteFreelancers;
