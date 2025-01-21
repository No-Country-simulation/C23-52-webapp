import Image from 'next/image';

export const CardSections = ({ title, image, autor, description }) => {
  return (
    <div>
      <Image
        alt={title}
        src={image}
        width={270}
        height={540}
        className='aspect-[9/16] object-cover w-20 h-40 lg:w-44 lg:h-auto'
      />
      <h4 className='text-sm lg:text-base'>{title}</h4>
      <span className='text-sm lg:text-base'>{autor}</span>
      <p className='text-sm lg:text-base'>{description}</p>
    </div>
  );
};
