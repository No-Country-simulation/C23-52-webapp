import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPlus, FaRegHeart } from 'react-icons/fa6';

export const Chapter = ({ comicId, chapter }) => {
  console.log(chapter);

  return (
    <>
      <div className='py-24 p-4'>
        <div className='flex flex-col gap-11 items-center'>
          <h2 className='font-bold underline'>Capítulo 1</h2>
          <h3 className='text-[#59CAD6] text-xl lg:text-4xl'>
            {chapter.chapter2.title}
          </h3>
          <Image
            src='/images/chapters/1.png'
            width={901}
            height={1694}
            alt='Capitulo 1'
            className='object-cover w-full'
          />
          <Image
            src='/images/chapters/2.png'
            width={901}
            height={1694}
            alt='Capitulo 1'
            className='object-cover w-full'
          />
        </div>
        <h5 className='font-semibold text-end w-full py-11'>Continuará...</h5>
        <Button asChild variant='primary' className='float-end'>
          <Link href={`/comic/${comicId}`}>Regresar</Link>
        </Button>
      </div>
      <div className='flex flex-col lg:flex-row gap-32 w-full lg:pl-12 p-4 lg:py-24'>
        <Image
          src='/images/creators-images/men-writing.png'
          width={188}
          height={259}
          alt='men-writing'
          className='object-cover w-full lg:w-48'
        />
        <div className='font-bold flex flex-col gap-8'>
          <div className='flex flex-col gap-8'>
            <h5 className='lg:text-2xl'>Autora y dibujante: Pablo Caballero</h5>
            <div className='flex items-center gap-8'>
              <span className='rounded-full py-2 lg:py-3 px-1 lg:text-2xl bg-[#E10D0D] text-white'>
                +EP
              </span>
              <span>Todos los Martes</span>
            </div>
          </div>
          <span>¡Muestra tu apoyo a los creadores de esta serie!</span>
          <div className='flex gap-6'>
            <Button variant='primary' className='rounded-3xl'>
              <FaRegHeart />
              17,501
            </Button>
            <Button variant='primary' className='rounded-3xl'>
              <FaPlus />
              Seguir
            </Button>
          </div>

          <span>Comparte con tus amigos</span>
          <div className='flex gap-9 items-center justify-center w-full'>
            <FaFacebook size={27} />
            <FaInstagram size={27} />
          </div>
        </div>
      </div>
    </>
  );
};
