import React from 'react';
import type { TourStop } from '../data/siteConfig';
import { Icon } from './Icon';

type TourStopRowProps = {
  stop: TourStop;
  selected: boolean;
  onToggle: (id: string) => void;
};

export function TourStopRow({ stop, selected, onToggle }: TourStopRowProps) {
  return (
    <li>
      <button
        type="button"
        aria-pressed={selected}
        onClick={() => onToggle(stop.id)}
        className="group flex w-full items-center gap-4 border-b border-charcoal/10 py-5 text-left transition-colors duration-150 ease-out hover:bg-charcoal/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
        
        <span
          className={[
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-150 ease-out',
          selected ? 'bg-gold text-charcoal' : 'bg-charcoal/[0.06] text-charcoal'].
          join(' ')}>
          
          <Icon name={selected ? 'check' : stop.icon} className="h-5 w-5" />
        </span>

        <span className="flex-1 font-serif text-lg text-charcoal sm:text-xl">{stop.name}</span>

        <span className="font-serif text-lg font-semibold text-charcoal sm:text-xl">
          {stop.price}
        </span>
      </button>
    </li>);

}