'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/gallery.jpeg',
    alt: 'Hotel Exterior with Gardens',
  },
  {
    src: '/gallery-2.jpeg',
    alt: 'Dining Terrace at Sunset',
  },
  {
    src: '/gallery-3.jpeg',
    alt: 'Resort Swimming Pool',
  },
  {
    src: '/gallery-4.jpeg',
    alt: 'Spa Treatment',
  },
  {
    src: '/gallery-5.jpeg',
    alt: 'Restaurant Interior',
  },
  {
    src: '/gallery-6.jpeg',
    alt: 'Pool Overlooking Lake',
  },
];

export function Gallery() {
  return (
    <section id='gallery' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12 max-w-2xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-6xl font-serif font-medium mb-4 text-foreground'
          >
            Small team. Big hearts.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-muted-foreground font-serif text-lg'
          >
            Our focus is always on finding the best people to work with. Our bar
            is high, And you look ready to take on the challenge.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px] md:h-[600px]'>
          {/* Column 1 - Tall Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='md:col-span-1 h-full'
          >
            <div className='relative h-full w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
              <Image
                src={galleryImages[0].src || '/placeholder.svg'}
                alt={galleryImages[0].alt}
                fill
                className='object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
          </motion.div>

          {/* Column 2 - Stacked Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='md:col-span-1 flex flex-col gap-4 h-full'
          >
            <div className='relative h-[55%] w-full overflow-hidden rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300'>
              <Image
                src={galleryImages[1].src || '/placeholder.svg'}
                alt={galleryImages[1].alt}
                fill
                className='object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='relative h-[45%] w-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
              <Image
                src={galleryImages[2].src || '/placeholder.svg'}
                alt={galleryImages[2].alt}
                fill
                className='object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
          </motion.div>

          {/* Column 3 & 4 - Complex Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='md:col-span-2 flex flex-col gap-4 h-full'
          >
            {/* Top Row - 2 Images */}
            <div className='flex gap-4 h-[40%]'>
              <div className='relative w-1/2 h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <Image
                  src={galleryImages[3].src || '/placeholder.svg'}
                  alt={galleryImages[3].alt}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>
              <div className='relative w-1/2 h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                <Image
                  src={galleryImages[4].src || '/placeholder.svg'}
                  alt={galleryImages[4].alt}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>
            </div>
            {/* Bottom Row - 1 Wide Image */}
            <div className='relative h-[60%] w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
              <Image
                src={galleryImages[5].src || '/placeholder.svg'}
                alt={galleryImages[5].alt}
                fill
                className='object-cover hover:scale-105 transition-transform duration-500'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
