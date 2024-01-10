import React, { ReactNode, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-0 z-40 flex items-center justify-center px-4 py-2 sm:px-6 ${isOpen ? 'visible' : 'invisible'} bg-black bg-opacity-50 transition-opacity`} 
    style={{ display: isOpen ? 'flex' : 'none' }}
      
    >
      <div className="bg-black border border-white rounded-lg p-4 sm:p-6 max-w-full w-auto sm:max-w-xl md:max-w-2xl transition-all transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}"
      onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <button
          className="absolute top-0 right-0 p-2 m-2 text-white"
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
