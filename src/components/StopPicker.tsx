import React, { useState } from 'react';
import type { TourStop } from '../data/siteConfig';
import { TourStopRow } from './TourStopRow';
import { buildBookingMailto, useBooking } from '../contexts/BookingContext';

type StopPickerProps = {
  heading: string;
  helper: string;
  stops: TourStop[];
  /** Tour this picker belongs to — used in the booking email. */
  tourName: string;
};

const formatLkr = (amount: number) => `LKR ${amount.toLocaleString('en-US')}`;

export function StopPicker({ heading, helper, stops, tourName }: StopPickerProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const { dateLine } = useBooking();

  const toggle = (id: string) =>
  setSelected((current) =>
  current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  );

  const chosenStops = stops.filter((stop) => selected.includes(stop.id));
  const total = chosenStops.reduce((sum, stop) => sum + stop.amount, 0);

  const mailto = buildBookingMailto(`Booking request — ${tourName}`, [
  `Tour: ${tourName}`,
  `Preferred date: ${dateLine}`,
  'Selected stops:',
  ...(chosenStops.length > 0 ?
  chosenStops.map((stop) => `- ${stop.name} — ${stop.price}`) :
  ['- (none selected yet)']),
  `Total: ${formatLkr(total)}`]
  );

  return (
    <div>
      <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-3xl">{heading}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-body">{helper}</p>

      <ul className="mt-8 border-t border-charcoal/10">
        {stops.map((stop) =>
        <TourStopRow
          key={stop.id}
          stop={stop}
          selected={selected.includes(stop.id)}
          onToggle={toggle} />

        )}
      </ul>

      <div
        aria-live="polite"
        className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
        
        <p className="text-[11px] font-semibold uppercase tracking-nav text-body">
          {selected.length === 0 ?
          'No stops selected yet' :
          `${selected.length} ${selected.length === 1 ? 'stop' : 'stops'} selected`}
        </p>
        <p className="font-serif text-3xl font-bold text-charcoal">{formatLkr(total)}</p>
      </div>

      <a
        href={mailto}
        className="mt-6 inline-block bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-nav text-charcoal transition-colors duration-150 ease-out hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal">
        
        Book this day
      </a>
    </div>);

}