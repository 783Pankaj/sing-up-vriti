import React from "react";
import '../components/singup.css'
const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button
        onClick={onClose} className="close-btn">Close</button>
        {children}
        {console.log('this is children data',children)}
      </div>
    </div> 
  );
};

export default Modal;