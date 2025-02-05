import Image from 'next/image';

import { Apple, Play } from 'lucide-react';

import { SplideSlider } from './splide-slider/SplideSlider';
import MemberShipCardCreators from '@/app/creators/components/MembershipCardCreators';
import { Button } from '../ui/button';
import { Category } from './category/Category';
import { carouselImages } from './mocks/carouselImages';
import { homeSections } from './mocks/homeSections';
import Link from 'next/link';

export const Main = () => {
  return (
    <main>
      <section className='bg-black'>
        <SplideSlider carouselImages={carouselImages} />
        <div className='flex gap-8 flex-col justify-center items-center p-12 pt-16'>
          <h2 className='lg:text-[32px] font-bold text-white text-center'>
            El espacio donde las historias cobran vida
          </h2>
          <p className='lg:text-xl text-white text-center'>
            Ruminet es una plataforma inclusiva diseñada para creadores de
            historietas, mangas y cómics. Aquí puedes mostrar tu talento,
            conectar con otros artistas y monetizar tus creaciones, todo en un
            entorno accesible para todos
          </p>
          <Button variant='primary'>Únete ahora</Button>
        </div>
      </section>
      {/* Sección Hero */}
      <Category homeSections={homeSections} />

      {/* Sección Creador */}
      <section className='w-full xl:h-[650px] sm:grid-cols-2 grid xl:grid-cols-2 pt-16 px-4 overflow-hidden container place-content-center m-auto'>
        <Image
          alt='creador'
          src='/images/creador.png'
          width={900}
          height={600}
          className='w-full object-contain lg:h-[559px]'
        />
        <div className='flex flex-col items-center lg:justify-evenly gap-8 px-6 lg:px-0 sm:justify-center'>
          <div className='flex flex-col justify-start items-center gap-8'>
            <h4 className='text-[#E10D0D] font-bold lg:text-4xl text-center mt-8 sm:mt-0'>
              ¡Bienvenido a un espacio donde tu creatividad no tiene límites!
            </h4>
            <p className='font-bold lg:text-xl'>
              En nuestra plataforma, los historietistas tienen un espacio único
              para dar vida a sus historias. <br />
              Comparte tus obras, conecta con una comunidad apasionada y haz
              crecer tu carrera como creador. Ya seas un profesional consolidado
              o alguien que da sus primeros pasos, aquí encontrarás el lugar
              ideal para destacar.
            </p>
          </div>
          <Button asChild variant='primary' className='px-20'>
            <Link href='/creators'>Creadores</Link>
          </Button>
        </div>
      </section>
      <section className='flex flex-col gap-5 pt-16 px-4'>
        <h2 className='font-bold text-xl'>Membresías</h2>
        <div className='flex justify-center'>
          <MemberShipCardCreators />
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-6 my-5 lg:gap-12 lg:my-10 px-4'>
        <h5 className='font-bold'>
          Donde los cómics nacen y las historias cobran vida Creadores y
          lectores, ¡Ruminet es su lugar!
        </h5>
        <div className='flex gap-8'>
          <Button>
            <Apple />
            App Store
          </Button>
          <Button>
            <Play />
            Google Play
          </Button>
        </div>
        <p className='font-bold'>
          Descarga la app hoy y sé parte de esta comunidad única
        </p>
      </section>
    </main>
  );
};
