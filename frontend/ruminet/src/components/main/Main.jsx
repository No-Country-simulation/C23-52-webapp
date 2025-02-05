'use client';

import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import '@splidejs/react-splide/css/sea-green';

import MemberShipCardCreators from '@/app/creators/components/MembershipCardCreators';
import { Apple, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { CardSections } from './components/CardSections';

const homeSections = [
  {
    id: 'abc',
    categoryTitle: 'Más populares',
    items: [
      {
        id: '1',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
 
    ],
  },
  {
    id: 'edf',
    categoryTitle: 'Novedades',
    items: [
      {
        id: '1',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },

    ],
  },
  {
    id: '1ads',
    categoryTitle: 'Exclusivos Ruminet',
    items: [
      {
        id: '1',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },

    ],
  },
  {
    id: 'efd',
    categoryTitle: 'Artistas destacados',
    items: [
      {
        id: '1',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        estreno: 'Lun-Mie',
        image: '/images/comic.png',
      }
    ],
  },
];

const carouselImages = [
  { id: '1', img: '/images/carrusel.png' },
  { id: '2', img: '/images/lumi1.png' },
  { id: '3', img: '/images/luni2.png' },
];

export const Main = () => {
  return (
    <main>
      <section className='bg-black'>
        <Splide
          options={{
            rewind: true,
            autoplay: true,
          }}
          aria-label='My Favorite Images'
        >
          {carouselImages.map((carouselImage) => (
            <SplideSlide key={carouselImage.id}>
              <Image
                src={carouselImage.img}
                height={150}
                width={150}
                alt='Image 1'
                className='w-full h-48 lg:h-[510px] object-contain'
              />
            </SplideSlide>
          ))}
        </Splide>
        <div className='flex gap-8 flex-col justify-center items-center pb-12 px-12'>
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
      <section className='flex gap-8 flex-wrap mt-8 px-4'>
        {homeSections.map((homeSection) => (
          <div key={homeSection.id} className='w-full flex flex-col gap-8'>
            <div className='flex justify-between items-center'>
              <h3 className='font-bold lg:text-xl'>
                {homeSection.categoryTitle}
              </h3>
              <Button variant='primary'>Ver &#43;</Button>
            </div>
            <div className='flex gap-4 lg:gap-6 justify-start flex-wrap'>
              {homeSection.items.map((item) => (
                <CardSections key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className='flex flex-col sm:flex-row gap-12 pt-16 px-4'>
        <Image
          alt='crear'
          src='/images/creador.png'
          width={900}
          height={600}
          className='w-full h-auto object-cover lg:w-[759px]'
        />
        <div className='flex flex-col items-center justify-around gap-8'>
          <div className='flex flex-col justify-start items-center lg:px-28 gap-8'>
            <h4 className='text-[#E10D0D] font-bold lg:text-4xl'>
              ¡Bienvenido a un espacio donde tu creatividad no tiene límites!
            </h4>
            <p className='font-bold lg:text-2xl'>
              En nuestra plataforma, los historietistas tienen un espacio único
              para dar vida a sus historias. <br />
              Comparte tus obras, conecta con una comunidad apasionada y haz
              crecer tu carrera como creador. Ya seas un profesional consolidado
              o alguien que da sus primeros pasos, aquí encontrarás el lugar
              ideal para destacar.
            </p>
          </div>
          <Button variant='primary'>Creadores</Button>
        </div>
      </section>
      <section className='flex flex-col gap-5 pt-16 px-4'>
        <h2 className='font-bold text-xl'>Membresías Mensuales</h2>
        <div className='flex justify-center'>
          <MemberShipCardCreators/>
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
