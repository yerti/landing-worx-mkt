import React from "react";
import styles from "./styles.module.css";

export default function OrangeSectionOne() {
  const listImage = [
    { img: "/images/logoWhite.svg" },
    { img: "/images/logoWhite.svg" },
    { img: "/images/logoWhite.svg" },
    { img: "/images/logoWhite.svg" },
  ];
  return (
    <div className={styles.contentImagesList}>
      {listImage.map((image, index) => (
        <div key={index}>
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
}
