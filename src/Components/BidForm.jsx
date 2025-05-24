import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";

const BidForm = () => {
  const navigate = useNavigate();
  const { id: currentProjectId } = useParams();
  const { user, bids, setBids } = useContext(AuthContext);

  // Handle Bid Counts
  const handleBidForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBid = Object.fromEntries(formData.entries());
    newBid.userId = user?.uid;
    newBid.projectId = currentProjectId;
    newBid.createdAt = new Date();

    // console.log(newBid);

    // create bids in db
    fetch("https://skilnado-server.vercel.app/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bid Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          setBids(newBids);
          form.reset();
          navigate(`/browseTasks/${currentProjectId}`);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Already Bids!",
            footer: "Browse Another Task",
          });
        }
      });
  };

  return (
    <div className="text-black">
      {/* Form */}
      <form
        onSubmit={handleBidForm}
        className="bg-secondary *:border-0 rounded-bl-lg rounded-br-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 *:border-0">
          <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
            <label className="label text-white">Amount</label>
            <input
              type="number"
              name="amount"
              className="input w-full"
              placeholder="Enter Amount"
            />
          </fieldset>

          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label text-white">Duration</label>
            <input
              type="text"
              name="duration"
              className="input w-full"
              placeholder="Enter Duration"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
          <label className="label text-white">CoverLetter</label>
          <textarea
            type="text"
            name="coverLetter"
            className="input w-full"
            placeholder="Text CoverLetter"
          />
        </fieldset>

        {/* Button */}
        <fieldset className="fieldset  rounded-box w-full p-4 ">
          <input
            type="submit"
            className="input w-full font text-white bg-primary text-xl cursor-pointer"
            value="Bid Now"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default BidForm;
