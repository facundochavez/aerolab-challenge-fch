'use client';
import { Product, RootState } from '@/types';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ProductCard = ({ product }: { product: Product }) => {
  const user = useSelector((state: RootState) => state.user);
  const [isImageMobileLoaded, setIsImageMobileLoaded] = useState(false);
  const [isImageDesktopLoaded, setIsImageDesktopLoaded] = useState(false);

  return (
    <div
      className={`w-full flex flex-col items-center bg-white border border-neutral-300 rounded-[16px] shadow-md shadow-neutral-500/10 ${
        product.cost > (user.points || Infinity) ? 'grayscale opacity-50' : ''
      }`}
    >
      <header className='relative h-[345px] flex items-center justify-center'>
        {product.img.url && (
          <Image
            loading='lazy'
            src={product.img.url}
            alt={product.name}
            width={280}
            height={204}
            className={`z-[1] w-[280px] lg:hidden`}
            onLoadingComplete={() => setIsImageMobileLoaded(true)}
          />
        )}

        {!isImageMobileLoaded && (
          <Image
            src='/icons/icon-aerolab-skeleton.svg'
            alt='Icon Aerolab Skeleton'
            width={80}
            height={80}
            className={`w-20 h-20 animate-pulse lg:hidden ${
              product.img.url ? 'absolute' : ''
            }`}
          />
        )}

        {product.img.hdUrl && (
          <Image
            loading='lazy'
            src={product.img.hdUrl}
            alt={product.name}
            width={280}
            height={204}
            className='z-[1] w-[280px] hidden lg:flex'
            onLoadingComplete={() => setIsImageDesktopLoaded(true)}
          />
        )}

        {!isImageDesktopLoaded && (
          <Image
            src='/icons/icon-aerolab-skeleton.svg'
            alt='Icon Aerolab Skeleton'
            width={80}
            height={80}
            className={`w-20 h-20 animate-pulse hidden lg:flex ${
              product.img.url ? 'absolute' : ''
            }`}
          />
        )}
      </header>
      <Separator />
      <footer className='w-full min-h-[91px] p-6 pt-4'>
        {!product.name ? (
          <Skeleton className='h-4 w-52 mb-2 rounded-[12px] max-w-full' />
        ) : (
          <h2 className='l1-text-default text-neutral-900 overflow-hidden text-ellipsis whitespace-nowrap dark:text-neutral-0'>
            {product.name}
          </h2>
        )}
        {!product.category ? (
          <Skeleton className='h-2 w-28 rounded-[4px] max-w-full' />
        ) : (
          <span className='l2-text-allcaps text-neutral-600 dark:text-neutral-100'>
            {product.category}
          </span>
        )}
      </footer>
    </div>
  );
};

export default ProductCard;
