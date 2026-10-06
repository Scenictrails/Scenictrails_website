import React from 'react';

type MapTextureProps = {
  /** Line color — keep it barely there. */
  stroke?: string;
  className?: string;
};

/**
 * Thin decorative contour-map line illustration used sparingly as background
 * texture. Purely decorative, so it is hidden from assistive tech.
 */
export function MapTexture({ stroke = '#1c1c1c', className = '' }: MapTextureProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false">
      
      <g stroke={stroke} strokeWidth="1">
        <path d="M-40 180C120 120 260 240 420 190S700 60 880 130s240 40 400-10" />
        <path d="M-40 230C130 170 270 290 430 240S710 110 890 180s230 40 390-10" />
        <path d="M-40 280C140 220 280 340 440 290S720 160 900 230s220 40 380-10" />
        <path d="M-40 350C150 290 290 410 450 360S730 230 910 300s210 40 370-10" />
        <path d="M-40 420C160 360 300 480 460 430S740 300 920 370s200 40 360-10" />
        <path d="M-40 490C170 430 310 550 470 500S750 370 930 440s190 40 350-10" />
      </g>
    </svg>);

}