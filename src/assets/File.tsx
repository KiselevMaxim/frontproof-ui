import { type FC, type SVGProps } from 'react';

export const File: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="264" height="264" viewBox="0 0 264 264" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_172_446)">
      <mask id="mask0_172_446" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="264" height="264">
        <rect y="142" width="264" height="122" fill="url(#paint0_linear_172_446)"/>
        <rect width="264" height="142" fill="#090909"/>
      </mask>
      <g mask="url(#mask0_172_446)">
        <path
          d="M172.913 0.771729V91.0875H263.228M173.009 0.771729L0.771606 0.771799L0.772269 296.035C0.772269 304.736 4.22871 313.08 10.3812 319.233C16.5337 325.385 24.8783 328.842 33.5793 328.842H230.421C239.122 328.842 247.467 325.385 253.62 319.233C259.772 313.08 263.228 304.736 263.228 296.035V90.991L173.009 0.771729Z"
          stroke="#22BCB7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M233.123 156.702H30.8772" stroke="#22BCB7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M233.123 222.316H30.8772" stroke="#22BCB7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M142.035 91.0876H30.8772" stroke="#22BCB7" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </g>
    <defs>
      <linearGradient id="paint0_linear_172_446" x1="132" y1="142" x2="132" y2="264" gradientUnits="userSpaceOnUse">
        <stop stopColor="#090909"/>
        <stop offset="1" stopColor="#090909" stopOpacity="0"/>
      </linearGradient>
      <clipPath id="clip0_172_446">
        <rect width="264" height="264" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)
