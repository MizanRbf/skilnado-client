import React, { useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
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
    <>
      <h1 className=" py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary mt-30">
        Bids in Your Tasks
      </h1>
      {bids.length == 0 && (
        <div className="bg-slate-300 rounded-xl w-full mt-10">
          <h1 className="text-center py-20 text-red-600">
            Opps! No Bids Found.
          </h1>
        </div>
      )}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bids.map((bid) => (
          <div className="bg-secondary rounded-xl p-4 text-white">
            <p>{bid.amount}</p>
            <p>{bid.duration}</p>
            <p>{bid.coverLetter}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default BidsDetails;
