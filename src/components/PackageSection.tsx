import React from 'react';
import type { TourPackage } from '../data/siteConfig';
import { FeatureIconRow } from './FeatureIconRow';
import { MapTexture } from './MapTexture';
import { DestinationImage } from './DestinationImage';

type PackageSectionProps = {
  pkg: TourPackage;
  tone: 'white' | 'cream';
  /** Put the illustrated card on the left instead of the right. */
  reverse?: boolean;
  /** Pricing tiers, à la carte stops — whatever this package sells. */
  children: React.ReactNode;
};

export function PackageSection({ pkg, tone, reverse = false, children }: PackageSectionProps) {
  return (
    <section
      id={pkg.id}
      aria-labelledby={`${pkg.id}-heading`}
      className={[
      'relative isolate overflow-hidden scroll-mt-24 py-20 lg:py-28',
      tone === 'cream' ? 'bg-cream' : 'bg-white'].
      join(' ')}>
      
      {tone === 'cream' &&
      <MapTexture className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" />
      }

      <div className="relative mx-auto max-w-shell px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className={reverse ? 'lg:order-2 lg:col-span-5' : 'lg:col-span-5'}>
            <p className="text-[11px] font-semibold uppercase tracking-nav text-gold-dark">
              {pkg.eyebrow}
            </p>
            <h2
              id={`${pkg.id}-heading`}
              className="mt-4 font-serif text-4xl font-bold leading-[1.1] text-charcoal sm:text-5xl">
              
              {pkg.headline}
            </h2>
            <p className="mt-5 font-serif text-lg italic leading-relaxed text-body">
              {pkg.subtitle}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-body">{pkg.description}</p>
          </div>

          <div className={reverse ? 'lg:order-1 lg:col-span-7' : 'lg:col-span-7'}>
            <figure className="relative isolate h-[320px] overflow-hidden rounded-xl sm:h-[420px] lg:h-[480px]">
              <DestinationImage variant={pkg.art} className="absolute inset-0 h-full w-full" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                aria-hidden="true" />
              
              <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="font-script text-2xl text-gold">{pkg.eyebrow}</p>
                <p className="mt-1 font-serif text-3xl font-bold text-white sm:text-4xl">
                  {pkg.headline}
                </p>
                <p className="mt-2 text-sm text-white/85">{pkg.cardPrice}</p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16">
          <FeatureIconRow features={pkg.features} />
        </div>

        <div id={`${pkg.id}-options`} className="mt-16 scroll-mt-28">
          {children}
        </div>

        <p className="mt-16 text-center font-serif text-2xl italic text-charcoal sm:text-3xl">
          {pkg.closing}
        </p>
      </div>
    </section>);

}