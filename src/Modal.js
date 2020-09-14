import React from "react";
import ImageSlide from "./ImageSlide";
import "./App.css";
import "./modal.css";
import "./Arrow.css";

function Modal(props) {
  const photoUrls = props.photoUrls;
  const currentPhotoIndex = props.currentPhotoIndex;
  const setCurrentPhotoIndex = props.setCurrentPhotoIndex;
  const setShowModal = props.setShowModal;

  const closeModal = (showModal) => {
    setShowModal(showModal);
  };

  const previousSlide = () => {
    var index = 0;
    currentPhotoIndex === 0
      ? (index = photoUrls.length - 1)
      : (index = currentPhotoIndex - 1);    
    setCurrentPhotoIndex(index);
  };

  const nextSlide = () => {
    var index = 0;
    currentPhotoIndex === photoUrls.length - 1
      ? (index = 0)
      : (index = currentPhotoIndex + 1);       
    setCurrentPhotoIndex(index);
  };
  return (
    <div className="carousel">
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                closeModal(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal">
            <div className="modal-content">
              <section className="show-modal">
                <ImageSlide
                  url={photoUrls[currentPhotoIndex]}
                  photos={photoUrls}
                />
              </section>
              <a
                className="prev"
                onClick={() => {
                  previousSlide();
                }}
              >
                ❮
              </a>
              <a
                className="next"
                onClick={() => {
                  nextSlide();
                }}
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
