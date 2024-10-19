"use client";
import React from "react";
import styles from "./styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface SubTitleProps {
  nameSubTitle: string;
}

export default function SubTitle({ nameSubTitle }: SubTitleProps) {
  // useEffect(() => {
  //   console.log("AOS.init() is running");
  //   AOS.init({
  //     duration: 1200, // Duración de la animación
  //   });
  // }, []);
  return (
    <h3
      // data-aos="fade-up"
      className={styles.subtitleTotal}
      dangerouslySetInnerHTML={{ __html: nameSubTitle }}
    />
  );
}
