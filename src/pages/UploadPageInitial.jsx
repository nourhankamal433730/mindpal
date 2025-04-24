
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UploadPageInitial() {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // Define the handleDrag function
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  // Define the handleDrop function
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  }, []);

  // Define the handleFileChange function
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  // Define the file upload handler
  const handleFileUpload = (file) => {
    // Validate file type and size
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setError('Only JPG, PNG, or PDF files are allowed');
      return;
    }

    if (file.size > maxSize) {
      setError('File size must be less than 10MB');
      return;
    }

    setError('');
    setFile(file);
    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      navigate('/upload-complete', {
        state: {
          fileName: file.name,
          fileType: file.type,
          fileSize: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
          fileDate: new Date().toLocaleDateString()
        }
      });
    }, 2000);
  };


  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        maxWidth: '42rem',
        width: '100%',
        marginTop: '3rem',
        // backgroundColor: '#111827',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Header */}
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: '700',
          color: 'white',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          Upload A Medical Scan For <br /> 
          <span style={{
            background: 'linear-gradient(to right, #60a5fa, #d8b4fe)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            AI Analysis
          </span>
        </h2>
        
        {/* Upload Box */}
        <div 
          style={{
            border: `2px dashed ${error ? '#ef4444' : dragActive ? '#3b82f6' : '#4b5563'}`,
            borderRadius: '0.5rem',
            padding: '2rem',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backgroundColor: dragActive ? 'rgba(30, 58, 138, 0.2)' : 'transparent',
            marginBottom: '1.5rem'
          }}
          {...(!file && {
            onDragEnter: handleDrag,
            onDragLeave: handleDrag,
            onDragOver: handleDrag,
            onDrop: handleDrop
          })}
        >
          {!file ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              {/* Upload Icon */}
              <svg 
                style={{
                  width: '4rem',
                  height: '4rem',
                  marginBottom: '1rem',
                  color: dragActive ? '#3b82f6' : '#9ca3af'
                }} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              
              <p style={{
                color: '#d1d5db',
                marginBottom: '0.5rem',
                fontSize: '1.25rem',
                fontWeight: '500'
              }}>
                {dragActive ? 'Drop your files here' : 'Select a file or drag and drop here'}
              </p>
              
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem',
                fontSize: '0.875rem'
              }}>
                JPG, PNG, PDF (Max 10MB)
              </p>
              
              <input 
                type="file" 
                id="file-upload"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept=".jpg,.jpeg,.png,.pdf"
              />
              
              <label 
                htmlFor="file-upload" 
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  opacity: dragActive ? 0.9 : 1
                }}
              >
                Choose Files
              </label>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* File Preview */}
              <div style={{
                width: '100%',
                backgroundColor: '#1f2937',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={{
                      width: '2rem',
                      height: '2rem',
                      color: '#60a5fa',
                      marginRight: '0.75rem'
                    }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p style={{ color: 'white', fontWeight: '500' }}>{file.name}</p>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  {isUploading && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#93c5fd', marginRight: '0.5rem' }}>Uploading...</span>
                      <div style={{
                        animation: 'spin 1s linear infinite',
                        width: '1.25rem',
                        height: '1.25rem',
                        border: '2px solid #93c5fd',
                        borderTopColor: 'transparent',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

     
      {/* Updated Global Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes fileAddedAnimation {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
    </div>
  );
}