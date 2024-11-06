import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaSrc: string;
  isVideo: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, mediaSrc, isVideo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <video src={mediaSrc} controls autoPlay />
        ) : (
          <img src={mediaSrc} alt="Expanded" className="modal-image" />
        )}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
