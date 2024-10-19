import React from "react";
import styles from './style.module.css'
import Link from "next/link";

interface PresentationSectionProps {
    title: string;
    rout: string;
    nameRout: string;
}

export default function PresentationSection({title, rout, nameRout}: PresentationSectionProps) {
  return (
    <section className={styles.contentSectionPresentation}>
      <div className={styles.titleContentSectionPresentation}>
        <h1>{title}</h1>
        <div className={styles.textSectionPresentation}>
            <Link href={rout}>{nameRout}</Link>
            <img src="/images/chevron-forward-outline.svg" alt="" /> 
            <p>{title}</p>
        </div>
      </div>
      <img
      className={styles.imagePresentation}
        src="https://vibetech-html.vercel.app/assets/images/shape/breadcrumb-sp.png"
        alt=""
      />
    </section>
  );
}
