import React, { useState, useEffect } from 'react';
import brainImage from '../assets/images/Rectangle 4148.png'
import {  Link } from 'react-router-dom'

export default function EditReport() {
      const [reportData, setReportData] = useState({
        diagnosis: "Possible Signs Of Alzheimer's Disease Detected",
        confidence: "AI Confidence 97%",
        findings: [
          "Abnormal Brain Activity Detected in The Hippocampus And Frontal Regions",
          "Indications Of Neuronal Atrophy And Plaque Bulldup",
          "Further Neurological Assessment Recommended."
        ],
        stage: {
          name: "Middle Stage",
          description: "\"Noticeable Cognitive Decline, Confusion, Difficulty Performing Familiar Task\""
        }
      });
  return (
   <>
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">

            {/* Page Title */}
            <div className="flex justify-center items-center p-12">
                <div className='w-7xl flex justify-between items-center '>
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition">Original Scan</h2>
                <Link to="" className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] ">
                    Edit Report
                </Link>
            </div>
              
            </div>

            <div className="container flex justify-between mx-auto px-4 py-8 max-w-6xl rounded-2xl bg-gray-900">
            
                <div >
                  <img src={brainImage} alt="" />
                </div>
                {/* Report Card */}
                <div className=" w-3xl rounded-lg shadow-md  p-6 mb-8">

                  
                        {/* Scan Analysis Results */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition mb-4">Scan Analysis Results</h3>
                            <div className="space-y-2">
                                <p className="text-gray-700">
                                    <span className="font-medium text-gray-400">Diagnosis:</span> {reportData.diagnosis}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium text-gray-400">Confidence Level:</span> {reportData.confidence}
                                </p>
                           </div>
                        
                        </div>

                        {/* Divider */}
                        <hr className="my-6 border-gray-200" />

                        {/* Findings */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition mb-4">Findings</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {reportData.findings.map((finding, index) => (
                                <li key={index}>{finding}</li>
                            ))}
                            </ul>
                        </div>

                        {/* Divider */}
                        <hr className="my-6 border-gray-200" />

                        {/* Alzheimer's Stage */}
                        <div>
                            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition mb-4">Alzheimer's Stage</h3>
                            <p className="text-gray-400 font-medium">{reportData.stage.name}:</p>
                            <p className="text-gray-600 italic">{reportData.stage.description}</p>
                        </div>

                          {/* Divider */}
                          <hr className="my-6 border-gray-200" />

                              {/* Add information */}
                            <div className="my-5">
                                <label className="block text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition mb-2">
                                Add more information
                                </label>
                                <div className="flex rounded-md shadow-sm">
                                  <textarea
                                    type="text"
                                    className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-2 border"
                                    placeholder="Type Anything"
                                  />
                                </div>
                            </div>

                                {/* Patient name Input */}
                            <div className="mb-4">
                              <label className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition mb-2">
                                 Add Patient Name
                              </label>
                              <div className="flex rounded-md shadow-sm">
                                <input
                                  type="text"
                                  className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-3 border"
                                  placeholder="Add Name"
                                />
                              </div>
                            </div>

                                   {/*Doctor name Input */}
                                   <div className="mb-2">
                              <label className="block text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] transition mb-2">
                                 Add Doctor Name
                              </label>
                              <div className="flex rounded-md shadow-sm">
                                <input
                                  type="text"
                                  className="flex-1 rounded-lg border-[#aa74b3] bg-black text-gray-400 px-4 py-3 border"
                                  placeholder="Add Name"
                                />
                              </div>
                            </div>

                </div>

   

           
         </div>
        {/* Action Buttons */}
               <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 mb-5">
                        <button className="px-6 py-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] transition rounded-md text-white font-medium">
                        Save Changes
                        </button>
                </div>
    </div>
   
   </>
  )
}
