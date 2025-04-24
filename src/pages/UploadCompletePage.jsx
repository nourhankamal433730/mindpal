
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function UploadCompletePage() {
  const { state } = useLocation();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className='bg-black h-screen w-full overflow-hidden'>
      <div className="max-w-2xl mx-auto p-9 flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold text-white text-center mb-8 mt-6">
            <span className="block">Upload A Medical Scan For</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#d8b4fe] transition">AI Analysis</span>
          </h2>
          
          {/* Success Message Box */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-400 mb-4 text-2xl">File successfully uploaded!</p>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          {/* New Patient Code Section */}
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

            {/* Patient Code Input */}
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Enter Patient Code To Get The Report
              </label>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="text"
                  className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-2 border"
                  placeholder="Enter code"
                />
              </div>
            </div>

            {/* File Details */}
            {showDetails && (
              <div className="space-y-3  animate-fade-in">
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

        {/* Action Buttons - now fixed at the bottom of the container */}
        <div className="flex justify-end space-x-3 pb-4">
          <Link to="/UploadPageInitial" className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md">
            Back to Upload
          </Link>
          <button className="px-4 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition text-white rounded-md ">
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

