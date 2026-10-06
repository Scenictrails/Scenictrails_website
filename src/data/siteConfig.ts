/* =========================================================================
   SITE CONFIG — EDIT EVERYTHING HERE
   All copy, prices, nav labels and tour stops for the whole page live in
   this one object. Nothing below the `siteConfig` export needs touching.
   ========================================================================= */

import type { IconName } from '../components/Icon';

export type Feature = {icon: IconName;label: string;};

export type PricingOption = {
  id: string;
  name: string;
  capacity: string;
  price: string;
  unit: string;
  featured?: boolean;
};

export type TourStop = {
  id: string;
  icon: IconName;
  name: string;
  price: string;
  amount: number;
};

export type TourPackage = {
  id: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  description: string;
  art: 'sunrise' | 'city';
  cardPrice: string;
  features: Feature[];
  closing: string;
  /* Package 1 uses pricing tiers, package 2 uses à la carte stops. */
  pricing?: PricingOption[];
  stopsHeading?: string;
  stopsHelper?: string;
  stops?: TourStop[];
};

export const siteConfig = {
  brand: {
    name: 'Scenic Trails',
    blurb:
    'A two-person outfit running small, unhurried trips around Ella — sunrise on the rock, and the rest of the hill country at your own pace.',
    phone: '+94 77 124 4422',
    email: 'hello@scenictrails.lk',
    address: 'Ella, Sri Lanka'
  },

  topBar: {
    followLabel: 'Follow us',
    socials: [
    { icon: 'instagram' as IconName, label: 'Instagram', href: 'https://www.instagram.com/scenic.trails.sl?stkn=MWt3dWE3a2djY3Fjcw%3D%3D&utm_source=qr' },
    { icon: 'facebook' as IconName, label: 'Facebook', href: 'https://www.facebook.com/share/1EWxAQE1if/?mibextid=wwXIfr' },
    { icon: 'whatsapp' as IconName, label: 'WhatsApp', href: 'https://wa.link/h02hpk' }],

    loginLabel: 'Login'
  },

  nav: [
  { label: 'Home', href: '#top' },
  { label: 'Tours', href: '#ella-rock' },
  { label: 'Destinations', href: '#ella-city' },
  { label: 'Blog', href: '#story' },
  { label: 'Contact', href: '#contact' }],

  bookNowLabel: 'Book Now',

  hero: {
    script: 'extraordinary',
    headline: 'Ella, Before The Crowds',
    subtitle:
    'Two guided trips, run by the people who grew up on these trails. Pick a sunrise, or pick a whole day.'
  },

  selector: {
    tourLabel: 'Which tour?',
    dateLabel: 'When?',
    groupLabel: 'Group size',
    submitLabel: 'Find Now',
    groups: [
    { value: 'small', label: 'Small group up to 3' },
    { value: 'large', label: 'Large group up to 15' }]

  },

  /* ---------------------------------- TOURS -------------------------------- */
  packages: [
  {
    id: 'ella-rock',
    eyebrow: 'Guided sunrise hike',
    headline: 'Ella Rock',
    subtitle:
    'An adventure worth rising for trails, viewpoints, and the moments in between.',
    description:
    'Ella Rock rewards early risers. Climb through tea country and pine forest with a local guide who knows exactly where the light hits first.',
    art: 'sunrise',
    cardPrice: 'from LKR 2,000 / person',
    features: [
    { icon: 'sunrise', label: 'Sunrise hike' },
    { icon: 'guide', label: 'Local guide' },
    { icon: 'mountain', label: 'Mountain views' },
    { icon: 'camera', label: 'Photo stops' }],

    pricing: [
    {
      id: 'small',
      name: 'Small group',
      capacity: '3 Pax',
      price: 'LKR 10,000',
      unit: 'total',
      featured: true
    },
    {
      id: 'large',
      name: 'Large group',
      capacity: '15 Pax',
      price: 'LKR 2,000',
      unit: 'per person'
    }],

    closing: 'Ella Rock is waiting.'
  },
  {
    id: 'ella-city',
    eyebrow: 'Full-day city tour',
    headline: 'Ella City Tour',
    subtitle: 'Explore Ella • Discover hidden gems • Create memories',
    description:
    'One driver, one day, and five of the best places in Ella. Build the route yourself — we handle the timing so nothing feels rushed.',
    art: 'city',
    cardPrice: 'from LKR 4,000 / stop',
    features: [
    { icon: 'car', label: 'Private transport' },
    { icon: 'guide', label: 'Local driver-guide' },
    { icon: 'clock', label: 'Full day, flexible' },
    { icon: 'camera', label: 'Photo stops' }],

    stopsHeading: 'Choose your stops',
    stopsHelper: 'Pick one, two, or all five and every stop is priced on its own.',
    stops: [
    { id: 'arch', icon: 'bridge', name: '9 Arch Bridge', price: 'LKR 4,000', amount: 4000 },
    { id: 'peak', icon: 'mountain', name: "Mini Adam's Peak", price: 'LKR 4,000', amount: 4000 },
    { id: 'caves', icon: 'cave', name: 'Ravana Caves', price: 'LKR 4,000', amount: 4000 },
    { id: 'secret', icon: 'droplets', name: 'Secret Waterfall', price: 'LKR 5,000', amount: 5000 },
    { id: 'falls', icon: 'waves', name: 'Ravana Falls', price: 'LKR 5,000', amount: 5000 }],

    closing: "Choose your destination. We'll make it a journey."
  }] as
  TourPackage[],

  /* ------------------------- DARK ACCENT / TESTIMONIAL --------------------- */
  highlight: {
    script: 'in their words',
    heading: 'Up at four, and worth every minute',
    quote:
    'We were the only ones on the rock at sunrise. Our guide knew which ledge caught the light first, stopped for tea on the way down, and never once made it feel like a tour.',
    author: 'Maria & Tom',
    origin: 'Rotterdam, two days in Ella'
  },

  /* --------------------------------- FOOTER -------------------------------- */
  footer: {
    quickLinksTitle: 'Quick links',
    quickLinks: [
    { label: 'Ella Rock hike', href: '#ella-rock' },
    { label: 'Ella city tour', href: '#ella-city' },
    { label: 'What to bring', href: '#ella-rock' },
    { label: 'Frequently asked', href: '#contact' }],

    contactTitle: 'Get in touch',
    newsletterTitle: 'Trail notes',
    newsletterBlurb: 'One short email a season conditions, weather windows, quiet dates.',
    newsletterCta: 'Subscribe',
    copyright: '© 2026 Scenic Trails, Ella. All rights reserved.'
  }
};