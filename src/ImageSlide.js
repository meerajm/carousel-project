import React, { useState, useEffect } from "react";
import "./ImageSlide.css";

const ImageSlide = (props) => {
  const url = props.url;
  const photos = props.photos;
  const styles = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div>
      <div className="image-slide" style={styles}></div>
      <section className="thumbnails">
        <img className="thumbnail-img" src={photos[0]}></img>
        <img className="thumbnail-img" src={photos[1]}></img>
        <img className="thumbnail-img" src={photos[2]}></img>
        <img className="thumbnail-img" src={photos[3]}></img>
        <img className="thumbnail-img"src={photos[4]}></img>
      </section>
    </div>
  );
};

export default ImageSlide;
