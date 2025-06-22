
// !Final
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link, useNavigate } from "react-router-dom";

// import logo from "../assets/images/logo.png";
// import name from "../assets/images/logoname.png";
// import aiHand from "../assets/images/robot-handshake.png";

// export default function Login() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       mirror: true,
//       startEvent: "DOMContentLoaded",
//       offset: 0,
//       easing: "ease-in-out",
//       anchorPlacement: "top-bottom",
//     });
//   }, []);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError(""); 

//     try {
//       const response = await fetch(
//         "https://gragduationproject-1.onrender.com/api/radiologist/signin",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: username,
//             password: password,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       localStorage.setItem("token", data.token);

//       console.log("Login successful:", data);
//       navigate("/home");
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-auto md:h-screen">
//       {/* Left Section */}
//       <div
//         className="w-full md:w-7/12 bg-black flex flex-col justify-center items-center text-white p-6"
//         data-aos="fade-up"
//       >
//         <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-5">
//           <img src={logo} alt="MindPal Logo" className="w-16 sm:w-20" />
//           <img src={name} alt="MindPal Name" className="w-32 sm:w-40" />
//         </div>

//         <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
//           <img
//             src={aiHand}
//             alt="AI Handshake"
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         <h2 className="text-xl sm:text-2xl font-bold mt-4 text-center">
//           Smart AI For Fast & Accurate <br /> Radiology Reports
//         </h2>
//         <p className="mt-4 text-sm sm:text-base text-center text-gray-400">
//           Upload Medical Scans And Get AI-Powered <br />
//           Insights To Assist In Diagnosis
//         </p>
//       </div>

//       {/* Right Section */}
//       <div
//         className="w-full md:w-7/12 flex justify-center items-center p-6"
//         data-aos="fade-down"
//       >
//         <div className="bg-transparent w-full max-w-md space-y-6">
//           <h4 className="text-lg sm:text-xl uppercase text-center text-gray-500">
//             Welcome Back
//           </h4>
//           <h2 className="text-2xl sm:text-3xl font-bold text-center hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
//             Log In to your Account
//           </h2>

//           <form className="space-y-4">
//             {[{ label: "Username", type: "text", id: "username" },
//               { label: "Password", type: "password", id: "password" }]
//               .map((field, index) => (
//                 <div
//                   key={field.id}
//                   className="relative"
//                   data-aos="fade-down"
//                   data-aos-delay={index * 100}
//                 >
//                   <label
//                     htmlFor={field.id}
//                     className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
//                   >
//                     {field.label}
//                   </label>
//                   <input
//                     type={field.type}
//                     id={field.id}
//                     value={field.id === "username" ? username : password}
//                     onChange={(e) =>
//                       field.id === "username"
//                         ? setUsername(e.target.value)
//                         : setPassword(e.target.value)
//                     }
//                     className="w-full border border-gray-400 rounded-md p-3 focus:border-black focus:ring-0 bg-white"
//                   />
//                 </div>
//             ))}

//             <button
//               type="button"
//               onClick={handleLogin}
//               className="w-full bg-black text-white py-2 rounded-md hover:bg-[linear-gradient(to_right,#BB92C1,#0F91D2)]"
//               data-aos="fade-down"
//               data-aos-delay="300"
//             >
//               CONTINUE
//             </button>

//             {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )}

//             <div
//               className="flex items-center mb-4 w-full"
//               data-aos="fade-down"
//               data-aos-delay="400"
//             >
//               <div className="flex-grow border-t border-gray-300"></div>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//           </form>

//           {/* Optional Register Link */}
//           {/* <div className="text-center text-gray-600 text-sm mt-6" data-aos="fade-down" data-aos-delay="600">
//             <span>New User? </span>
//             <Link to="/register" className="font-semibold text-black hover:underline">
//               SIGN UP HERE
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// !Final code With security
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";
import name from "../assets/images/logoname.png";
import aiHand from "../assets/images/robot-handshake.png";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      startEvent: "DOMContentLoaded",
      offset: 0,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("radiologist"); // default role
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const apiUrl =
      role === "admin"
        ? "https://gragduationproject-1.onrender.com/api/security/login"
        : "https://gragduationproject-1.onrender.com/api/radiologist/signin";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", role);

      console.log("Login successful:", data);

      // Navigate to appropriate dashboard
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen">
      {/* Left Section */}
      <div
        className="w-full md:w-7/12 bg-black flex flex-col justify-center items-center text-white p-6"
        data-aos="fade-up"
      >
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-5">
          <img src={logo} alt="MindPal Logo" className="w-16 sm:w-20" />
          <img src={name} alt="MindPal Name" className="w-32 sm:w-40" />
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <img
            src={aiHand}
            alt="AI Handshake"
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold mt-4 text-center">
          Smart AI For Fast & Accurate <br /> Radiology Reports
        </h2>
        <p className="mt-4 text-sm sm:text-base text-center text-gray-400">
          Upload Medical Scans And Get AI-Powered <br />
          Insights To Assist In Diagnosis
        </p>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-7/12 flex justify-center items-center p-6"
        data-aos="fade-down"
      >
        <div className="bg-transparent w-full max-w-md space-y-6">
          <h4 className="text-lg sm:text-xl uppercase text-center text-gray-500">
            Welcome Back
          </h4>
          <h2 className="text-2xl sm:text-3xl font-bold text-center hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
            Log In to your Account
          </h2>

          <form className="space-y-4">
            {/* Username */}
            <div className="relative" data-aos="fade-down" data-aos-delay="0">
              <label
                htmlFor="username"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-3 focus:border-black focus:ring-0 bg-white"
              />
            </div>

            {/* Password */}
            <div className="relative" data-aos="fade-down" data-aos-delay="100">
              <label
                htmlFor="password"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-3 focus:border-black focus:ring-0 bg-white"
              />
            </div>

            {/* Role Select */}
            <div className="relative" data-aos="fade-down" data-aos-delay="200">
              <label
                htmlFor="role"
                className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
              >
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-3 bg-white focus:border-black focus:ring-0"
              >
                <option value="radiologist" className="">Radiologist</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-[linear-gradient(to_right,#BB92C1,#0F91D2)]"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              CONTINUE
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Divider */}
            <div
              className="flex items-center mb-4 w-full"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
