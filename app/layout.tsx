import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FloatingEndCall from '@/components/FloatingEndCall';
import ContactModal from '@/components/ContactModal';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const undefinedMedium = localFont({
  src: [
    { path: '../public/fonts/undefined-medium.woff2' },
    { path: '../public/fonts/undefined-medium.woff' },
  ],
  variable: '--font-undefined',
});

export const metadata: Metadata = {
  title: 'Wads AI — AI Voice Agents for Small Businesses',
  description: 'Wads AI builds custom AI voice agents for small businesses. Answer every call, follow up with every lead, and request reviews automatically. Live in 1 week.',
  metadataBase: new URL('https://wads.ai'),
  alternates: {
    canonical: 'https://wads.ai',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable} ${undefinedMedium.variable}`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingEndCall />
        <ContactModal />
      </body>
    </html>
  );
}
