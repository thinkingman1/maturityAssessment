import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-200">
      <div 
        className="h-2 bg-blue-500 transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
