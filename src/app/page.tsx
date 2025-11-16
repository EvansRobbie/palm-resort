import { ConferencesEvents } from '@/components/home/conference-events';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <ConferencesEvents />
    </div>
  );
}
