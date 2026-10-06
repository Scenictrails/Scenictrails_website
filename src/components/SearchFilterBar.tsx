import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Icon, type IconName } from './Icon';
import { useBooking } from '../contexts/BookingContext';

const fieldClasses =
'w-full min-w-0 cursor-pointer appearance-none bg-transparent pr-5 text-sm font-medium text-charcoal outline-none focus:outline-none';

type FieldProps = {
  icon: IconName;
  label: string;
  className?: string;
  dropdown?: boolean;
  children: React.ReactNode;
};

function Field({ icon, label, className = '', dropdown = false, children }: FieldProps) {
  return (
    <label className={`flex min-w-0 flex-1 items-center gap-3 px-4 py-3.5 transition-colors duration-150 ease-out hover:bg-cream/50 focus-within:bg-cream/70 ${className}`}>
      <Icon name={icon} className="h-4 w-4 shrink-0 text-gold-dark" />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-nav text-body/70">
          {label}
        </span>
        <span className="relative block min-w-0">
          {children}
          {dropdown && <ChevronDownIcon className="pointer-events-none absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-body/60" aria-hidden="true" />}
        </span>
      </span>
    </label>);

}

/**
 * Standalone trip planner section: pick a tour, date and group size, then
 * jump straight to that tour's options.
 */
export function SearchFilterBar() {
  const { selector, packages } = siteConfig;
  const { tourId, setTourId, date, setDate, group, setGroup } = useBooking();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.
    getElementById(`${tourId}-options`)?.
    scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="planner-heading" className="border-b border-charcoal/10 bg-white">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="shrink-0">
          <h2 id="planner-heading" className="font-serif text-2xl font-bold text-charcoal">
            Plan your trip
          </h2>
          <p className="mt-1 text-sm text-body">Pick a tour and a date, we’ll take you to the options.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Find a tour"
          className="flex flex-1 flex-col overflow-hidden rounded-lg border border-charcoal/12 bg-white shadow-sm md:flex-row md:items-stretch md:divide-x md:divide-charcoal/10">
          
          <Field icon="pin" label={selector.tourLabel} className="md:flex-[1.05]" dropdown>
            <select
              value={tourId}
              onChange={(event) => setTourId(event.target.value)}
              className={`${fieldClasses} focus-visible:ring-1 focus-visible:ring-gold-dark`}>
              
              {packages.map((pkg) =>
              <option key={pkg.id} value={pkg.id}>
                  {pkg.headline}
                </option>
              )}
            </select>
          </Field>

          <Field icon="calendar" label={selector.dateLabel} className="md:flex-[0.9]">
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={`${fieldClasses} pr-0 focus-visible:ring-1 focus-visible:ring-gold-dark`} />
            
          </Field>

          <Field icon="users" label={selector.groupLabel} className="md:flex-[1.35]" dropdown>
            <select
              value={group}
              onChange={(event) => setGroup(event.target.value)}
              className={`${fieldClasses} focus-visible:ring-1 focus-visible:ring-gold-dark`}>
              
              {selector.groups.map((option) =>
              <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              )}
            </select>
          </Field>

          <button
            type="submit"
            className="shrink-0 bg-gold px-7 py-4 text-[11px] font-semibold uppercase tracking-nav text-charcoal transition-colors duration-150 ease-out hover:bg-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-charcoal md:px-6">
            
            {selector.submitLabel}
          </button>
        </form>
      </div>
    </section>);

}