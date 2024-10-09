'use client';
import AerocoinsButton from '@/components/AerocoinsButton/AerocoinsButton';
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
      className={`z-10 w-screen h-20 lg:h-32 px-[5%] flex justify-center fixed bg-neutral-0/50 border-b border-transparent ${
        !isScrollOnTop && ' !border-neutral-300 backdrop-blur-xl'
      }`}
    >
      <nav className='flex w-full max-w-[1464px] items-center justify-between py-4'>
        <Image
          src='/aerolab-logo-desktop.svg'
          alt='Aerolab Logo'
          width={126}
          height={48}
          className='hidden xs:flex'
        />
        <Image
          src='/aerolab-logo-responsive.svg'
          alt='Aerolab Logo'
          width={39}
          height={36}
          className='flex xs:hidden'
        />
        <aside className='flex items-center gap-2'>
          <ModeToggle />
          <AerocoinsButton />
        </aside>
      </nav>
    </header>
  );
};

export default Header;
