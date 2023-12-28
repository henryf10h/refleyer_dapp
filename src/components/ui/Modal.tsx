import React from "react";


const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'} bg-black bg-opacity-50 transition-opacity`}
      style={{ display: isOpen ? 'flex' : 'none' }}
      onClick={onClose}
    >
      <div
        className={`bg-black border-white rounded-lg p-6 m-4 transition-transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <button
          className="absolute top-0 right-0 p-2 text-white"
          onClick={onClose}
        >
            X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
