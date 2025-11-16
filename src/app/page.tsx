import { Awards } from '@/components/home/awards';
import { ConferencesEvents } from '@/components/home/conference-events';
import { HealthClub } from '@/components/home/health-club';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import { Rooms } from '@/components/home/rooms';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ConferencesEvents />
      <Rooms />
      <HealthClub />
      <Awards />
    </div>
  );
}
