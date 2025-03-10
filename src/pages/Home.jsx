import React from "react";
import { useNavigate } from "react-router-dom";
import aiRobot from "../assets/images/Untitled design 1.png";
import img1 from "../assets/images/sec1.png";
import img2 from "../assets/images/robot-handshake.png";
import img3 from "../assets/images/brain.png";
import img4 from "../assets/images/Frame 30.png";
import aboutImg from "../assets/images/people-hanging.png"
import phone1 from "../assets/images/phone1.png"
import phone2 from "../assets/images/phone2.png"
export default function Home() {
  const navigate = useNavigate();

  const awarenessCards = [
    {
      image: img1,
      title: "Early Symptoms",
      description:
        "Memory Loss, Difficulty Planning, Confusion With Time Or Place, Trouble Finding Words.",
      link: "/early-symptoms",
    },
    {
      image: img2,
      title: "How To Support Patients",
      description:
        "Provide Structured Routines, Clear Communication, And Medication Reminders.",
      link: "/support-patients",
    },
    {
      image: img3,
      title: "What Is Alzheimer’s?",
      description:
        "Alzheimer’s Is A Progressive Brain Disorder That Affects Memory, Thinking, And Behavior.",
      link: "/what-is-alzheimers",
    },
    {
      image: img4,
      title: "Prevention & Treatment",
      description:
        "Healthy Lifestyle, Regular Exercise, Cognitive Stimulation, And Medication Management.",
      link: "/prevention-treatment",
    },
  ];

  return (
    <>
      {/* First Section */}
      <div id="home" className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Image */}
          <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
            <img
              src={aiRobot}
              alt="AI Robot"
              className="w-80 md:w-[400px] drop-shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left space-y-6 w-full md:w-1/2 px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Smart AI For Fast & Accurate Radiology Reports
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Upload Medical Scans And Get AI-Powered Insights To Assist In
              Diagnosis
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r from-[#0F91D2] to-[#BB92C1] transition">
              Upload Scans
            </button>
          </div>
        </div>
      </div>

      {/* Awareness Section */}
      <div className="bg-black text-white py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Alzheimer’s Awareness Section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {awarenessCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="relative bg-black p-8 rounded-xl text-center border border-gray-700 transition-all 
              hover:shadow-[0_0_15px_rgba(187,146,193,0.7),0_0_30px_rgba(15,145,210,0.7)] cursor-pointer w-full sm:w-[350px] md:w-[350px] lg:w-[300px]
              before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-gradient-to-r before:from-[#BB92C1] 
              before:to-[#0F91D2] before:-z-10 before:opacity-0 hover:before:opacity-100"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Application Section */}
      <div id="our-app" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-semibold mb-6">Our Application</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our Smart Medication Management App Is Designed Specifically For
            Alzheimer's Patients. Doctors Can Add Patients, Set Medication
            Schedules, And Ensure Timely Reminders Through Automatic
            Notifications. This Ensures Better Adherence To Treatment And
            Improved Patient Well-Being.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gradient-to-r from-[#0F91D2] to-[#BB92C1] transition">
            Download Application
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src={phone2}
            alt="App Mockup 1"
            className="absolute top-12 left-1/5  md:w-1/2 max-w-xs z-10"
          />
          <img
            src={phone1}
            alt="App Mockup 2"
            className="relative  left-3/12 md:w-1/2 max-w-xs"
          />
        </div>
      </div>
    </div>

      {/* About Us Section */}
  <div id="about" className="bg-black text-white py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
    {/* Left Image */}
    <div className="flex justify-center">
      <img 
        src={aboutImg} 
        alt="AI Robot" 
        className=" md:w-4/5 lg:w-3/4 xl:w-2/3" 
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
        About Us
      </h2>
      <p className="text-2xl text-gray-400 leading-relaxed">
        We Are A Team Of AI And Healthcare Experts Dedicated To
        Revolutionizing Radiology With Artificial Intelligence. Our
        Platform Helps Radiologists Analyze Medical Scans Efficiently,
        Ensuring Accurate Diagnoses And Improved Patient Care.
      </p>
    </div>
  </div>
</div>

     {/*Footer */}
<footer className="bg-black text-white py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Side: Links & Contact Info */}
        <div className="flex flex-wrap gap-10 md:gap-20 mt-32">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">Home</a></li>
              <li><a href="#about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">About</a></li>
              <li><a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">AI Analysis</a></li>
              <li><a href="#our-app" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">Our App</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
            <p className="text-gray-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">Drazsara0@Gmail.Com</p>
            <p className="text-gray-400 hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">0150 906 8114</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Social Media Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">LinkedIn</a></li>
              <li><a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-xl">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side: Larger Robot Image */}
        <div className="mt-6 md:mt-0 ">
          <img 
            src={aiRobot} 
            alt="AI Robot" 
            className="w-40  md:w-72 lg:w-80  drop-shadow-lg"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-10">
        <p>Copyright & Privacy Policy</p>
      </div>
    </footer>
    </>
  );
}
