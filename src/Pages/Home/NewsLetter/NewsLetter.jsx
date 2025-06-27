import { Link } from "react-router";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1tl7k8c",
        "template_88eueta",
        form.current,
        "eE11Jr1RKLDjHi_0W"
      )
      .then(
        () => {
          Swal.fire({
            title: "Subscribed Successfully!",
            icon: "success",
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Error: " + error.text);
        }
      );
  };

  return (
    <div className="mb-10  border rounded-lg border-slate-200 shadow-lg p-6 gap-4">
      <h4 className="mb-10 text-center">
        📬Subscribe to receive the latest task listings, updates, and freelance
        tips.
      </h4>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-full space-y-2 items-center justify-center">
          <h5>Why Subscribe?</h5>

          <p>
            ✔️Get notified about new freelance tasks and projects instantly.
          </p>
          <p>✔️Access exclusive tips to grow your freelance career.</p>
          <p>✔️Stay ahead with platform updates and feature releases.</p>
          <p>✔️Be the first to grab high-paying, skill-matched gigs.</p>
        </div>

        {/* SubsCribe Form */}
        <form ref={form} onSubmit={handleSubmit} className=" w-full space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              name="first_name"
              placeholder="First-name"
              className="border w-full border-slate-300 py-3 rounded-sm pl-2"
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last-name"
              className="border border-slate-300 w-full py-3 rounded-sm pl-2"
            />
          </div>
          <input
            type="email"
            placeholder="Your Work Email...."
            name="user_email"
            className="border border-slate-300 py-3 w-full rounded-sm pl-2"
          />
          <br />
          <input
            type="Company"
            name="company_name"
            placeholder="Your Company"
            className="border w-full border-slate-300 py-3 rounded-sm pl-2"
          />
          <br />
          <button
            type="submit"
            className="custom-width py-3 bg-primary text-white w-full rounded-sm cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
