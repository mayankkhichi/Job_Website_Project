// Slide.js
import React from "react";
import styles from "./Slide.module.css"

const Slide = ({ slide, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img
        className={styles.slidebar}
        style={{ height: "400px" }}
        src={slide.imageUrl}
        alt={`Slide ${slide.id}`}
      />
      <div className="carousel-caption">
        <h3>{slide.caption}</h3>
        <p>{slide.description}</p>
      </div>
    </div>
  );
};

export default Slide;
