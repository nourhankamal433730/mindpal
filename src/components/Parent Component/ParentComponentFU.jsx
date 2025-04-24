// import React, { useState } from 'react';
// import UploadPageInitial from './UploadPageInitial';
// import UploadPageWithFile from './UploadPageWithFile'; // Make sure to import this

// export default function ParentComponentFU() {
//   const [fileUploaded, setFileUploaded] = useState(false);
//   const [fileInfo, setFileInfo] = useState({
//     name: '',
//     date: ''
//   });

//   const handleFileUpload = (file) => {
//     setFileInfo({
//       name: file.name,
//       date: new Date().toLocaleDateString()
//     });
//     setFileUploaded(true);
//   };

//   const handleCancel = () => {
//     setFileUploaded(false);
//     setFileInfo({ name: '', date: '' });
//   };

//   return (
//     <div className="upload-page">
//       {!fileUploaded ? (
//         <UploadPageInitial onFileUpload={handleFileUpload} />
//       ) : (
//         <UploadPageWithFile 
//           fileName={fileInfo.name} 
//           fileDate={fileInfo.date} 
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// }