import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Icon } from './Icon';

export function Footer() {
  const { brand, footer, topBar } = siteConfig;

  return (
    <footer id="contact" className="scroll-mt-24 bg-ink text-white/70">
      <div className="mx-auto max-w-shell px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <p className="font-script text-3xl text-white">{brand.name}</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{brand.blurb}</p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-white">{footer.contactTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${brand.phone.replace(/\s/g, '')}`}
                  className="transition-colors duration-150 ease-out hover:text-gold">
                  
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${brand.email}`}
                  className="transition-colors duration-150 ease-out hover:text-gold">
                  
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-white">{footer.quickLinksTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footer.quickLinks.map((link) =>
              <li key={link.label}>
                  <a
                  href={link.href}
                  className="transition-colors duration-150 ease-out hover:text-gold">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl font-bold text-white">{footer.newsletterTitle}</h2>
            <p className="mt-5 text-sm leading-relaxed">{footer.newsletterBlurb}</p>

            <form
              className="mt-5 flex"
              onSubmit={(event) => event.preventDefault()}
              aria-label={footer.newsletterTitle}>
              
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold" />
                
              </label>
              <button
                type="submit"
                className="bg-gold px-5 text-[11px] font-semibold uppercase tracking-nav text-charcoal transition-colors duration-150 ease-out hover:bg-gold-dark">
                
                {footer.newsletterCta}
              </button>
            </form>

            <ul className="mt-6 flex items-center gap-4">
              {topBar.socials.map((social) =>
              <li key={social.label}>
                  <a
                  href={social.href}
                  className="block text-white/60 transition-colors duration-150 ease-out hover:text-gold">
                  
                    <Icon name={social.icon} className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          {footer.copyright}
        </p>
        <p className="mt-3 text-center text-[10px] text-white/35">
          Image credits: <a href="https://commons.wikimedia.org/wiki/File:Ella_Rock,_Sri_Lanka.jpg" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-white/60">Madhawa Dunuwila</a> and <a href="https://commons.wikimedia.org/wiki/File:Nine_Arch_Bridge_in_Ella.jpg" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-white/60">Dilshan255</a>, CC BY-SA 4.0.
        </p>
      </div>
    </footer>);

}