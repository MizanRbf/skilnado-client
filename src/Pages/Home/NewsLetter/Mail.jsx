import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Mail = () => {
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
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Error: " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input type="email" name="user_email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message (optional)" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Mail;
