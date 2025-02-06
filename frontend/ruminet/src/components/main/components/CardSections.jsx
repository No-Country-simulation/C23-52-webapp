import Image from 'next/image';
import Link from 'next/link';

export const CardSections = ({ title, image, autor, estreno }) => {
  return (
    <div className='p-4 border shadow-lg rounded-lg cursor-pointer'>
      <Link href="/comic-review/1">
      <Image
        alt={title}
        src={image}
        width={270}
        height={540}
        className='aspect-[9/16] object-cover w-20 h-40 lg:w-[313px] lg:h-[395px] mb-3'
      />
      <span className='text-sm font-bold lg:text-base text-green-300'>
        {estreno}
      </span>
      <h4 className='text-sm lg:text-base'>{title}</h4>
      <span className='text-sm lg:text-base'>{autor}</span>
      </Link>
    </div>
  );
};
