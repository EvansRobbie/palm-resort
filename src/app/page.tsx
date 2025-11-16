import { Awards } from '@/components/home/awards';
import { ConferencesEvents } from '@/components/home/conference-events';
import { HealthClub } from '@/components/home/health-club';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ConferencesEvents />
      <HealthClub />
      <Awards />
    </div>
  );
}
