import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

// Login Component
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();

  // Context
  const { setUser, loginUser, setLoading, googleLogin } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  // Handle ShowPassword
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle Google SignIn
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "You have logged in successfully!",
          icon: "success",
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        // setErrorMessage(error.message);
      });
  };
  // Handle Login
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // setErrorMessage("");

    // Login User
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "You have logged in successfully!",
          icon: "success",
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
        // setErrorMessage(error.message);
      });
  };
  // Reset Password
  // const handleForgetPassword = () => {
  //   const email = emailRef.current.value;
  //   resetPassword(email)
  //     .then(
  //       Swal.fire({
  //         title: "Check your inbox!",
  //         text: "Password reset email sent",
  //       })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //       // setErrorMessage(error.message);
  //     });
  // };

  return (
    <>
      <div className="bg-primary absolute top-[72px] right-0 left-0 bottom-[40%] md:bottom-[50%]"></div>
      <div className="card bg-base-100 w-full max-w-xs md:max-w-sm mx-auto mt-30 md:mt-20 shrink-0 shadow-2xl mb-20 border border-slate-200">
        <Helmet>
          <title>Skilnado || Login</title>
        </Helmet>
        <div className="card-body">
          <div className="flex justify-center">
            <img className="w-50 mb-3" src="/assets/logo.png" alt="" />
          </div>
          <h2 className="text-center">Login your account</h2>
          <hr className="border-base-300 my-3" />
          <form onSubmit={handleLoginForm} className="fieldset">
            {/* Email */}
            <label className="label">Email Address</label>

            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input w-full"
              placeholder="Enter your email address"
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full"
                placeholder="Enter your password"
              />
              <div
                className="absolute top-3 right-5 cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEye size={15} /> : <LuEyeClosed size={15} />}
              </div>
            </div>

            {/* Forgot Password */}
            {/* <Link className="hover:underline" onClick={handleForgetPassword}>
              Forgot password?
            </Link> */}

            <button type="submit" className="btn btn-primary mt-4 text-white">
              Login
            </button>
          </form>
          {/* Error
          <p className="text-red-500">{errorMessage}</p> */}

          {/* Or */}
          <div className="flex items-center gap-2 my-2">
            <hr className="flex-grow text-gray-300" />
            <span className="text-gray-300">or</span>
            <hr className="flex-grow text-gray-300" />
          </div>
          {/* Google Button*/}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black mb-4 border-primary"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-red-600 hover:underline" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
