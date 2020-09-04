import React, { useState } from "react";
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group'
import "./Modal.css";

// Reusable Modal hook -> 
// Using createPortal from react-dom to render the modal outside of the About Component. 
// This helps with layout issues, so instead of the quick fix 'position: fixed', 
// when you look at the DOM, you'll see "overlay" is now rendering just before the closing
// body tag. It takes a React node, and DOM node as parameters.

// Passing the Modal Hook 'activate' is a render prop pattern that takes a function, 
// allowing us to handle state within the modal. 
// In 'About.jsx', we're using <Modal> and passing it a function every time we want a Modal
//  to appear on the page.

const Modal = ({ children, activate }) => {

  const [isVisible, setIsVisible] = useState(false)

  const content = isVisible && (
    // overlay: backdrop for our modal (darkens the screen behind it)
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