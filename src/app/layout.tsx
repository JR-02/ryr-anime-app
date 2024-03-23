import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'R&R:Anime',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={onest.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
