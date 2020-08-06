import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { modalToggle } from "../../redux/modal/modalActions";
import {
  selectModalOpen,
  selectModalContent,
} from "../../redux/modal/userSelector";

import "./Modal.scss";

const Modal = () => {
  const modalOpen = useSelector(selectModalOpen);
  const modalContent = useSelector(selectModalContent);
  const dispatch = useDispatch();

  return (
    <div
      className="site-modal fade-in-fast"
      style={{
        display: `${modalOpen ? "block" : "none"}`,
      }}
    >
      <div className="modal-content">
        <div className="col right">
          <span className="close" onClick={() => dispatch(modalToggle(false))}>
            &times;
          </span>
        </div>
        <div className="">{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
