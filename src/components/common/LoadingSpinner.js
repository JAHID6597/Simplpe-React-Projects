import React from 'react';

const LoadingSpinner = ({ mainDivClass, spinnerClass  }) => {
  return (
    <div className={mainDivClass}>
      <div className={`spinner-border ${spinnerClass}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
