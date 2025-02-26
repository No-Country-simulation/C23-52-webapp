import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/store/Providers';
import Auth0Provider from '@/auth0/components/Auth0Provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Anime',
  description: 'Historietas para leer',
};

export default function RootLayout({ children }) {
  return (
    <Auth0Provider>
      <html lang='es'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </Auth0Provider>
  );
}
