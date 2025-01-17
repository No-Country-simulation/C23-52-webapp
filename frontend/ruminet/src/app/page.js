import { Footer } from '@/components/footer/Footer';
import { Main } from '@/components/main/Main';
import { Navbar } from '@/components/navbar/Navbar';

export default function HomePage() {
  return (
    <div className='grid place-content-center'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
