import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { RiCloseLargeFill } from 'react-icons/ri';

export default function AccessibilityPage() {
  return (
    <div className='bg-black text-white mt-2'>
      <h1 className='p-4 font-bold text-center 2xl:p-16 2xl:text-4xl'>
        Ofrecemos varias herramientas de accesibilidad para mejorar tu
        experiencia.
      </h1>
      <div className='relative flex w-full justify-between items-center p-4 2xl:px-4 2xl:py-6 bg-[#D9D9D9]'>
        <h2 className='text-black font-bold 2xl:text-2xl'>
          Controles de accesibilidad
        </h2>
        <Button asChild variant='primary' className='absolute right-2 2xl:p-8'>
          <Link href='/'>
            <RiCloseLargeFill />
          </Link>
        </Button>
      </div>
      <div className='grid m-auto items-center p-4 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:gap-20 md:p-14 lg:my-6 xl:my-0 lg:px-40 2xl:px-40'>
        <Image
          src='/images/accessibility/1.png'
          width={1500}
          height={1500}
          alt='Accesibilidad'
          className='w-full h-full sm:h-5/6 md:h-full object-cover xl:h-5/6'
        />
        <div className='flex flex-col gap-4 pt-6 mb-16 text-center lg:pt-0 lg:mb-0 lg:gap-4 2xl:gap-8 2xl:px-20 2xl:pt-0 [&_.background]:bg-[#E10D0D] [&_.background>*]:border-white [&_.background>*]:2xl:text-xl'>
          <h3 className='font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            Opciones de Accesibilidad
          </h3>
          <div className='flex items-center justify-between px-4 py-3 rounded-lg background'>
            <Label htmlFor='color'>Activar filtros de color</Label>
            <Checkbox
              id='color'
              className='px-4 py-[10px] 2xl:py-4 flex justify-center items-center'
            />
          </div>
          <div className='flex items-center justify-between px-4 py-3 rounded-lg background'>
            <Label htmlFor='images'>Lectores de imágenes</Label>
            <Checkbox
              id='images'
              className='px-4 py-[10px] 2xl:py-4 flex justify-center items-center'
            />
          </div>
          <div className='flex items-center justify-between px-4 py-3 rounded-lg background'>
            <Label htmlFor='narration'>Modo narración</Label>
            <Checkbox
              id='narration'
              className='px-4 py-[10px] 2xl:py-4 flex justify-center items-center'
            />
          </div>
          <div className='flex items-center justify-between px-4 py-3 rounded-lg background'>
            <Label htmlFor='screens'>Lectores de pantallas</Label>
            <Checkbox
              id='screens'
              className='px-4 py-[10px] 2xl:py-4 flex justify-center items-center'
            />
          </div>
          <Button variant='primary' className='2xl:py-6 2xl:text-xl'>
            Ver preguntas frecuentes
          </Button>
          <Button variant='primary' className='2xl:py-6 2xl:text-xl'>
            ¿Necesitas ayuda
          </Button>
          <Button variant='primary' className='2xl:py-6 2xl:text-xl'>
            &#43; Configuraciones
          </Button>
        </div>
      </div>
    </div>
  );
}
