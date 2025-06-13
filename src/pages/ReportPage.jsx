
// pdf download
// import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import brainImage from '../assets/images/Rectangle 4148.png';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const ReportPage = () => {
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
//   const reportRef = useRef();

//   // Report data
//   const reportData = {
//     diagnosis: "Possible Signs Of Alzheimer's Disease Detected",
//     confidence: "AI Confidence 97%",
//     findings: [
//       "Abnormal Brain Activity Detected in The Hippocampus And Frontal Regions",
//       "Indications Of Neuronal Atrophy And Plaque Bulldup",
//       "Further Neurological Assessment Recommended."
//     ],
//     stage: {
//       name: "Middle Stage",
//       description: "\"Noticeable Cognitive Decline, Confusion, Difficulty Performing Familiar Task\""
//     }
//   };

//   const handleDownloadPDF = async () => {
//     setIsGeneratingPDF(true);
    
//     try {
//       // Create a temporary container
//       const pdfContainer = document.createElement('div');
//       pdfContainer.style.position = 'fixed'; // Changed to fixed
//       pdfContainer.style.top = '0';
//       pdfContainer.style.left = '0';
//       pdfContainer.style.width = '800px';
//       pdfContainer.style.zIndex = '9999';
//       pdfContainer.style.visibility = 'hidden';
//       pdfContainer.style.backgroundColor = '#111827';
//       document.body.appendChild(pdfContainer);

//       // Clone the report content
//       const contentClone = reportRef.current.cloneNode(true);
      
//       // Remove interactive elements from clone
//       contentClone.querySelectorAll('button, a').forEach(el => el.remove());
      
//       // Fix styling issues
//       contentClone.querySelectorAll('*').forEach(el => {
//         el.style.boxShadow = 'none';
//         const styles = window.getComputedStyle(el);
//         if (styles.color.includes('rgba(0, 0, 0, 0)')) {
//           el.style.color = '#e5e7eb';
//         }
//         if (styles.backgroundColor.includes('rgba(0, 0, 0, 0)')) {
//           el.style.backgroundColor = '#111827';
//         }
//       });

//       pdfContainer.appendChild(contentClone);

//       // Wait for fonts and images to load
//       await document.fonts.ready;
//       await new Promise(resolve => setTimeout(resolve, 500));

//       // Generate canvas from HTML
//       const canvas = await html2canvas(pdfContainer, {
//         scale: 1,
//         logging: true,
//         useCORS: true,
//         allowTaint: true,
//         backgroundColor: '#111827',
//         scrollX: 0,
//         scrollY: 0,
//         windowWidth: pdfContainer.scrollWidth,
//         windowHeight: pdfContainer.scrollHeight
//       });

//       // Create PDF
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgData = canvas.toDataURL('image/png');
//       const imgWidth = 190; // A4 width minus margins
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//       pdf.save('alzheimer_report.pdf');

//     } catch (error) {
//       console.error('PDF generation failed:', error);
//       alert('PDF generation failed. Please ensure all images are loaded and try again.');
//     } finally {
//       // Clean up
//       const containers = document.querySelectorAll('div[style*="z-index: 9999"]');
//       containers.forEach(container => container.remove());
//       setIsGeneratingPDF(false);
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen" ref={reportRef}>
//       {/* Header */}
//       <div className="flex justify-center items-center p-12">
//         <div className='w-7xl flex justify-between items-center'>
//           <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
//             Original Scan
//           </h2>
//           <Link 
//             to="/edit-report-page" 
//             className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] hover:underline"
//           >
//             Edit Report
//           </Link>
//         </div>
//       </div>

//       {/* Report Content - EXACTLY as in your design */}
//       <div className="container flex justify-between mx-auto px-4 py-8 max-w-6xl rounded-2xl bg-gray-900">
//         <div>
//           <img 
//             src={brainImage} 
//             alt="Brain scan" 
//             className="max-w-full h-auto"
//             crossOrigin="anonymous"
//             onLoad={() => console.log('Image loaded successfully')}
//             onError={(e) => console.error('Image failed to load', e)}
//           />
//         </div>
        
//         <div className="w-3xl rounded-lg shadow-md p-6 mb-8">
//           {/* Scan Analysis Results */}
//           <div className="mb-8">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//               Scan Analysis Results
//             </h3>
//             <div className="space-y-2">
//               <p className="text-gray-300">
//                 <span className="font-medium text-gray-400">Diagnosis:</span> {reportData.diagnosis}
//               </p>
//               <p className="text-gray-300">
//                 <span className="font-medium text-gray-400">Confidence Level:</span> {reportData.confidence}
//               </p>
//             </div>
//           </div>

//           <hr className="my-6 border-gray-700" />

//           {/* Findings */}
//           <div className="mb-8">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//               Findings
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-gray-300">
//               {reportData.findings.map((finding, index) => (
//                 <li key={index}>{finding}</li>
//               ))}
//             </ul>
//           </div>

//           <hr className="my-6 border-gray-700" />

//           {/* Alzheimer's Stage */}
//           <div>
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//               Alzheimer's Stage
//             </h3>
//             <p className="text-gray-400 font-medium">{reportData.stage.name}:</p>
//             <p className="text-gray-500 italic">{reportData.stage.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons - EXACT styling as original */}
//       <div className="flex flex-col sm:flex-row justify-end gap-4 p-11">
//         <Link 
//           to="/UploadPageInitial"
//           className="px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white hover:opacity-90 transition-opacity text-center"
//         >
//           Upload Another Scan
//         </Link>
//         <button 
//           onClick={handleDownloadPDF}
//           disabled={isGeneratingPDF}
//           className={`px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white transition-opacity ${
//             isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
//           }`}
//         >
//           {isGeneratingPDF ? (
//             <span className="flex items-center justify-center gap-2">
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Generating PDF...
//             </span>
//           ) : (
//             'Download Report (PDF)'
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportPage;


// text download
// import React, { useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import brainImage from '../assets/images/Rectangle 4148.png';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const ReportPage = () => {
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
//   const reportRef = useRef();

//   // Report data
//   const reportData = {
//     diagnosis: "Possible Signs Of Alzheimer's Disease Detected",
//     confidence: "AI Confidence 97%",
//     findings: [
//       "Abnormal Brain Activity Detected in The Hippocampus And Frontal Regions",
//       "Indications Of Neuronal Atrophy And Plaque Bulldup",
//       "Further Neurological Assessment Recommended."
//     ],
//     stage: {
//       name: "Middle Stage",
//       description: "\"Noticeable Cognitive Decline, Confusion, Difficulty Performing Familiar Task\""
//     }
//   };

//   const handleDownloadPDF = async () => {
//     setIsGeneratingPDF(true);
    
//     try {
//       // 1. Create a temporary container with exact same styling
//       const pdfContainer = document.createElement('div');
//       pdfContainer.style.position = 'fixed';
//       pdfContainer.style.top = '0';
//       pdfContainer.style.left = '0';
//       pdfContainer.style.width = `${reportRef.current.offsetWidth}px`;
//       pdfContainer.style.backgroundColor = '#111827';
//       pdfContainer.style.zIndex = '9999';
//       pdfContainer.style.visibility = 'hidden';
//       document.body.appendChild(pdfContainer);

//       // 2. Clone the content exactly as shown
//       const contentClone = reportRef.current.cloneNode(true);
      
//       // Remove only interactive elements
//       contentClone.querySelectorAll('button, a').forEach(el => el.remove());
      
//       // Fix any transparency issues
//       contentClone.querySelectorAll('*').forEach(el => {
//         const styles = window.getComputedStyle(el);
//         if (styles.color === 'rgba(0, 0, 0, 0)') {
//           el.style.color = '#e5e7eb';
//         }
//         if (styles.visibility === 'hidden') {
//           el.style.visibility = 'visible';
//         }
//       });

//       pdfContainer.appendChild(contentClone);

//       // 3. Wait for all resources to load
//       await document.fonts.ready;
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // 4. Generate canvas with all content visible
//       const canvas = await html2canvas(pdfContainer, {
//         scale: 1,
//         logging: true,
//         useCORS: true,
//         allowTaint: true,
//         backgroundColor: '#111827',
//         scrollX: 0,
//         scrollY: 0,
//         windowWidth: pdfContainer.scrollWidth,
//         windowHeight: pdfContainer.scrollHeight,
//         onclone: (clonedDoc) => {
//           // Force all elements to be visible in the clone
//           clonedDoc.querySelectorAll('*').forEach(el => {
//             el.style.visibility = 'visible';
//             el.style.opacity = '1';
//           });
//         }
//       });

//       // 5. Create PDF
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgData = canvas.toDataURL('image/png');
//       const imgWidth = pdf.internal.pageSize.getWidth() - 20;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//       pdf.save('alzheimer_report.pdf');

//     } catch (error) {
//       console.error('PDF generation failed:', error);
      
//       // Fallback method if html2canvas fails
//       try {
//         const pdf = new jsPDF();
//         pdf.setFont('helvetica', 'bold');
//         pdf.setFontSize(16);
//         pdf.text('Alzheimer Diagnosis Report', 105, 20, { align: 'center' });
        
//         pdf.setFontSize(12);
//         pdf.text(`Diagnosis: ${reportData.diagnosis}`, 20, 40);
//         pdf.text(`Confidence Level: ${reportData.confidence}`, 20, 50);
        
//         pdf.text('Findings:', 20, 70);
//         reportData.findings.forEach((finding, i) => {
//           pdf.text(`- ${finding}`, 25, 80 + (i * 10));
//         });
        
//         pdf.text(`Alzheimer's Stage: ${reportData.stage.name}`, 20, 120);
//         pdf.text(reportData.stage.description, 25, 130);
        
//         pdf.save('alzheimer_report_fallback.pdf');
//       } catch (fallbackError) {
//         console.error('Fallback PDF generation failed:', fallbackError);
//         alert('Failed to generate PDF. Please try again later.');
//       }
//     } finally {
//       // Clean up
//       const containers = document.querySelectorAll('div[style*="z-index: 9999"]');
//       containers.forEach(container => container.remove());
//       setIsGeneratingPDF(false);
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen" ref={reportRef}>
//       {/* Header */}
//       <div className="flex justify-center items-center p-12">
//         <div className='w-7xl flex justify-between items-center'>
//           <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
//             Original Scan
//           </h2>
//           <Link 
//             to="/edit-report-page" 
//             className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] hover:underline"
//           >
//             Edit Report
//           </Link>
//         </div>
//       </div>

//       {/* Report Content */}
//       <div className="container flex justify-between mx-auto px-4 py-8 max-w-6xl rounded-2xl bg-gray-900">
//         <div>
//           <img 
//             src={brainImage} 
//             alt="Brain scan" 
//             className="max-w-full h-auto"
//             crossOrigin="anonymous"
//           />
//         </div>
        
//         <div className="w-3xl rounded-lg shadow-md p-6 mb-8">
//           {/* Scan Analysis Results */}
//           <div className="mb-8">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//               Scan Analysis Results
//             </h3>
//             <div className="space-y-2">
//               <p className="text-gray-300">
//                 <span className="font-medium text-gray-400">Diagnosis:</span> {reportData.diagnosis}
//               </p>
//               <p className="text-gray-300">
//                 <span className="font-medium text-gray-400">Confidence Level:</span> {reportData.confidence}
//               </p>
//             </div>
//           </div>

//           <hr className="my-6 border-gray-700" />

//           {/* Findings */}
//           <div className="mb-8">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//               Findings
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-gray-300">
//               {reportData.findings.map((finding, index) => (
//                 <li key={index}>{finding}</li>
//               ))}
//             </ul>
//           </div>

//           <hr className="my-6 border-gray-700" />

//           {/* Alzheimer's Stage */}
//           <div>
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//               Alzheimer's Stage
//             </h3>
//             <p className="text-gray-400 font-medium">{reportData.stage.name}:</p>
//             <p className="text-gray-500 italic">{reportData.stage.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-col sm:flex-row justify-end gap-4 p-11">
//         <Link 
//           to="/UploadPageInitial"
//           className="px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white hover:opacity-90 transition-opacity text-center"
//         >
//           Upload Another Scan
//         </Link>
//         <button 
//           onClick={handleDownloadPDF}
//           disabled={isGeneratingPDF}
//           className={`px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white transition-opacity ${
//             isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
//           }`}
//         >
//           {isGeneratingPDF ? 'Generating PDF...' : 'Download Report (PDF)'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportPage;


// import React, { useRef, useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const ReportPage = () => {
//   const { state } = useLocation();


//   const reportData = state?.analysisResult.scan || {};
//   const patientName = reportData.uploadedTo || 'Unknown';

//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
//   const reportRef = useRef();

//   const handleDownloadPDF = async () => {
//     setIsGeneratingPDF(true);
//     try {
//       const pdfContainer = document.createElement('div');
//       pdfContainer.style.position = 'fixed';
//       pdfContainer.style.top = '0';
//       pdfContainer.style.left = '0';
//       pdfContainer.style.width = `${reportRef.current.offsetWidth}px`;
//       pdfContainer.style.backgroundColor = '#111827';
//       pdfContainer.style.zIndex = '9999';
//       pdfContainer.style.visibility = 'hidden';
//       document.body.appendChild(pdfContainer);

//       const contentClone = reportRef.current.cloneNode(true);
//       contentClone.querySelectorAll('button, a').forEach(el => el.remove());
//       contentClone.querySelectorAll('*').forEach(el => {
//         el.style.visibility = 'visible';
//         el.style.opacity = '1';
//       });

//       pdfContainer.appendChild(contentClone);

//       await document.fonts.ready;
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       const canvas = await html2canvas(pdfContainer, {
//         scale: 1,
//         useCORS: true,
//         backgroundColor: '#111827',
//         windowWidth: pdfContainer.scrollWidth,
//         windowHeight: pdfContainer.scrollHeight,
//       });

//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const imgData = canvas.toDataURL('image/png');
//       const imgWidth = pdf.internal.pageSize.getWidth() - 20;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;

//       pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
//       pdf.save('alzheimer_report.pdf');
//     } catch (error) {
//       alert('PDF generation failed.');
//     } finally {
//       document.querySelectorAll('div[style*="z-index: 9999"]').forEach(el => el.remove());
//       setIsGeneratingPDF(false);
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen" ref={reportRef}>
//       <div className="flex justify-center items-center p-12">
//         <div className='w-7xl flex justify-between items-center'>
//           <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
//             Original Scan
//           </h2>
//           {/* <Link 
//             to="/edit-report-page" 
//             className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] hover:underline"
//           >
//             Edit Report
//           </Link> */}
//         </div>
//       </div>

//       <div className="container flex justify-between mx-auto px-4 py-8 max-w-6xl rounded-2xl bg-gray-900">
//         <div>
//           <img 
//             src={reportData.filePath} 
//             alt="Brain scan" 
//             className="max-w-full h-auto rounded-md"
//             crossOrigin="anonymous"
//           />
//         </div>

//         <div className="w-2xl rounded-lg shadow-md p-6 mb-8">
//              <div className="mb-6">
//                 <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
//                   Scan Analysis Results
//                 </h3>
//             </div>
//            <hr className="my-3 border-gray-700" />
//           <div className="mb-6">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
//               Patient Information
//             </h3>
//             <p className="text-gray-300 text-xl">
//               <span className="font-medium  mr-2 text-gray-400">Name:</span> {patientName}
//             </p>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
//               Diagnosis
//             </h3>
//             <p className="text-gray-300 text-xl">
//               <span className="font-medium  mr-2 text-gray-400">Result:</span> {reportData.analysisResult}
//             </p>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
//               Doctor Information
//             </h3>
//             <p className="text-gray-300 text-xl">
//               <span className="font-medium  mr-2 text-gray-400">Name:</span> {reportData.doctorName || 'Unknown'}
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
//               Upload Date
//             </h3>
//             <p className="text-gray-300 mr-2">
//               {new Date(reportData.uploadDate).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row justify-end gap-4 p-11">
//         <Link 
//           to="/UploadPageInitial"
//           className="px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white hover:opacity-90 transition-opacity text-center"
//         >
//           Upload Another Scan
//         </Link>
//         <button 
//           onClick={handleDownloadPDF}
//           disabled={isGeneratingPDF}
//           className={`px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white transition-opacity ${
//             isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
//           }`}
//         >
//           {isGeneratingPDF ? 'Generating PDF...' : 'Download Report (PDF)'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportPage;


import React, { useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const ReportPage = () => {
  const { state } = useLocation();
  const reportData = state?.analysisResult.scan || {};
  const patientName = reportData.uploadedTo || 'Unknown';

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const reportRef = useRef();

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);

    try {
      const pdf = new jsPDF();

      const titleColor = "#7C3AED";
      const labelColor = "#6B7280";
      const textColor = "#111827";

      let y = 10;

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(titleColor);
      pdf.setFontSize(18);
      pdf.text("Alzheimer Scan Report", 10, y);
      y += 12;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);

      pdf.setTextColor(labelColor);
      pdf.text("Patient Name:", 10, y);
      pdf.setTextColor(textColor);
      pdf.text(patientName, 50, y);
      y += 8;

      pdf.setTextColor(labelColor);
      pdf.text("Diagnosis Result:", 10, y);
      pdf.setTextColor(textColor);
      pdf.text(reportData.analysisResult || "N/A", 50, y);
      y += 8;

      pdf.setTextColor(labelColor);
      pdf.text("Doctor Name:", 10, y);
      pdf.setTextColor(textColor);
      pdf.text(reportData.doctorName || "Unknown", 50, y);
      y += 8;

      pdf.setTextColor(labelColor);
      pdf.text("Upload Date:", 10, y);
      pdf.setTextColor(textColor);
      pdf.text(
        reportData.uploadDate
          ? new Date(reportData.uploadDate).toLocaleString()
          : "N/A",
        50,
        y
      );
      y += 15;

      if (reportData.filePath) {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = reportData.filePath;

        image.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0);

          const imageData = canvas.toDataURL("image/jpeg");

          const pageWidth = pdf.internal.pageSize.getWidth() - 20;
          const imgWidth = pageWidth;
          const imgHeight = (image.height * imgWidth) / image.width;

          if (y + imgHeight > pdf.internal.pageSize.getHeight()) {
            pdf.addPage();
            y = 10;
          }

          pdf.addImage(imageData, "JPEG", 10, y, imgWidth, imgHeight);

          pdf.save("alzheimer_report.pdf");
          setIsGeneratingPDF(false);
        };

        image.onerror = () => {
          alert("Failed to load scan image.");
          setIsGeneratingPDF(false);
        };
      } else {
        alert("No scan image found.");
        setIsGeneratingPDF(false);
      }
    } catch (error) {
      alert("PDF generation failed.");
      console.error(error);
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white" ref={reportRef}>
      <div className="flex justify-center items-center p-12">
        <div className='w-7xl flex justify-between items-center'>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa]">
            Original Scan
          </h2>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row justify-between mx-auto px-4 py-8 max-w-6xl rounded-2xl bg-gray-900 gap-8">
        <div className="w-full lg:w-1/2">
          <img 
            src={reportData.filePath} 
            alt="Brain scan" 
            className="w-full h-auto rounded-md"
            crossOrigin="anonymous"
          />
        </div>

        <div className="w-full lg:w-1/2 rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-4">
              Scan Analysis Results
            </h3>
          </div>
          <hr className="my-3 border-gray-700" />

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
              Patient Information
            </h3>
            <p className="text-gray-300 text-xl">
              <span className="font-medium mr-2 text-gray-400">Name:</span> {patientName}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
              Diagnosis
            </h3>
            <p className="text-gray-300 text-xl">
              <span className="font-medium mr-2 text-gray-400">Result:</span> {reportData.analysisResult}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
              Doctor Information
            </h3>
            <p className="text-gray-300 text-xl">
              <span className="font-medium mr-2 text-gray-400">Name:</span> {reportData.doctorName || 'Unknown'}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#60a5fa] mb-2">
              Upload Date
            </h3>
            <p className="text-gray-300 mr-2 text-xl">
              {new Date(reportData.uploadDate).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 p-11">
        <Link 
          to="/UploadPageInitial"
          className="px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white hover:opacity-90 transition-opacity text-center"
        >
          Upload Another Scan
        </Link>
        <button 
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className={`px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-md font-semibold text-white transition-opacity ${
            isGeneratingPDF ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
          }`}
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Download Report (PDF)'}
        </button>
      </div>
    </div>
  );
};

export default ReportPage;
