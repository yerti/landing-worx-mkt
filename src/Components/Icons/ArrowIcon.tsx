import React from "react";

interface ArrowIconProps {
  color: string;
}

export default function ArrowIcon({ color }: ArrowIconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.13428 1.54736L15.8843 8.29736L9.13428 15.0474M14.9468 8.29736H1.25928"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
