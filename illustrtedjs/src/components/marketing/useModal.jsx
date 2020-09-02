// import React, { useState, ReactChild} from "react"
// import "./Modal.jsx";

// export const useModal = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const show = () => setIsVisible(true)
//   const hide = () => setIsVisible(false)

//   const RenderModal = ({ children } : { children: ReactChild}) => {
//     <React.Fragment>
//       {isVisible && <Modal closeModal={hide}>{children}</Modal>}
//     </React.Fragment>
//   }

//   return {
//     show, hide, RenderModal
//   }
// }