import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Helmet } from "react-helmet-async";

import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 180 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="mb-16"
  >
    {children}
  </motion.div>
);

// Register Component
const Register = () => {
  const navigate = useNavigate();
  // const [errorMessage, setErrorMessage] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle ShowPassword
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Context
  const { createUser, updateUser } = useContext(AuthContext);

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setPassError("");

    // Password Verification
    if (password.length < 6) {
      setPassError("Must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("Must have an Uppercase letter in the password ");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("Must have a Lowercase letter in the password ");
      return;
    }

    // setErrorMessage("");

    // CreateUser

    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            console.log(error);
            // setErrorMessage(error);
          });
        Swal.fire({
          title: "Good job!",
          text: "You have registered successfully!",
          icon: "success",
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
        // setErrorMessage(error.message);
      });
  };
  return (
    <div className="">
      <div className="bg-primary absolute top-[72px] right-0 left-0 bottom-[30%] md:bottom-[40%]"></div>
      <Section>
        <div className="card bg-base-100 w-full max-w-sm md:max-w-lg mx-auto shrink-0 shadow-2xl">
          <Helmet>
            <title>Skilnado || Register</title>
          </Helmet>
          <div className="card-body">
            <div className="flex justify-center">
              <img className="w-50 mb-3" src="/assets/logo.png" alt="" />
            </div>
            <h2 className="text-center text-black">Register your account</h2>
            <hr className="border-base-300 my-3" />

            <form onSubmit={handleRegister} className="fieldset text-black">
              {/* Name */}
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your Name"
                required
              />
              {/* Photo */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter your photo url"
                required
              />
              {/*Email */}
              <label className="label">Email Address</label>
              <input
                type="email"
                name="email"
                className="input  w-full"
                placeholder="Enter your email address"
                required
              />
              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input  w-full"
                  placeholder="Enter your password"
                  required
                />
                <div
                  className="absolute top-3 right-5 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <LuEyeClosed size={15} />
                  )}
                </div>
              </div>

              <p className="text-red-500">{passError}</p>
              {/* CheckBox */}
              <label className="label">
                <input type="checkbox" className="checkbox" />
                Accept terms & conditions
              </label>

              <button type="submit" className="btn btn-primary mt-4 text-white">
                Register
              </button>
            </form>
            {/* ErrorMessage */}
            {/* <p className="text-red-500">{errorMessage}</p> */}

            <p className="text-center text-black">
              Already have an account?{" "}
              <Link className="text-red-600 hover:underline" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Register;
