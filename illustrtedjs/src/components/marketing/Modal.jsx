import React, { useState } from "react";
import ReactDOM, { createPortal } from 'react-dom';
import "./Modal.css";
import { Children } from "react";


const Modal = ({ children, activate }) => {

  const [isVisible, setIsVisible] = useState(false)

  const content = isVisible && (
    <div className="overlay">
      <div className="modal-box">
        <button
          className="modal-close"
          type="button"
          onClick={() => { setIsVisible(false)}}
          >X</button>
        <div className="modal-body">
          {children}
        </div>
    </div>
  </div>
  )

  return (
    <>
    {activate({setIsVisible})}
    {createPortal(content, document.body)}
    </>
  );
};


export default Modal;