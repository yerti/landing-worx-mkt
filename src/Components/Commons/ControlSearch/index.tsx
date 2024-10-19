import React, { useState } from "react";
import styles from "./styles.module.css";

interface ControlSearchProps {
  value: string | number;
  labelName: string;
}
export default function ControlSearch({
  value,
  labelName,
}: ControlSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  return (
    <div className={styles.contentControlSearch}>
      <img
        className={styles.imgSearchControl}
        src="/images/search.svg"
        alt=""
      />
      <label className={styles.activeLabel} htmlFor="buscar">
        {labelName}
      </label>
      <input type="text" id="buscar" onFocus={handleFocus} />
    </div>
  );
}
