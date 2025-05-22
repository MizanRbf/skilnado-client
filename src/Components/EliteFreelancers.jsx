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
  console.log(eliteFreelancers);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eliteFreelancers.map((freelancer) => (
        <div className="rounded-lg space-y-1 bg-slate-100 ">
          <div className="relative">
            <img
              className="w-full h-[300px] rounded-tr-lg rounded-tl-lg mb-4"
              src={freelancer.image}
              alt=""
            />
          </div>

          <div className="mx-6 space-y-1 mb-3">
            <h2>{freelancer.name}</h2>
            <p>{freelancer.title}</p>
            <div>
              <p className="text-lg font-semibold">{freelancer.location}</p>
              <div className="flex items-center text-amber-500 mb-2 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-black ml-2 text-sm">5.00</p>
              </div>

              <span className="font-semibold">Projects:</span>
              {freelancer.projects}
              <del className="text-gray-500 text-sm ml-2"></del>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EliteFreelancers;
