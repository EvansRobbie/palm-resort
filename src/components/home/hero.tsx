'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: '/Banner5.jpg',
    alt: 'Guests enjoying wine with scenic mountain views',
  },
  {
    image: '/Banner6.jpg',
    alt: 'Resort pool with lake views',
  },
  {
    image: '/Banner3.jpg',
    alt: 'Hotel exterior and landscaped gardens',
  },
  {
    image: '/Banner6.jpg',
    alt: 'Dining terrace at sunset',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className='relative min-h-screen flex flex-col'>
      <div className='relative flex-1 h-full'>
        <div className='absolute inset-0 overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
              className='w-full h-full object-cover'
            />
          </AnimatePresence>
          <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40' />
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all'
          aria-label='Previous slide'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all'
          aria-label='Next slide'
        >
          <ChevronRight className='w-6 h-6' />
        </button>

        <div className='absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2'>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className='relative container-fluid h-screen flex flex-col justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='max-w-4xl'
          >
            <h1 className='text-4xl md:text-6xl  font-serif font-semibold leading-snug text-primary-foreground mb-6 text-balance'>
              Absolute Serenity,
              <br />
              Peace & Comfort
            </h1>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=' py-3 bg-gold hover:bg-gold/90 text-white font-medium rounded-sm font-serif transition-colors'
            >
              Know More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
