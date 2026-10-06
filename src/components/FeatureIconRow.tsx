import React from 'react';
import type { Feature } from '../data/siteConfig';
import { Icon } from './Icon';

type FeatureIconRowProps = {
  features: Feature[];
};

export function FeatureIconRow({ features }: FeatureIconRowProps) {
  return (
    <ul className="grid grid-cols-2 border-y border-charcoal/10 sm:grid-cols-4">
      {features.map((feature) =>
      <li
        key={feature.label}
        className="flex items-center gap-3 border-charcoal/10 px-2 py-6 sm:justify-center sm:border-l sm:first:border-l-0">
        
          <Icon name={feature.icon} className="h-6 w-6 text-gold" strokeWidth={1.2} />
          <span className="text-[11px] font-semibold uppercase tracking-nav text-charcoal">
            {feature.label}
          </span>
        </li>
      )}
    </ul>);

}