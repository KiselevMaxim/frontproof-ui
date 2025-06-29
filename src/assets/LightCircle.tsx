import { type FC, type SVGProps } from 'react';

export const LightCircle: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="41" cy="41" r="40" stroke="url(#paint0_linear_179_753)" />
      <defs>
          <linearGradient id="paint0_linear_179_753" x1="41" y1="0" x2="82" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22BCB7" stopOpacity="0.12"/>
              <stop offset="1" stopColor="#22BCB7" stopOpacity="0.02"/>
          </linearGradient>
      </defs>
  </svg>
)
