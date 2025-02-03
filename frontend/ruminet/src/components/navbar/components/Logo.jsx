import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='md:ml-10 md:mr-10 ml-0'>
      <Link href='/'>
        <Image
          src='/images/LogoNavbar.png'
          className='object-cover'
          alt='logo-ruminet'
          width={150}
          height={150}
          priority
        />
      </Link>
    </div>
  );
}
