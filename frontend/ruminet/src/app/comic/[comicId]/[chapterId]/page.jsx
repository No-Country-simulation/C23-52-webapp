'use client';

import { Chapter } from '@/components/comic/chapter/Chapter';
import { comics } from '@/components/comic/mocks/comics';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function ChaptersPage() {
  const { comicId, chapterId } = useParams();

  const comic = comics.find((comic) => comic.name === comicId);

  return (
    <section className='w-full flex flex-col justify-center items-center my-20'>
      <div className='flex flex-col items-center gap-80 p-4'>
        <Button asChild variant='primary' className='px-16 py-6'>
          <Link href={`/comic/${comicId}`}>
            <FaArrowLeftLong />
            Regresar
          </Link>
        </Button>
        <div className='flex flex-col justify-center items-center gap-20'>
          <Image src='/images/logo.png' width={125} height={125} alt='logo' />
          <h4 className='font-semibold flex flex-col lg:text-2xl max-w-[592px]'>
            <span className='text-red-500'>
              Ruminet está comprometido con la protección de la propiedad
              intelectual de sus creadores.
            </span>
            La distribución o compartición de este material sin la debida
            autorización podría derivar en acciones legales.
          </h4>
        </div>
      </div>

      {/* Chapters */}
      <Chapter comicId={comicId} comic={comic} chapterId={chapterId} />

      <div className='bg-black w-full flex flex-col justify-center items-center gap-2 lg:gap-9 pb-12 my-12'>
        <h5 className='lg:text-2xl text-white p-12'>
          Accede a más historias exclusivas con nuestras opciones de suscripción
          Básico - Estándar - Premium
        </h5>
        <Button variant='primary'>Suscribirse</Button>
      </div>
      <div className='lg:text-2xl w-full p-4 lg:pl-12'>
        <h4 className='pb-9'>
          ¡Tu opinión importa!
          <br />
          Deja un comentario abajo y cuéntale al creador qué te pareció este
          capítulo.
        </h4>
        <h5 className='font-bold'>Comentar</h5>
        <textarea
          name='comments'
          id='comments'
          className='lg:w-[690px] w-full h-36 lg:h-48 border border-black p-4'
          placeholder='Deja un comentario'
        ></textarea>
      </div>
      <div className='w-full p-4 lg:pl-12 my-8 flex flex-col gap-6'>
        <div>
          <h5>Ver que opinan nuestros lectores</h5>
          <hr className='border border-black lg:mr-8' />
        </div>
        <div className='flex gap-3'>
          <Link className='underline' href='/'>
            Principales
          </Link>
          <Link className='text-[#8E8E8E]' href='/'>
            Recientes
          </Link>
        </div>
      </div>
    </section>
  );
}
