import React from 'react';
import { siteConfig } from '../data/siteConfig';

export function Header() {
  const { brand, nav, bookNowLabel } = siteConfig;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-shell items-center justify-between gap-6 px-6">
        <a href="#top" className="font-script text-3xl leading-none text-charcoal">
          {brand.name}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) =>
            <li key={item.label}>
                <a
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-nav text-charcoal transition-colors duration-150 ease-out hover:text-gold focus-visible:text-gold focus-visible:outline-none">
                
                  {item.label}
                </a>
              </li>
            )}
          </ul>
        </nav>

        <a
          href="#ella-rock"
          className="bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-nav text-charcoal transition-colors duration-150 ease-out hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal">
          
          {bookNowLabel}
        </a>
      </div>

      <nav aria-label="Main, compact" className="border-t border-black/5 lg:hidden">
        <ul className="mx-auto flex max-w-shell items-center gap-6 overflow-x-auto px-6 py-3">
          {nav.map((item) =>
          <li key={item.label} className="shrink-0">
              <a
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-nav text-charcoal hover:text-gold">
              
                {item.label}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>);

}