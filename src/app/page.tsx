import { ConferencesEvents } from '@/components/home/conference-events';
import { Gallery } from '@/components/home/gallery';
import { HealthClub } from '@/components/home/health-club';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import PartnersSection from '@/components/home/partners';
import { Rooms } from '@/components/home/rooms';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ConferencesEvents />
      <Rooms />
      <Gallery />
      <HealthClub />
      <PartnersSection />
    </div>
  );
}
