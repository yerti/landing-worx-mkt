import React from "react";
import styles from "./styles.module.css";

interface ParagraphProps {
  name: string;
}

export default function Paragraph({ name }: ParagraphProps) {
  return (
    <p
      className={styles.paragraphTotal}
    >
      {name}
    </p>
  );
}
