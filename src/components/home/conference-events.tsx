'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import React from 'react';
import Image from 'next/image';

const carouselItems = [
  {
    id: 1,
    title: 'Conference Halls',
    image: '/Banner6.jpg',
  },
  {
    id: 2,
    title: 'Outdoor Events',
    image: '/Banner5.jpg',
  },
  {
    id: 3,
    title: 'Team Building',
    image: '/Banner6.jpg',
  },
  {
    id: 4,
    title: 'Corporate Events',
    image: '/Banner3.jpg',
  },
  {
    id: 5,
    title: 'Social Gatherings',
    image: '/Welcome2.jpg',
  },
  {
    id: 6,
    title: 'Wedding Receptions',
    image: '/Welcome1.jpg',
  },
  {
    id: 7,
    title: 'Outdoor Events',
    image: '/Banner5.jpg',
  },
];

export function ConferencesEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section id='conferences' ref={ref} className='py-20 pt-32 bg-white'>
      <div className='container mx-auto px-4 mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center max-w-3xl mx-auto'
        >
          <h2 className='text-xl md:text-2xl text-gray-600 mb-2'>
            Perfect Venue for
          </h2>
          <h3 className='text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-6'>
            Business, Leisure & Events
          </h3>
          <p className='text-lg text-gray-600 mb-8'>
            We have the perfect and serene location for your next event.
          </p>
          <Button size='lg' className=' rounded-[4px] px-8'>
            VIEW ALL
          </Button>
        </motion.div>
      </div>

      <div className='relative w-full overflow-hidden'>
        <Carousel
          setApi={setApi}
          className='w-full'
          opts={{
            loop: true,
            align: 'center',
          }}
        >
          <CarouselContent className='-ml-4'>
            {carouselItems.map((item) => (
              <CarouselItem
                key={item.id}
                className='pl-4 basis-[60vw] md:basis-[60vw]'
              >
                <div className='relative w-full h-[500px] md:h-[600px]'>
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    className='w-full h-full object-cover '
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent py-8 px-8 '>
                    <div className='flex items-center justify-between'>
                      <h4 className='text-3xl md:text-4xl font-serif text-white'>
                        {item.title}
                      </h4>
                      <div className='flex items-center gap-2'>
                        <span className='text-white text-2xl font-serif'>
                          {current + 1}
                        </span>
                        <span className='text-white/60 text-lg'>/</span>
                        <span className='text-white/60 text-lg'>
                          {carouselItems.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-4 bg-white/80 hover:bg-white' />
          <CarouselNext className='right-4 bg-white/80 hover:bg-white' />
        </Carousel>

        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
          {carouselItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === current
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
