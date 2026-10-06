import React from 'react';
import type { PricingOption } from '../data/siteConfig';
import { buildBookingMailto, useBooking } from '../contexts/BookingContext';

type PricingCardProps = {
  option: PricingOption;
  /** Tour this option belongs to — used in the booking email. */
  tourName: string;
  /** Tour id, so the card knows whether the hero form pre-selected it. */
  tourId: string;
};

export function PricingCard({ option, tourName, tourId }: PricingCardProps) {
  const featured = Boolean(option.featured);
  const { tourId: selectedTourId, group, dateLine } = useBooking();
  const preselected = selectedTourId === tourId && group === option.id;

  const mailto = buildBookingMailto(`Booking request — ${tourName} (${option.name})`, [
  `Tour: ${tourName}`,
  `Preferred date: ${dateLine}`,
  `Option: ${option.name} (${option.capacity}) — ${option.price} ${option.unit}`]
  );

  return (
    <article
      className={[
      'flex h-full flex-col rounded-lg p-8 transition-shadow duration-150 ease-out',
      featured ?
      'bg-charcoal text-white' :
      'border border-charcoal/12 bg-white text-charcoal',
      preselected ? 'ring-2 ring-gold ring-offset-2 ring-offset-cream' : ''].
      join(' ')}>
      
      <div className="flex items-start justify-between gap-3">
        <h4
          className={[
          'text-[11px] font-semibold uppercase tracking-nav',
          featured ? 'text-gold' : 'text-body'].
          join(' ')}>
          
          {option.name}
        </h4>
        {preselected &&
        <span
          className={[
          'text-[10px] font-semibold uppercase tracking-nav',
          featured ? 'text-white/60' : 'text-gold-dark'].
          join(' ')}>
          
            Your pick
          </span>
        }
      </div>

      <p
        className={[
        'mt-1 text-sm',
        featured ? 'text-white/65' : 'text-body'].
        join(' ')}>
        
        {option.capacity}
      </p>

      <p className="mt-6 font-serif text-4xl font-bold leading-none">{option.price}</p>
      <p
        className={[
        'mt-2 text-xs uppercase tracking-[0.14em]',
        featured ? 'text-white/55' : 'text-body/80'].
        join(' ')}>
        
        {option.unit}
      </p>

      <a
        href={mailto}
        className={[
        'mt-auto pt-8 text-[11px] font-semibold uppercase tracking-nav transition-colors duration-150 ease-out',
        featured ? 'text-gold hover:text-white' : 'text-charcoal hover:text-gold'].
        join(' ')}>
        
        Reserve this option
      </a>
    </article>);

}