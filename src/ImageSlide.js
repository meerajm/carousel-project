import React, { useState, useEffect } from "react";
import "./ImageSlide.css";

const ImageSlide = (props) => {
  const url = props.url;
  const photos = props.photos;
  const setCurrentPhotoIndex = props.setCurrentPhotoIndex;
  const styles = {
    backgroundImage: `url(${url})`,
  };

  function handlePhotoClick(i) {
    setCurrentPhotoIndex(i);
  }

  var allPhotos = photos.map((photo, i) => {
    return (
      <img
        key={i}
        className="thumbnail-img"
        onClick={() => handlePhotoClick(i)}
        src={photo}
        alt="No photo available."
      />
    );
  });
  return (
    <div>
      <div className="image-slide" style={styles}></div>
      <section className="thumbnails">{allPhotos}</section>
    </div>
  );
};

export default ImageSlide;
