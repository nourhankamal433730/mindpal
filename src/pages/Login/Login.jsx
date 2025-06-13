

// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./login.css"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// import logo from "../../assets/images/logo.png";
// import name from "../../assets/images/logoname.png";
// import aiHand from "../../assets/images/robot-handshake.png";

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
//       anchorPlacement: "top-bottom"
//     });
//   }, []);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

// const handleLogin = async () => {
//     setError(""); // Clear any previous errors

//     try {
//         const response = await fetch("https://gragduationproject-1.onrender.com/api/radiologist/signin", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: username,
//                 password: password,
//             }),
//         });

//         const data = await response.json();

//         if (!response.ok) {
//             setError(data.message || "Login failed");
//             return;
//         }

//         // Save token to localStorage
//         localStorage.setItem("token", data.token);  // تأكد من أن التوكن موجود هنا

//         console.log("Login successful:", data);
//         navigate("/");

//     } catch (err) {
//         console.error(err);
//         setError("Something went wrong. Please try again.");
//     }
// };
//   return (
//     <div className="flex h-screen">
//       {/* Left Section */}
//       <div
//         className="w-full md:w-5/12 bg-black flex flex-col justify-center items-center text-white p-6"
//         data-aos="fade-up"
//       >
//         <div className="flex items-center space-x-4 mb-5">
//           <img src={logo} alt="MindPal Logo" className="w-20" />
//           <img src={name} alt="MindPal Logo" className="w-40" />
//         </div>

//         <div className="w-full">
//           <img
//             src={aiHand}
//             alt="AI Handshake"
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         <h2 className="text-2xl font-bold mt-4 text-center">
//           Smart AI For Fast & Accurate <br /> Radiology Reports
//         </h2>
//         <p className="mt-5 text-center text-gray-400">
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
//           <h4 className="text-xl uppercase text-center text-gray-500">
//             Welcome Back
//           </h4>
//           <h2 className="text-3xl font-bold text-center hover:text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
//             Log In to your Account
//           </h2>

//           <form className="space-y-4">
//             {/* Input Fields */}
//             {[
//               { label: "Username", type: "text", id: "username" },
//               { label: "Password", type: "password", id: "password" }
//             ].map((field, index) => (
//               <div
//                 key={field.id}
//                 className="relative"
//                 data-aos="fade-down"
//                 data-aos-delay={index * 100}
//               >
//                 <label
//                   htmlFor={field.id}
//                   className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
//                 >
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type}
//                   id={field.id}
//                   value={field.id === "username" ? username : password}
//                   onChange={(e) =>
//                     field.id === "username"
//                       ? setUsername(e.target.value)
//                       : setPassword(e.target.value)
//                   }
//                   className="w-full border border-gray-400 rounded-md p-3 focus:border-black focus:ring-0 bg-white"
//                 />
//               </div>
//             ))}

//             {/* <div
//               className="flex justify-between items-center text-sm text-gray-600"
//               data-aos="fade-down"
//               data-aos-delay="200"
//             >
//               <label className="flex items-center space-x-1">
//                 <input type="checkbox" className="rounded-sm" />
//                 <span>Remember me</span>
//               </label>
//               <a href="#" className="hover:underline">
//                 Forgot Password?
//               </a>
//             </div> */}

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

//             {/* Or Divider */}
//             <div
//               className="flex items-center mb-4 w-full"
//               data-aos="fade-down"
//               data-aos-delay="400"
//             >
//               <div className="flex-grow border-t border-gray-300"></div>
//               {/* <span className="px-3 text-gray-400">Or</span> */}
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>
// {/* 
//             <button
//               className="w-full flex items-center justify-center bg-white border rounded-md py-2 hover:bg-gray-50"
//               data-aos="fade-down"
//               data-aos-delay="500"
//             >
//               <img src={icon} alt="Google" className="w-5 mr-4" />
//               <span className="text-gray-700">Log In with Google</span>
//             </button> */}
//           </form>

//           {/* <div
//             className="text-center text-gray-600 text-sm mt-6"
//             data-aos="fade-down"
//             data-aos-delay="600"
//           >
//             <span>New User? </span>
//             <Link
//               to="/register"
//               className="font-semibold text-black hover:underline"
//             >
//               SIGN UP HERE
//             </Link>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import name from "../../assets/images/logoname.png";
import aiHand from "../../assets/images/robot-handshake.png";

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
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Clear any previous errors

    try {
      const response = await fetch(
        "https://gragduationproject-1.onrender.com/api/radiologist/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);

      console.log("Login successful:", data);
      navigate("/");
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
            {[{ label: "Username", type: "text", id: "username" },
              { label: "Password", type: "password", id: "password" }]
              .map((field, index) => (
                <div
                  key={field.id}
                  className="relative"
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                >
                  <label
                    htmlFor={field.id}
                    className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    value={field.id === "username" ? username : password}
                    onChange={(e) =>
                      field.id === "username"
                        ? setUsername(e.target.value)
                        : setPassword(e.target.value)
                    }
                    className="w-full border border-gray-400 rounded-md p-3 focus:border-black focus:ring-0 bg-white"
                  />
                </div>
            ))}

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

            <div
              className="flex items-center mb-4 w-full"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex-grow border-t border-gray-300"></div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </form>

          {/* Optional Register Link */}
          {/* <div className="text-center text-gray-600 text-sm mt-6" data-aos="fade-down" data-aos-delay="600">
            <span>New User? </span>
            <Link to="/register" className="font-semibold text-black hover:underline">
              SIGN UP HERE
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
