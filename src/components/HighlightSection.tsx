import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapTexture } from './MapTexture';

export function HighlightSection() {
  const { highlight } = siteConfig;

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative isolate overflow-hidden scroll-mt-24 bg-charcoal py-20 lg:py-28">
      
      <MapTexture
        stroke="#ffffff"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" />
      

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="font-script text-3xl text-gold">{highlight.script}</p>
        <h2
          id="story-heading"
          className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
          
          {highlight.heading}
        </h2>
        <blockquote className="mt-8">
          <p className="font-serif text-xl italic leading-relaxed text-white/85 sm:text-2xl">
            “{highlight.quote}”
          </p>
          <footer className="mt-8 text-[11px] font-semibold uppercase tracking-nav text-white">
            {highlight.author}
            <span className="mt-2 block font-normal normal-case tracking-normal text-white/50">
              {highlight.origin}
            </span>
          </footer>
        </blockquote>
      </div>
    </section>);

}