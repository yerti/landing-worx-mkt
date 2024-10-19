"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ArrowIcon from "@/Components/Icons/ArrowIcon";

interface ButtonProps {
  nameTile: string;
  img?: string;
  variant: string;
  type?: "button" | "submit" | "reset";
  iconColor: string;
  hoverIconColor: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  nameTile,
  img,
  variant,
  type,
  onClick,
  hoverIconColor,
  iconColor,

}: ButtonProps) {
  const [variantButton, setVariantButton] = useState(styles.button_purple);
  const [variantIcon, setVariantIcon] = useState("");

  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    switch (variant) {
      case "button_white":
        setVariantButton(styles.button_white);
        break;
      case "button_orange":
        setVariantButton(styles.button_Orange);
        break;
      case "button_responsive":
        setVariantButton(styles.button_responsive);
        break;
      default:
        setVariantButton(styles.button_white);
        break;
    }

    switch (img) {
      case "icon_scanner_qr":
        setVariantIcon("/images/scanner_qr.svg");
        break;
      default:
        setVariantIcon("");
        break;
    }
  });
  return (
    <>
      <button
        onClick={onClick}
        className={variantButton}
        type={type}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {nameTile}
        <ArrowIcon color={isHovered ? hoverIconColor : iconColor} />
      </button>
    </>
  );
}
