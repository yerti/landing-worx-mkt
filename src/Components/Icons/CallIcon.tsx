import React from "react";

interface IconProps {
  w: string;
  h: string;
  color: string;
}

export default function CallIcon({ h, w, color }: IconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M391.737 480.263C372.217 480.263 344.797 473.203 303.737 450.263C253.807 422.263 215.187 396.413 165.527 346.883C117.647 299.033 94.3468 268.053 61.7368 208.713C24.8968 141.713 31.1768 106.593 38.1968 91.5832C46.5568 73.6432 58.8968 62.9132 74.8468 52.2632C83.9063 46.3275 93.4935 41.2394 103.487 37.0632C104.487 36.6332 105.417 36.2232 106.247 35.8532C111.197 33.6232 118.697 30.2532 128.197 33.8532C134.537 36.2332 140.197 41.1032 149.057 49.8532C167.227 67.7732 192.057 107.683 201.217 127.283C207.367 140.493 211.437 149.213 211.447 158.993C211.447 170.443 205.687 179.273 198.697 188.803C197.387 190.593 196.087 192.303 194.827 193.963C187.217 203.963 185.547 206.853 186.647 212.013C188.877 222.383 205.507 253.253 232.837 280.523C260.167 307.793 290.147 323.373 300.557 325.593C305.937 326.743 308.887 325.003 319.207 317.123C320.687 315.993 322.207 314.823 323.797 313.653C334.457 305.723 342.877 300.113 354.057 300.113H354.117C363.847 300.113 372.177 304.333 385.977 311.293C403.977 320.373 445.087 344.883 463.117 363.073C471.887 371.913 476.777 377.553 479.167 383.883C482.767 393.413 479.377 400.883 477.167 405.883C476.797 406.713 476.387 407.623 475.957 408.633C471.748 418.609 466.629 428.176 460.667 437.213C450.037 453.113 439.267 465.423 421.287 473.793C412.054 478.16 401.95 480.373 391.737 480.263Z"
        fill={color}
      />
    </svg>
  );
}