import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Author } from './Author';

export const Chapter = ({ comicId, comic, chapterId }) => {
  const chapter = comic.chapters.find((chapter) => chapter.id === chapterId);

  return (
    <>
      <div className='py-24 p-4'>
        <div className='flex flex-col gap-11 items-center'>
          <h2 className='font-bold underline'>Capítulo {chapter.id}</h2>
          <h3 className='text-[#59CAD6] text-xl lg:text-4xl'>
            {chapter.title}
          </h3>
          {chapter.images_url.map((image_url) => (
            <Image
              key={image_url}
              src={image_url}
              width={901}
              height={1694}
              alt='Capitulo 1'
              className='object-cover w-full'
            />
          ))}
        </div>
        {/* TODO: Cambiar el "2" */}
        {chapter.id === '2' ? (
          <>
            <h5 className='font-semibold text-end w-full my-11'>
              Continuará...
            </h5>
            <Button asChild variant='primary' className='float-end px-16'>
              <Link href={`/comic/${comicId}/1`}>Capítulo anterior</Link>
            </Button>
          </>
        ) : (
          <Button asChild variant='primary' className='float-end my-11 px-16'>
            <Link href={`/comic/${comicId}/2`}>Siguiente capítulo</Link>
          </Button>
        )}
      </div>
      <Author comic={comic} />
    </>
  );
};
