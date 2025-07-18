import React, { useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useParams } from "react-router";

const BidsDetails = () => {
  const { taskId } = useParams();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch("https://skilnado-server.vercel.app/bids")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((bid) => bid.projectId == taskId);
        setBids(filtered);
      });
  }, [taskId]);
  return (
    <div className="pt-30">
      <div>
        <h1 className=" py-1 text-white text-center rounded-sm bg-secondary">
          Bids in Your Tasks
        </h1>
        {bids.length == 0 && (
          <div className="bg-slate-300 rounded-xl w-full mt-10">
            <h1 className="text-center py-20 text-red-600">
              Opps! No Bids Found.
            </h1>
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {bids.map((bid) => (
            <div className="bg- rounded-sm p-4 border border-primary shadow-xl">
              <p>
                <span className="font-semibold">Amount: </span>
                {bid.amount}
              </p>
              <p>
                <span className="font-semibold">Duration: </span>
                {bid.duration}
              </p>
              <p>
                <span className="font-semibold">CoverLetter: </span>
                {bid.coverLetter}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BidsDetails;
