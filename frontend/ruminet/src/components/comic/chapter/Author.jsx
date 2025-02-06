import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaPlus, FaRegHeart } from 'react-icons/fa6';

export const Author = ({ comic }) => {
  const { author } = comic;

  return (
    <div className='grid sm:grid-cols-2 m-auto p-6 lg:gap-2 xl:gap-16 2xl:gap-24'>
      <Image
        src={author.image_url}
        width={188}
        height={259}
        alt={author.name}
        className='object-cover w-full lg:h-[550px]'
      />
      <div className='font-bold flex flex-col sm:gap-4 sm:p-5 gap-8 md:gap-8 md:p-8'>
        <div className='flex flex-col gap-8'>
          <h5 className='lg:text-2xl'>
            {author.roles.map((role) => role).join(' y ')} : {author.name}
          </h5>
          <div className='flex items-center gap-8'>
            <span className='rounded-full py-2 lg:py-3 px-1 lg:text-2xl bg-[#E10D0D] text-white'>
              +EP
            </span>
            <span>Todos los {comic.broadcast}</span>
          </div>
        </div>
        <span>¡Muestra tu apoyo a los creadores de esta serie!</span>
        <div className='flex gap-6'>
          <Button variant='primary' className='rounded-3xl'>
            <FaRegHeart />
            {author.follows}
          </Button>
          <Button variant='primary' className='rounded-3xl'>
            <FaPlus />
            Seguir
          </Button>
        </div>
        {(author.social_networks.facebook ||
          author.social_networks.instagram) && (
          <span>Comparte con tus amigos</span>
        )}
        <div className='flex gap-9 items-center justify-center w-full'>
          {author.social_networks.facebook && (
            <a href={author.social_networks.facebook} target='_blank'>
              <FaFacebook size={27} />
            </a>
          )}

          {author.social_networks.instagram && (
            <a href={author.social_networks.instagram} target='_blank'>
              <FaInstagram size={27} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
