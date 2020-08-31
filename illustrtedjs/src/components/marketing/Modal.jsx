import React from "react";
import { withRouter } from "react-router-dom";
import "./Modal.css";

const Modal = () => (
  <div
    role="button"
    className="modal-box"
    onClick={() => this.props.history.goBack()}>
      <div
      role="button"
      className="modal"
      onClick={e => e.stopPropogation()}>
          <p>Content</p>
      </div>
    </div>
);

export default withRouter(Modal);