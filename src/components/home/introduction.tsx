'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import Image from 'next/image';

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className=''>
      <div className=''>
        <div className='grid lg:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center '>
          {/* Left side - 3 Images stacked */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='hidden lg:flex flex-col gap-4'
          >
            <div className='h-135 relative top-0 '>
              <Image
                src='/Welcome1.jpg'
                alt='Hotel Reception Lobby'
                fill
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>

          {/* Center - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col items-center text-center space-y-6'
          >
            <div className='space-y-2 pt-22'>
              <h2 className='text-2xl md:text-3xl  font-serif font-normal text-foreground leading-tight'>
                Best Hotel in Kisumu Kenya –
              </h2>
              <h3 className='text-5xl md:text-6xl  font-serif font-medium text-foreground leading-none'>
                Palm Oasis Resort
              </h3>
              <p className='text-xl md:text-2xl   text-foreground/90 pt-2'>
                Luxury Accommodation
              </p>
            </div>

            <p className='text-base tracking-wide text-foreground/80 leading-8 max-w-2xl font-serif'>
              Palm Oasis Resort, rated amongst the best hotels in Kisumu,
              overlooks the beautiful hills giving clients the serenity, peace
              and comfort they need. The buildings are designed in an English
              colonial style with a luxurious modern twist. The modern rooms,
              landscaping and well-manicured gardens enhance the guest
              experience.
            </p>

            <Button
              size='lg'
              className=' text-white gap-2 px-8 py-6 text-base font-normal rounded-[4px]  tracking-wider'
            >
              <Video className='w-5 h-5 fill-white' />
              DISCOVER MORE
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='hidden lg:flex relative flex-col h-full gap-4'
          >
            <div className='w-80 relative h-90 '>
              <Image
                src='/Welcome2.jpg'
                alt='Conference Facilities'
                fill
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-72 absolute -bottom-10 right-0 h-106 '>
              <Image
                src='/Welcome3.jpg'
                alt='Conference Facilities'
                fill
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
