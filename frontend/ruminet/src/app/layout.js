import './globals.css';
import { Providers } from '@/store/Providers';
import Auth0Provider from '@/auth0/components/Auth0Provider';
import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { pageFont } from '@/config/fonts';

export const metadata = {
  title: 'Anime',
  description: 'Historietas para leer',
};

export default function RootLayout({ children }) {
  return (
    <Auth0Provider>
      <html lang='es'>
        <body className={`${pageFont.className} antialiased`}>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </Auth0Provider>
  );
}
