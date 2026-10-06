import React from 'react';

type DestinationImageProps = {
  variant: 'sunrise' | 'city';
  className?: string;
};

const images = {
  sunrise: '/images/ella-rock.jpg',
  city: '/images/nine-arch-bridge.jpg'
};

export function DestinationImage({ variant, className = '' }: DestinationImageProps) {
  return (
    <img
      src={images[variant]}
      className={`object-cover ${className}`}
      alt=""
      aria-hidden="true" />
  );
}