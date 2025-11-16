'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';

export function HealthClub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const facilities = [
    {
      title: 'The Oak Spa',
      image: '/massage-room.jpg',
    },
    {
      title: 'The Oak Gym',
      image: '/treadmill.jpg',
    },
  ];

  return (
    <section ref={ref} className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center max-w-4xl mx-auto mb-16'
        >
          <h2 className='text-5xl md:text-6xl font-serif font-medium text-foreground mb-6'>
            HEALTH CLUB
          </h2>
          <p className='text-lg text-foreground/80'>
            Enjoy our pre heated rooftop pool, fitness club, spacious steam
            room, sauna and spa.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className='group relative overflow-hidden h-[31.5rem] aspect-square cursor-pointer'
            >
              <Image
                src={facility.image || '/placeholder.svg'}
                alt={facility.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              {/* Dark overlay that becomes more visible on hover */}
              <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300' />

              {/* Text content */}
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                <h3 className='text-3xl md:text-4xl font-serif font-normal mb-3 transition-transform duration-300 group-hover:translate-y-[-8px]'>
                  {facility.title}
                </h3>
                <span className='text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
                  READ MORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
