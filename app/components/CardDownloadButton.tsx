'use client';

import React, { useState } from 'react';
import html2canvas from 'html2canvas';

interface CardDownloadButtonProps {
  cardElementId: string;
  cardTitle?: string;
}

export const CardDownloadButton: React.FC<CardDownloadButtonProps> = ({
  cardElementId,
  cardTitle = 'valentine-card',
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  // Download handler will be implemented in next commit
  const handleDownload = async (format: 'png' | 'jpeg') => {
    console.log(`Download ${format} requested`);
    // Implementation coming next
  };

  return (
    <div className="download-container">
      <div className="love-letter-seal">
        {/* Replace the wax-seal-placeholder div with this: */}
<div className={`wax-seal ${downloadComplete ? 'sealed' : ''}`}>
  <svg 
    viewBox="0 0 100 100" 
    className="seal-stamp"
    style={{
      filter: downloadComplete ? 'none' : 'grayscale(0.3)',
    }}
  >
    {/* Wax seal outer circle */}
    <circle cx="50" cy="50" r="48" fill="#8B1538" opacity="0.9"/>
    <circle cx="50" cy="50" r="45" fill="#A01D48"/>
    
    {/* Heart emboss */}
    <path
      d="M50 65 Q35 55 35 45 Q35 35 45 35 Q50 40 50 40 Q50 40 55 35 Q65 35 65 45 Q65 55 50 65"
      fill="#8B1538"
      stroke="#6B0F2A"
      strokeWidth="1"
    />
    
    {/* Wax drips */}
    <ellipse cx="30" cy="90" rx="8" ry="4" fill="#8B1538" opacity="0.6"/>
    <ellipse cx="70" cy="88" rx="6" ry="3" fill="#8B1538" opacity="0.6"/>
    <ellipse cx="50" cy="92" rx="7" ry="4" fill="#8B1538" opacity="0.6"/>
  </svg>

  {/* Checkmark when complete */}
  {downloadComplete && (
    <div className="checkmark-overlay">
      <svg viewBox="0 0 52 52" className="checkmark">
        <circle cx="26" cy="26" r="25" fill="none"/>
        <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
    </div>
  )}
</div>

        {/* Stamp buttons placeholder */}
        <div className="stamp-buttons">
          <button onClick={() => handleDownload('png')} disabled={isDownloading}>
            PNG
          </button>
          <button onClick={() => handleDownload('jpeg')} disabled={isDownloading}>
            JPEG
          </button>
        </div>
      </div>

      {/* Status messages */}
      {isDownloading && <p>⏳ Downloading...</p>}
      {downloadComplete && <p>✅ Download complete!</p>}

      <style jsx>{`
        .download-container {
          padding: 2rem;
          text-align: center;
        }
        button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
          .wax-seal {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 2rem;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wax-seal.sealed {
  transform: rotate(360deg) scale(1.1);
}

.seal-stamp {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 8px rgba(139, 21, 56, 0.4));
  transition: transform 0.3s ease;
}

.wax-seal:hover .seal-stamp {
  transform: scale(1.05) rotate(-5deg);
}

.checkmark-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-in;
}

.checkmark {
  width: 60px;
  height: 60px;
  stroke: #FFF;
  stroke-width: 3;
  stroke-miterlimit: 10;
  animation: checkmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark path {
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
      `}</style>
    </div>
  );
};

export default CardDownloadButton;