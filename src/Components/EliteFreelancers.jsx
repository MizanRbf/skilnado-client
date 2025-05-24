import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

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
        <div key={freelancer.id} className="rounded-lg bg-slate-100 ">
          <div className="relative">
            <img
              className="w-full h-[250px] rounded-tr-lg rounded-tl-lg"
              src={freelancer.image}
              alt=""
            />
          </div>

          <div className="bg-secondary rounded-bl-xl rounded-br-xl">
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
                {freelancer.email}
              </p>
              <div className="flex gap-3">
                <p className="font-bold">Skills:</p>
                {freelancer.skills.map((skill) => (
                  <div>
                    <p className="bg-amber-300 text-black px-2 rounded-xl text-xs">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-primary w-full rounded-bl-xl rounded-br-xl text-white font-bold py-2">
              Send Mail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EliteFreelancers;
