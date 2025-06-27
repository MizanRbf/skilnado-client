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
      <h2 className="mb-10 text-center">📬Subscribe to Our Newsletter</h2>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-full space-y-2 items-center justify-center">
          <p>
            Be the first to experience the best of our subscription
            boxes—delivered straight to your inbox!
          </p>

          <p>
            ✔️Get exclusive previews of our carefully curated monthly selections
          </p>
          <p>✔️Discover the local traditions and stories behind each box.</p>
          <p>
            ✔️Opportunities to directly support local businesses and makers.
          </p>
          <p>✔️Stay updated on new themes and exciting local collaborations.</p>
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
            placeholder="Your work email...."
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
