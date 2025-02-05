import Image from 'next/image';
import Link from 'next/link';

export const CategoryCardGridItems = ({ id, title, image, autor, estreno }) => {
  return (
    <Link href={`/comics/${id}`}>
      <div className='p-4 border shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-300 transition-transform'>
        <Image
          alt={title}
          src={image}
          width={1270}
          height={1540}
          className='aspect-[9/16] object-cover h-40 w-full lg:w-[313px] lg:h-[395px] mb-3'
        />
        <span className='text-sm font-bold lg:text-base text-green-300'>
          {estreno}
        </span>
        <h4 className='text-sm lg:text-base'>{title}</h4>
        <span className='text-sm lg:text-base'>{autor}</span>
      </div>
    </Link>
  );
};
