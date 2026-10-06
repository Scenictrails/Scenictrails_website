import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Icon } from './Icon';

export function TopBar() {
  const { topBar, brand } = siteConfig;

  return (
    <div className="w-full bg-ink text-white/70">
      <div className="mx-auto flex h-11 max-w-shell items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <span className="hidden text-[10px] font-semibold uppercase tracking-nav text-white sm:inline">
            {topBar.followLabel}
          </span>
          <ul className="flex items-center gap-3">
            {topBar.socials.map((social) =>
            <li key={social.label}>
                <a
                href={social.href}
                className="block text-white/60 transition-colors duration-150 ease-out hover:text-gold focus-visible:text-gold focus-visible:outline-none">
                
                  <Icon name={social.icon} className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${brand.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-xs tracking-wide transition-colors duration-150 ease-out hover:text-gold">
            
            <Icon name="phone" className="h-3.5 w-3.5 text-gold" />
            <span className="hidden sm:inline">{brand.phone}</span>
          </a>
          <a
            href="#contact"
            className="text-[10px] font-semibold uppercase tracking-nav text-white transition-colors duration-150 ease-out hover:text-gold">
            
            {topBar.loginLabel}
          </a>
        </div>
      </div>
    </div>);

}