import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeftLong,
  FaFacebook,
  FaInstagram,
  FaPlus,
  FaRegHeart,
} from 'react-icons/fa6';

export default function ChaptersPage() {
  return (
    <section className='w-full flex flex-col justify-center items-center my-20'>
      <div className='flex flex-col items-center gap-80 p-4'>
        <Button variant='primary'>
          <FaArrowLeftLong />
          Regresar
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
      <div className='py-24 p-4'>
        <div className='flex flex-col gap-11 items-center'>
          <h2 className='font-bold underline'>Capítulo 1</h2>
          <h3 className='text-[#59CAD6] text-xl lg:text-4xl'>
            El Artefacto Perdido
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
        <Button variant='primary' className='float-end'>
          Regresar
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
