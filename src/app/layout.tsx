import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navs/navbar';
import { Newsletter } from '@/components/navs/newsletter';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['sans-serif'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  fallback: ['monospace'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
  fallback: ['serif'],
});

export const metadata: Metadata = {
  title: 'Palm Oasis Resort - Best Hotel in Garissa Kenya',
  description:
    'Experience luxury and comfort at Palm Oasis Resort, the best hotel in Garissa, Kenya. Enjoy top-notch amenities, exquisite rooms, and exceptional service for an unforgettable stay.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='apple-mobile-web-app-title' content='Palm Oasis Resort' />
      </head>
      <body
        className={`${geistSans.className} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <main className='min-h-screen overflow-x-clip'>{children}</main>
        <Newsletter />
      </body>
    </html>
  );
}
