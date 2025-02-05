'use client';

import Image from 'next/image';
import Link from 'next/link';

export const CategoryCardGridItems = ({ id, title, image, autor, estreno }) => {
  return (
    <Link href={`/comics/${id}`}>
      <div className='lg:h-[575px] 2xl:w-full md:h-[350px] h-96 border shadow-lg rounded-lg cursor-pointer'>
        <article className='lg:h-[427px] md:h-[250px] w-full h-64 rounded-t-lg overflow-hidden'>
          <Image
            alt='comics'
            src={image}
            width={1270}
            height={1540}
            className='aspect-[9/16] object-cover h-full w-full'
          />
        </article>
        <div className='p-5 lg:p-7 flex flex-col text-sm lg:text-lg'>
          <span className='font-bold text-green-300'>{estreno}</span>
          <span>{title}</span>
          <span className='font-extrabold'>{autor}</span>
        </div>
      </div>
    </Link>
  );
};
