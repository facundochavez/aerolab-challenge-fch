'use client';
import PointsButton from '@/components/PointsButton/PointsButton';
import ModeToggle from '@/components/ModeToggle/ModeToggle';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsScrollOnTop(true);
      } else {
        setIsScrollOnTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-20 w-screen h-20 lg:h-32 px-[5%] flex justify-center fixed border-b border-transparent backdrop-blur-xl ${
        !isScrollOnTop ? ' !border-neutral-300' : ''
      }`}
    >
      <div className='absolute inset-0 w-full h-full bg-neutral-0 opacity-30'></div>
      <nav className='relative flex w-full max-w-[1464px] items-center justify-between py-4'>
        <a
          href='https://aerolab.co/'
          target='_blank'
          className='hover:opacity-90'
        >
          <Image
            src='/aerolab-logo.svg'
            alt='Aerolab Logo'
            width={126}
            height={48}
            className='z-20 hidden xs:flex'
          />
          <Image
            src='/aerolab-simbol.svg'
            alt='Aerolab Logo'
            width={39}
            height={36}
            className='z-20 flex xs:hidden'
          />
        </a>
        <aside className='flex items-center gap-2'>
          {/* <ModeToggle /> */}
          <PointsButton />
        </aside>
      </nav>
    </header>
  );
};

export default Header;
