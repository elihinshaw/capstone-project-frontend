import React from "react";
import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background" onClick={props.onClose}>
        <div className="modal-dialog modal-lg modal-bordered">
          <div className="modal-content">
            <div className="modal-header">
              <br />
              <h5 className="modal-title">{props.title}</h5>
            </div>
            <div className="modal-body">{props.children}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
