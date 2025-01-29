import { Footer } from '@/components/footer/Footer';
import { Main } from '@/components/main/Main';
import { Navbar } from '@/components/navbar/Navbar';

export default function HomePage() {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen place-content-center'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
