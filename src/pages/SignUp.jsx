import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import name from "../assets/images/logoname.png";
import aiRobot from "../assets/images/Untitled design 1.png";
import icon from "../assets/images/icons8-google.png";

export default function SignUp() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,           // animate when scrolling back up
      startEvent: 'DOMContentLoaded', // run when the DOM is ready
      offset: 0               // trigger animation even if barely in view
    });
  }, []);

  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
      <div
        className="w-full md:w-5/12 bg-black text-white flex flex-col items-center justify-center p-10"
        data-aos="fade-down"
      >
        {/* Images Side by Side */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="MindPal Logo" className="w-24" />
          <img src={name} alt="MindPal Logo" className="w-44" />
        </div>

        <img src={aiRobot} alt="AI Robot" className="w-80 mt-4" />
        <h2 className="text-2xl font-semibold text-center mb-2">
          Smart AI For Fast & Accurate <br /> Radiology Reports
        </h2>
        <p className="text-center text-gray-400 mt-3">
          Upload Medical Scans And Get AI-Powered <br /> Insights To Assist In Diagnosis
        </p>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-7/12 flex flex-col justify-center items-center p-16"
        data-aos="fade-up"
      >
        <h3 className="text-sm uppercase text-gray-500 mb-2">
          Let's Get You Started
        </h3>
        <h1 className="text-2xl font-bold mb-6">Create Your Account</h1>

        {/* Form Section */}
        <form className="w-full max-w-md space-y-6">
          {/* Input Fields */}
          {["Your Name", "Email", "Password"].map((label, index) => (
            <div key={index} className="relative w-full" data-aos="fade-up" data-aos-delay={index * 100}>
              <label className="absolute top-0 left-3 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                {label}
              </label>
              <input
                type={label === "Password" ? "password" : "text"}
                className="w-full p-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            className="w-full bg-black text-white p-3 rounded-md hover:bg-[linear-gradient(to_right,#BB92C1,#0F91D2)]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            CONTINUE
          </button>

          {/* Or Divider */}
          <div className="flex items-center mb-4 w-full" data-aos="fade-up" data-aos-delay="400">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign-up Button */}
          <button
            className="w-full flex items-center justify-center border p-3 rounded-md mt-14 mb-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img src={icon} alt="Google" className="w-5 mr-2" />
            Sign up with Google
          </button>
        </form>

        <p className="text-gray-500 mt-4" data-aos="fade-up" data-aos-delay="600">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            LOGIN HERE
          </Link>
        </p>
      </div>
    </div>
  );
}
