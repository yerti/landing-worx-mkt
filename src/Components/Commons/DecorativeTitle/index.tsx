import React from "react";
import styles from './styles.module.css'

interface DecorativeTitleProps {
  span: string;
  nameTitle: string;
}

export default function DecorativeTitle({
  span,
  nameTitle,
}: DecorativeTitleProps) {
  return (
    <h1 className={styles.titleDecorative}>
      <span>{span}</span> 
      {nameTitle}
    </h1>
  );
}
