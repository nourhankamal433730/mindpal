// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import name from "../../assets/images/logoname.png";

// export default function Navbar({ hideAuthButtons = false }) {
//   return (
//     <nav className="bg-black text-white py-2 px-6 flex justify-between items-center">
//       {/* Logo */}
//       <div className="flex items-center gap-2 ml-5">
//         <img src={logo} alt="MindPal Logo" className="w-22" />
//         <img src={name} alt="MindPal Logo" className="w-44" />
//       </div>

//       {/* Navigation Links */}
//       <div className="space-x-12 md:flex">
//         <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition font-semibold text-xl">Home</Link>
//         <a href="/#our-app" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-gray-400 font-semibold text-xl">Our Application</a>
//         <Link to="/UploadPageInitial" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-gray-400 font-semibold text-xl">Upload Scans</Link>
//         <a href="/#about" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition text-gray-400 font-semibold text-xl">About</a>
//       </div>

//       {/* Auth Buttons (Hide if hideAuthButtons is true) */}
//       {!hideAuthButtons && (
//         <div className="space-x-7 mr-4">
//           <Link to="/login" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] transition font-semibold text-2xl">Log In</Link>
//           {/* <Link to="/register" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[linear-gradient(to_right,#BB92C1,#0F91D2)] transition font-semibold text-xl">Sign Up</Link> */}
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import name from "../../assets/images/logoname.png";
import { Menu, X } from "lucide-react";

export default function Navbar({ hideAuthButtons = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-4 py-3 lg:px-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
      {/* Top: Logo and Hamburger */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="MindPal Logo" className="w-12 sm:w-14" />
          <img src={name} alt="MindPal Name" className="w-28 sm:w-36" />
        </div>

        {/* Hamburger visible < lg */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Links + Auth */}
      <div
        className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-10 space-y-4 lg:space-y-0 mt-4 lg:mt-0 ${
          isOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <Link
          to="/home"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] font-semibold text-lg"
        >
          Home
        </Link>
        <a
          href="#our-app"
          className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] text-gray-400 font-semibold text-lg"
        >
          Our Application
        </a>
        <Link
          to="UploadPageInitial"
          className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] text-gray-400 font-semibold text-lg"
        >
          Upload Scans
        </Link>
        <a
          href="#about"
          className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] text-gray-400 font-semibold text-lg"
        >
          About
        </a>

        {!hideAuthButtons && (
          <div className="space-y-4 lg:space-y-0 lg:space-x-6">
            <Link
              to="/login"
              className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#BB92C1] to-[#0F91D2] font-semibold text-xl block lg:inline"
            >
              Log In
            </Link>
            {/* 
            <Link
              to="/register"
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-[linear-gradient(to_right,#BB92C1,#0F91D2)] font-semibold text-base"
            >
              Sign Up
            </Link>
            */}
          </div>
        )}
      </div>
    </nav>
  );
}

