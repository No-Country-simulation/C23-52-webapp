'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

import '@splidejs/react-splide/css';
import style from './SplideSlider.module.css';

export const SplideSlider = ({ carouselImages }) => {
  return (
    <Splide
      options={{
        type: 'loop',
        drag: true,
        interval: 25000,
        perPage: 1,
        perMove: 1,
        loop: true,
        autoplay: true,
        height: '60vh',
        arrows: false,
        cover: true,
        isNavigation: true,
        classes: {
          pagination: `splide__pagination ${style.pagination__dots}`,
          page: `splide__pagination__page ${style.dots}`,
        },
        breakpoints: {
          640: { height: '20vh' },
        },
      }}
      aria-label='Carrusel de Imágenes'
    >
      {carouselImages.map((carouselImage) => (
        <SplideSlide key={carouselImage.id}>
          <Image
            src={carouselImage.img}
            height={1500}
            width={1500}
            alt='Carrusel de Imágenes'
            className='w-full'
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
