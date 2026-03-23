import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 80" {...props}>
      <path
        fill="#a78bfa"
        d="M40 8 L68 60 L12 60 Z M40 28 L28 60 L52 60 Z M46 30 L34 18 L58 18 Z"
      />
      <text
        x="80"
        y="55"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="42"
      >
        AirDev
      </text>
      <text
        x="310"
        y="55"
        fill="#a78bfa"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fontSize="42"
      >
        Sign
      </text>
    </svg>
  );
};
