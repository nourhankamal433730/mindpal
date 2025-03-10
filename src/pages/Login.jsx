import React from 'react'
import logo from "../assets/images/logo.png";
import name from "../assets/images/logoname.png";
import icon from "../assets/images/icons8-google.png";
import aiHand from "../assets/images/robot-handshake.png"
export default function Login() {
  return (
    <>
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full md:w-5/12 bg-black flex flex-col justify-center items-center text-white p-6">
        <div className="flex items-center space-x-4 mb-5">
          <img src={logo} alt="MindPal Logo" className="w-20" />
          <img src={name} alt="MindPal Logo" className="w-40" />
        </div>

        <div className="w-full">
          <img
            src={aiHand}
            alt="AI Handshake"
            className="w-full h-auto object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mt-4 text-center">
          Smart AI For Fast & Accurate <br /> Radiology Reports
        </h2>
        <p className="mt-5 text-center text-gray-400">
          Upload Medical Scans And Get AI-Powered <br />
          Insights To Assist In Diagnosis
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-7/12 flex justify-center items-center  p-6">
        <div className="bg-transparent w-full max-w-md space-y-6">
          <h4 className="text-sm  uppercase text-center">Welcome Back</h4>
          <h2 className="text-2xl font-bold text-center">Log In to your Account</h2>

          <form className="space-y-4">
            {/* Input Fields */}
            {[
              { label: "Email", type: "email", id: "email" },
              { label: "Password", type: "password", id: "password" }
            ].map((field) => (
              <div key={field.id} className="relative">
                <label
                  htmlFor={field.id}
                  className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className="w-full border  border-gray-400 rounded-md p-3 focus:border-black focus:ring-0 bg-white"
                />
              </div>
            ))}

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="rounded-sm" />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-[linear-gradient(to_right,#BB92C1,#0F91D2)]">
              CONTINUE
            </button>

           {/* Or Divider */}
          <div className="flex items-center mb-4 w-full">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

            <button className="w-full flex items-center justify-center bg-white border rounded-md py-2 hover:bg-gray-50 mt-14">
              <img src={icon} alt="Google" className="w-5 mr-4" />
              <span className="text-gray-700">Log In with Google</span>
            </button>
          </form>

          <div className="text-center text-gray-600 text-sm">
            <span>New User? </span>
            <a href="/register" className="font-semibold text-black hover:underline">
              SIGN UP HERE
            </a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}


//   <div className="container-fluid d-flex align-items-center vh-100">
//       <div className="row w-100">      
//         {/* Left Section */}
//         <div className="col-md-5 bg-black d-flex flex-column justify-content-center align-items-center text-white p-0 vh-100">
      
        
//         <div className="logo-container d-flex align-items-center pb-5" >
//         <img src={logo} alt="MindPal Logo" className=" w-25" />
//         <img src={name} alt="MindPal Logo" className=" w-50" />
//        </div>
         
//        <div className="w-100">
//           <img
//             src={aiHand}
//             alt="AI Handshake"
//             className="img-fluid middle-image"
//             style={{ width: "100%", height: "auto", objectFit: "cover" }}
//           />
//         </div>

//           <h2 className="fs-3  fw-700  mt-4 text-center">Smart AI For Fast & Accurate <br/> Radiology Reports</h2>
//           <p className="fs-6 mt-2 fw-700 text-center text-secondary">Upload Medical Scans And Get AI-Powered <br/>
//            Insights To Assist In Diagnosis</p>
//         </div>


//         {/* Right Section */}
//         <div className="col-md-7 d-flex justify-content-center align-items-center bg-light min-vh-75 ">
         
//         <div className="login-form p-4 w-50 d-flex flex-column justify-content-between vh-75 " 
//         style={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}>


//             <h4 className=" mb-2 fw-400 text-uppercase small">WELCOME BACK</h4>
//             <h2 className="fs-3 fw-semibold mb-4">Log In to your Account</h2>

//             <form className="bg-light" >
//            {/* Input Fields */}
//            {[
//             { label: "Email", type: "email", id: "email" },
//             { label: "Password", type: "password", id: "password" }
//           ].map((field, index) => (
//             <div className="mb-3 position-relative">
//               <label htmlFor={field.id} className="form-label small text-secondary position-absolute px-2 " 
//               style={{ top: "-7px", left: "12px", background: "rgb(248 249 250)", padding: "0 5px" }}>
//                 {field.label}
//               </label>
//               <input type={field.type} className="form-control border-secandry pt-2 bg-light" id={field.id}  
//                onFocus={(e) => { e.target.style.borderColor = "black"; e.target.style.boxShadow = "none";}}
//                 onBlur={(e) => { e.target.style.borderColor = "#6c757d";  
//                 e.target.previousSibling.style.color = "#6c757d"; }} />
//             </div>
//           ))}


      
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <input type="checkbox" id="rememberMe" className="me-1" />
//                   <label htmlFor="rememberMe"  className="small text-muted text-decoration-none">Remember me</label>
//                 </div>
//                 <a href="#" className="small text-muted text-decoration-none">Forgot Password?</a>
//               </div>

//                {/* Submit Button */}
//               <button className="btn btn-dark w-100 mt-4">CONTINUE</button>
           
          
//               <div className="d-flex align-items-center my-3">
//                <div className="flex-grow-1 border-top"></div>
//                <span className="mx-2 fw-500">Or</span>
//                <div className="flex-grow-1 border-top"></div>
//                </div>

            
//               <button className="btn btn-light d-flex align-items-center justify-content-center w-100 py-2 border rounded-3">
//               <img src={icon} alt="Google" width="24" className="me-5" />
//               <span className="text-muted">Log In with Google</span>
//               </button>

//             </form>

//             <div className="d-flex justify-content-center align-items-center mt-5 gap-1">
//             <span className=" fw-lighter">New User?</span>
//             <a href="#" className="fw-bold text-dark  ">
//             SIGN UP HERE  </a>

//               </div>
//           </div>
//         </div>
//       </div>
//     </div>