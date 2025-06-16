
// import React, { useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';

// export default function UploadCompletePage() {
//   const { state } = useLocation();
//   const [showDetails, setShowDetails] = useState(false);
//   return (
//     <div className='bg-black h-screen w-full overflow-hidden'>
//       <div className="max-w-2xl mx-auto p-9 flex flex-col h-full">
//         <div className="flex-grow">
//           <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-6">
//             <span className="block">Upload A Medical Scan For</span>
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">AI Analysis</span>
//           </h2>
          
//           {/* Success Message Box */}
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
//             <p className="text-gray-400 mb-4 text-2xl">File successfully uploaded!</p>
//           </div>

//           <div className="border-t border-gray-200 my-8"></div>

//           {/* New Patient Code Section */}
//           <div className="mb-8 p-4 rounded-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-medium text-white">File added</h3>
//               <button 
//                 onClick={() => setShowDetails(!showDetails)}
//                 className="text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] hover:text-[#BB92C1] transition hover:underline"
//               >
//                 {state?.fileName || 'filename.ext'} · Preview
//               </button>
//             </div>

//             {/* Patient Code Input */}
//             <div className="mb-2">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Enter Patient Code To Get The Report
//               </label>
//               <div className="flex rounded-md shadow-sm">
//                 <input
//                   type="text"
//                   className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-2 border"
//                   placeholder="Enter code"
//                 />
//               </div>
//             </div>

//             {/* File Details */}
//             {showDetails && (
//               <div className="space-y-3  animate-fade-in">
//                 <div className="flex items-center">
//                   <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
//                     Name: {state?.fileName || "No file name"}
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
//                     Date: {state?.fileDate || "No date"}
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
//                     Size: {state?.fileSize || "No size"}
//                   </label>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Action Buttons - now fixed at the bottom of the container */}
//         <div className="flex justify-end space-x-3 pb-4">
//           <Link to="/UploadPageInitial" className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md">
//             Back to Upload
//           </Link>
//           <button className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md ">
//             Analyze Now
//           </button>
//         </div>

//         <style>{`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fade-in {
//             animation: fadeIn 0.3s ease-out forwards;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


//final
// import React, { useState } from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';

// export default function UploadCompletePage() {
//   const { state } = useLocation();  // استرجاع بيانات الملف من التوجيه
//   const navigate = useNavigate();
//   const [showDetails, setShowDetails] = useState(false);
//   const [patientCode, setPatientCode] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // التحقق إذا كانت البيانات موجودة
//   if (!state) {
//     return <p style={{ color: 'white' }}>No file data provided.</p>;
//   }

//   const handleAnalyze = async () => {
//     const token = localStorage.getItem('token'); // استرجاع التوكن من localStorage
//     console.log("Token in upload page:", localStorage.getItem('token'));
//     if (!token) {
//       setErrorMessage("Authentication token missing. Please login again.");
//       return;
//     }

//     if (!patientCode) {
//       setErrorMessage("Please enter a patient code.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('scan', state?.file); // الصورة نفسها

//     formData.append('code', patientCode);

// // كود المريض

//     try {
//       const response = await fetch("https://gragduationproject-1.onrender.com/api/scan", {
//         method: "POST",
//         headers: {
//             token: token,   
//        },
//         body: formData
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to analyze.");
//       }

//       console.log("Analysis result from API:", data);
//       // ✅ النجاح: الانتقال للنتائج
//       navigate("/report-page", { state: { analysisResult: data } });

//     } catch (err) {
//       setErrorMessage(err.message);
//     }
//   };

//   return (
//     <div className='bg-black h-screen w-full overflow-hidden'>
//       <div className="max-w-2xl mx-auto p-9 flex flex-col h-full">
//         <div className="flex-grow">
//           <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-6">
//             <span className="block">Upload A Medical Scan For</span>
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">AI Analysis</span>
//           </h2>

//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
//             <p className="text-gray-400 mb-4 text-2xl">File successfully uploaded!</p>
//           </div>

//           <div className="border-t border-gray-200 my-8"></div>

//           <div className="mb-8 p-4 rounded-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-medium text-white">File added</h3>
//               <button
//                 onClick={() => setShowDetails(!showDetails)}
//                 className="text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] hover:text-[#BB92C1] transition hover:underline"
//               >
//                 {state?.fileName || 'filename.ext'} · Preview
//               </button>
//             </div>

//             <div className="mb-2">
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Enter Patient Code To Get The Report
//               </label>
//               <div className="flex rounded-md shadow-sm">
//                 <input
//                   type="text"
//                   value={patientCode}
//                   onChange={(e) => setPatientCode(e.target.value)}
//                   className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-2 border"
//                   placeholder="Enter code"
//                 />
//               </div>
//             </div>

//             {errorMessage && (
//               <p className="text-red-400 mt-2">{errorMessage}</p>
//             )}

//             {showDetails && (
//               <div className="space-y-3 animate-fade-in mt-4">
//                 <div className="flex items-center">
//                   <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
//                     Name: {state?.fileName || "No file name"}
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
//                     Date: {state?.fileDate || "No date"}
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
//                     Size: {state?.fileSize || "No size"}
//                   </label>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex justify-end space-x-3 pb-4">
//           <Link to="/UploadPageInitial" className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md">
//             Back to Upload
//           </Link>
//           <button
//             onClick={handleAnalyze}
//             className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md "
//           >
//             Analyze Now
//           </button>
//         </div>

//         <style>{`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fade-in {
//             animation: fadeIn 0.3s ease-out forwards;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export default function UploadCompletePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [patientCode, setPatientCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  if (!state) {
    return <p style={{ color: 'white' }}>No file data provided.</p>;
  }

  const handleAnalyze = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage("Authentication token missing. Please login again.");
      return;
    }

    if (!patientCode) {
      setErrorMessage("Please enter a patient code.");
      return;
    }

    const formData = new FormData();
    formData.append('scan', state?.file);
    formData.append('code', patientCode);

    try {
      setIsLoading(true); 
      const response = await fetch("https://gragduationproject-1.onrender.com/api/scan", {
        method: "POST",
        headers: {
          token: token,
        },
        body: formData
      });

      const data = await response.json();
      setIsLoading(false);

      if (!response.ok) {
        throw new Error(data.message || "Failed to analyze.");
      }

      console.log("Analysis result from API:", data);
      navigate("/report-page", { state: { analysisResult: data } });

    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.message);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-black text-white flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p className="text-xl">Analyzing scan, please wait...</p>
        </div>

        <style>{`
          .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #8b5cf6;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className='bg-black h-screen w-full overflow-hidden'>
      <div className="max-w-2xl mx-auto p-9 flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-6">
            <span className="block">Upload A Medical Scan For</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">AI Analysis</span>
          </h2>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-400 mb-4 text-2xl">File successfully uploaded!</p>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <div className="mb-8 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">File added</h3>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] hover:text-[#BB92C1] transition hover:underline"
              >
                {state?.fileName || 'filename.ext'} · Preview
              </button>
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter Patient Code To Get The Report
              </label>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="text"
                  value={patientCode}
                  onChange={(e) => setPatientCode(e.target.value)}
                  className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-2 border"
                  placeholder="Enter code"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-400 mt-2">{errorMessage}</p>
            )}

            {showDetails && (
              <div className="space-y-3 animate-fade-in mt-4">
                <div className="flex items-center">
                  <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
                    Name: {state?.fileName || "No file name"}
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
                    Date: {state?.fileDate || "No date"}
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="ml-2 text-m text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">
                    Size: {state?.fileSize || "No size"}
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-3 pb-4">
          <Link to="/UploadPageInitial" className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md">
            Back to Upload
          </Link>
          <button
            onClick={handleAnalyze}
            className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md "
          >
            Analyze Now
          </button>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
