'use client';

import Autoplay from 'embla-carousel-autoplay';
import { CardSections } from '../CardSections';
import { Card, CardContent } from '../ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';

const homeSections = [
  {
    id: 'abc',
    categoryTitle: 'Más vendidos',
    items: [
      {
        id: '1',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '5',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '6',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
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
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '5',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '6',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
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
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '2',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '3',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '4',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '5',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
      {
        id: '6',
        title: 'Espíritu de dragón',
        autor: 'Lucía Gutierrez',
        description: 'Historia de terror',
        image: '/images/comic.png',
      },
    ],
  },
];

export const Main = () => {
  return (
    <main className='p-8'>
      <Carousel
        opts={{ loop: true }}
        className='w-full h-[500px] relative overflow-hidden'
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent className='w-full h-full flex'>
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index} className='flex-shrink-0 w-full h-full'>
              <div className='p-1 h-full'>
                <Card className='h-full'>
                  <CardContent className='flex h-full items-center justify-center p-6'>
                    <Image
                    priority
                      src='/images/carrusel.png'
                      width={1500}
                      height={1500}
                      className='w-full h-auto object-contain'
                      alt='Carrusel'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden lg:inline-flex absolute top-1/2 left-4 transform -translate-y-1/2' />
        <CarouselNext className='hidden lg:inline-flex absolute top-1/2 right-9 transform -translate-y-1/2' />
      </Carousel>

      {/* Sección Hero */}
      <section className='flex gap-8 flex-wrap mt-8'>
        {homeSections.map((homeSection) => (
          <div key={homeSection.id} className='w-full'>
            <h3 className='font-bold mb-4'>{homeSection.categoryTitle}</h3>
            <div className='flex gap-6 justify-center flex-wrap'>
              {homeSection.items.map((item) => (
                <CardSections key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
