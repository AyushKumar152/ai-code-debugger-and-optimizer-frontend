import React from 'react';

const ActionButton = ({ onClick, label, loadingLabel, isLoading, bgColor, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} text-white px-4 py-2 rounded
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'}
      `}
      disabled={isLoading || disabled}
    >
      {isLoading ? loadingLabel : label}
    </button>
  );
};

export default ActionButton;
