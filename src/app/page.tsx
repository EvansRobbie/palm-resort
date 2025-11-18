import { ConferencesEvents } from '@/components/home/conference-events';
import { HealthClub } from '@/components/home/health-club';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import PartnersSection from '@/components/home/partners';
import { Rooms } from '@/components/home/rooms';
import { Wedding } from '@/components/home/wedding-section';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ConferencesEvents />
      <Rooms />
      <Wedding />
      <HealthClub />
      <PartnersSection />
    </div>
  );
}
