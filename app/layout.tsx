import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Document ai',
  description: 'Project by nawfal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light'>
      <body
        className={cn(
          'min-h-screen font-sans antialiased grainy',
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
