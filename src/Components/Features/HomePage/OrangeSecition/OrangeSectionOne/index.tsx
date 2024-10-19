import React from "react";
import styles from "./styles.module.css";
import LogoWhite from "@/Components/Icons/LogoWhite";

export default function OrangeSectionOne() {
  const listImage = [
    { img: <LogoWhite/>},
    { img:  <LogoWhite/>},
    { img: <LogoWhite/>},
    { img: <LogoWhite/> },
  ];
  return (
    <div className={styles.contentImagesList}>
      {listImage.map((image, index) => (
        <div key={index}>
          {image.img}
        </div>
      ))}
    </div>
  );
}
