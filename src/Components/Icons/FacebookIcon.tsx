import React from "react";

interface IconProps {
  color: string;
}

export default function FacebookIcon({ color }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M480.614 257.565C480.614 133.865 380.314 33.5646 256.614 33.5646C132.914 33.5646 32.614 133.865 32.614 257.565C32.614 369.365 114.514 462.035 221.614 478.855V322.335H164.724V257.565H221.614V208.215C221.614 152.085 255.064 121.055 306.224 121.055C330.734 121.055 356.374 125.435 356.374 125.435V180.565H328.114C300.304 180.565 291.604 197.825 291.604 215.565V257.565H353.724L343.804 322.335H291.614V478.875C398.714 462.065 480.614 369.395 480.614 257.565Z"
        fill={color}
      />
    </svg>
  );
}
