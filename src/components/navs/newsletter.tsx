'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { DATA } from '@/_data/data';

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      ref={ref}
      className='py-20 bg-[#2a3a2c] text-white relative overflow-hidden'
    >
      {/* Background overlay */}
      <div className='absolute inset-0 opacity-20'>
        <div className="absolute inset-0 bg-[url('/resort-garden-night.jpg')] bg-cover bg-center" />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
          {/* Left side - Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div>
              <h2 className='text-xl text-white/80 mb-2'>Subscribe to Our</h2>
              <h3 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
                Newsletter
              </h3>
              <p className='text-white/80 mb-8'>
                To receive latest news & offers Share your email ID below
              </p>
            </div>

            <div className='space-y-6'>
              <div>
                <label htmlFor='email' className='block text-sm mb-2'>
                  Enter Your Email ID
                </label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-white/10 border-white/20 text-white placeholder:text-white/50'
                  placeholder='your@email.com'
                />
              </div>

              <div className='flex items-start gap-3'>
                <Checkbox
                  id='terms'
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className='mt-1'
                />
                <label
                  htmlFor='terms'
                  className='text-sm text-white/80 leading-relaxed'
                >
                  By entering your email address, you agree to receive emails
                  from Ciala Resort (including but not limited to newsletters,
                  promotional offers and announcements). Each email you receive
                  from us provides a simple one-click method to unsubscribe from
                  our mailing list.
                </label>
              </div>

              <Button
                size='lg'
                className='w-full md:w-auto bg-gold hover:bg-gold/90 text-white'
              >
                SUBSCRIBE NOW
              </Button>
            </div>
          </motion.div>

          {/* Right side - Logo and links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-center'
          >
            <Image
              src={DATA.logo}
              alt={DATA.title}
              width={200}
              height={200}
              className='mx-auto mb-8'
            />
            <h4 className='text-3xl font-serif font-bold mb-8'>{DATA.title}</h4>
            <p className='text-sm text-white/60 mb-2'>NAIROBI</p>
          </motion.div>
        </div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16 pt-8 border-t border-white/20'
        >
          <nav className='flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm'>
            <Link href='#' className='hover:text-gold transition-colors'>
              HOME
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              ROOMS
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              DINING
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              CONFERENCES & EVENTS
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              WEDDINGS
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              HEALTH CLUB
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              PACKAGES
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              TOURS & TRAVEL
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              ACTIVITIES
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              GALLERY
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              CSR
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              CAREERS
            </Link>
            <Link href='#' className='hover:text-gold transition-colors'>
              CONTACT US
            </Link>
          </nav>

          {/* Social Media Icons and Legal Links */}
          <div className='flex flex-col md:flex-row items-center justify-between gap-6 mb-6'>
            {/* Social Media Icons */}
            <div className='flex items-center gap-4'>
              <span className='text-sm text-white/60'>Follow Us:</span>
              <div className='flex gap-3'>
                <Link
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors'
                  aria-label='Facebook'
                >
                  <Facebook className='w-5 h-5' />
                </Link>
                <Link
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors'
                  aria-label='Instagram'
                >
                  <Instagram className='w-5 h-5' />
                </Link>
                <Link
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors'
                  aria-label='Twitter'
                >
                  <Twitter className='w-5 h-5' />
                </Link>
                <Link
                  href='https://youtube.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors'
                  aria-label='YouTube'
                >
                  <Youtube className='w-5 h-5' />
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className='flex flex-wrap items-center justify-center gap-4 text-sm'>
              <Link
                href='/privacy-policy'
                className='text-white/60 hover:text-gold transition-colors'
              >
                Privacy Policy
              </Link>
              <span className='text-white/40'>|</span>
              <Link
                href='/terms-conditions'
                className='text-white/60 hover:text-gold transition-colors'
              >
                Terms & Conditions
              </Link>
              <span className='text-white/40'>|</span>
              <Link
                href='/cookies-policy'
                className='text-white/60 hover:text-gold transition-colors'
              >
                Cookies Policy
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className='text-center text-sm text-white/60'>
            {DATA.title} – Kisumu © 2025 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}
