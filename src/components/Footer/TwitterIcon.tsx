import * as React from "react";

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="28"
    width="28"
    fill="none"
    {...props}
  >
    <circle fill="#0F1419" cx="12" cy="12" r="12" />
    <path
      fill="#FFFFFF"
      d="M15.531,7h1.662l-3.63,4.236L17.833,17h-3.343l-2.62-3.495L8.876,17H7.212l3.882-4.531L7,7h3.427
l2.366,3.195L15.531,7z M14.947,15.986h0.92L9.926,7.962H8.937L14.947,15.986z"
    />
  </svg>
);

export default TwitterIcon;
