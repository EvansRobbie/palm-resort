'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { RoomCard } from './rooms-card';
import { Button } from '@/components/ui/button';

const rooms = [
  {
    title: 'Executive Suite',
    image: '/massage-room.jpg',
  },
  {
    title: 'Superior Deluxe',
    image: '/dining-superior.jpg',
  },
  {
    title: 'Deluxe Room',
    image: '/deluxe.jpg',
  },
  {
    title: 'Superior Room',
    image: '/superior.jpg',
  },
  {
    title: 'Villa Room',
    image: '/villa.jpg',
  },
];

export function Rooms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='md:col-span-2 flex flex-col justify-center'
          >
            <h2 className='text-xl md:text-xl text-muted-foreground mb-2'>
              Explore Our
            </h2>
            <h3 className='text-4xl md:text-6xl font-serif font-medium text-foreground mb-6'>
              Rooms
            </h3>
            <p className='text-base font-serif leading-8 text-muted-foreground mb-8'>
              With 56 well appointed accommodation rooms. We ensure our service
              delivery does not only give our guests a memorable experience but
              also leave as part of the Ciala Resort Family.
            </p>
            <Button className='bg-gold hover:bg-gold/90 text-white w-fit px-8'>
              VIEW ALL
            </Button>
          </motion.div>

          <div className='md:col-span-4'>
            <RoomCard {...rooms[0]} index={0} isInView={isInView} />
          </div>

          {rooms.slice(1).map((room, index) => (
            <div key={room.title} className='md:col-span-3'>
              <RoomCard {...room} index={index + 1} isInView={isInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
