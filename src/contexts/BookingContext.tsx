import React, { createContext, useContext, useMemo, useState } from 'react';
import { siteConfig } from '../data/siteConfig';

type BookingSelection = {
  tourId: string;
  setTourId: (id: string) => void;
  date: string;
  setDate: (date: string) => void;
  group: string;
  setGroup: (group: string) => void;
  /** Date line used in every booking email. */
  dateLine: string;
};

const BookingContext = createContext<BookingSelection | null>(null);

export function BookingProvider({ children }: {children: React.ReactNode;}) {
  const [tourId, setTourId] = useState(siteConfig.packages[0].id);
  const [date, setDate] = useState('');
  const [group, setGroup] = useState(siteConfig.selector.groups[0].value);

  const value = useMemo<BookingSelection>(
    () => ({
      tourId,
      setTourId,
      date,
      setDate,
      group,
      setGroup,
      dateLine: date ? date : '___'
    }),
    [tourId, date, group]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingSelection {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used inside a BookingProvider');
  }
  return context;
}

/** Builds an encoded mailto: link to the owner for a booking request. */
export function buildBookingMailto(subject: string, bodyLines: string[]): string {
  const body = [...bodyLines, '', 'Could you please confirm availability for this booking?'].join(
    '\n'
  );
  return `mailto:${siteConfig.brand.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}