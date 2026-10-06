import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { DestinationImage } from './DestinationImage';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden lg:min-h-[680px]">
      <DestinationImage variant="sunrise" className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70"
        aria-hidden="true" />
      

      <div className="relative mx-auto w-full max-w-3xl px-6 py-20 text-center lg:py-28">
        <p className="font-script text-4xl text-gold lg:text-5xl">{hero.script}</p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[66px]">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 lg:text-lg">
          {hero.subtitle}
        </p>
      </div>
    </section>);

}