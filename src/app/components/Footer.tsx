'use client';
import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <footer className='w-full px-[5%] flex flex-col items-center py-24'>
      <a
        href='https://github.com/facundochavez/aerolab-challenge-fch'
        target='_blank'
        className='relative flex items-center gap-3 l1-text-default'
        onMouseEnter={() => setIsLinkHovered(true)}
        onMouseLeave={() => setIsLinkHovered(false)}
      >
        {isLinkHovered ? (
          <Image
            src={`/icons/icon-github-colored.svg`}
            alt='GitHub Logo'
            width={1}
            height={1}
            className='w-6 h-6 lg:w-8 lg:h-8 mb-1'
          />
        ) : (
          <Image
            src={`/icons/icon-github.svg`}
            alt='GitHub Logo'
            width={1}
            height={1}
            className='w-6 h-6 lg:w-8 lg:h-8 mb-1 brightness-90 dark:brightness-200'
          />
        )}
        <span className={`${isLinkHovered ? 'text-brand-gradient' : ''}`}>
          View this repository
        </span>
      </a>
    </footer>
  );
};

export default Footer;
