import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navs/navbar';
import { Newsletter } from '@/components/navs/newsletter';
import { DATA } from '@/_data/data';

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
  title: `${DATA.title} - Best Hotel in Garissa Kenya`,
  description: DATA.description,
  appleWebApp: {
    title: 'Palm Oasis Resort',
  },
  keywords: [
    'Palm Oasis Resort',
    'Best Hotel in Garissa',
    'Luxury Accommodation Garissa',
    'Garissa Hotels',
    'Resorts in Garissa Kenya',
    'Hotel with Conference Facilities Garissa',
    'Wedding Venues Garissa',
    'Health Club Garissa',
    'Fine Dining Garissa',
    'Affordable Luxury Hotels Kenya',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: DATA.title,
    description: DATA.description,
    images: [
      {
        url: DATA.logo,
        width: 800,
        height: 600,
        alt: DATA.title,
      },
    ],
    siteName: DATA.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: DATA.title,
    images: [DATA.logo],
    description: DATA.description,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
