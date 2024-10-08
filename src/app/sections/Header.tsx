'use client';
import AerocoinsButton from '@/components/AerocoinsButton/AerocoinsButton';
import ModeToggle from '@/components/ModeToggle/ModeToggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
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
      className={`z-10 w-screen h-20 sm:h-32 px-[5%] flex justify-center fixed bg-neutral-0/50 border-b border-transparent ${
        !isScrollOnTop && ' !border-neutral-300 backdrop-blur-md'
      }`}
    >
      <nav className='flex w-full max-w-[1464px] items-center justify-between py-4'>
        <Image
          src='/aerolab-logo-desktop.svg'
          alt='Aerolab Logo'
          width={126}
          height={48}
          className='hidden sm:flex'
        />
        <Image
          src='/aerolab-logo-responsive.svg'
          alt='Aerolab Logo'
          width={39}
          height={36}
          className='flex sm:hidden'
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
