import React from 'react';
import { siteConfig } from './data/siteConfig';
import { BookingProvider } from './contexts/BookingContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilterBar } from './components/SearchFilterBar';
import { PackageSection } from './components/PackageSection';
import { PricingCard } from './components/PricingCard';
import { StopPicker } from './components/StopPicker';
import { HighlightSection } from './components/HighlightSection';
import { Footer } from './components/Footer';

export function App() {
  const [ellaRock, ellaCity] = siteConfig.packages;

  return (
    <BookingProvider>
      <div id="top" className="w-full bg-white">
        <TopBar />
        <Header />

        <main>
          <Hero />
          <SearchFilterBar />

          <PackageSection pkg={ellaRock} tone="cream">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl font-bold text-charcoal sm:text-3xl">
                  Two ways to climb
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-body">
                  Same trail, same guide — the price just follows your group size.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {ellaRock.pricing?.map((option) =>
                <PricingCard
                  key={option.id}
                  option={option}
                  tourId={ellaRock.id}
                  tourName={ellaRock.headline} />

                )}
              </div>
            </div>
          </PackageSection>

          <HighlightSection />

          <PackageSection pkg={ellaCity} tone="white" reverse>
            <div className="mx-auto max-w-2xl">
              <StopPicker
                heading={ellaCity.stopsHeading ?? ''}
                helper={ellaCity.stopsHelper ?? ''}
                stops={ellaCity.stops ?? []}
                tourName={ellaCity.headline} />
              
            </div>
          </PackageSection>
        </main>

        <Footer />
      </div>
    </BookingProvider>);

}