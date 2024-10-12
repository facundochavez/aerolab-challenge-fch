'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useProductsContext } from '@/context/products.context';
import scrollToProductsSection from '@/utils/scrollToProductsSection';

const ProductsPagination = () => {
  const { currentProductsPage, setCurrentProductsPage, totalProductsPages } =
    useProductsContext();
  const isPrevDisabled = currentProductsPage === 1;
  const isNextDisabled = currentProductsPage === totalProductsPages;

  return (
    <div className='flex items-center gap-4 h-[60px] rounded-[14px] lg:rounded-[16px] border border-neutral-300 p-2'>
      <Button
        variant='pagination'
        disabled={isPrevDisabled}
        onClick={() => {
          setCurrentProductsPage(currentProductsPage - 1);
          setTimeout(() => scrollToProductsSection(), 0);
        }}
      >
        <Image
          src='/icons/chevron-right.svg'
          alt='icon-chevron-prev'
          width={1}
          height={1}
          className={`w-6 h-6 rotate-180`}
        />
      </Button>
      <p className='l1-text-default'>
        Page{' '}
        <span className='text-brand-gradient'>
          {currentProductsPage} of {totalProductsPages}
        </span>
      </p>
      <Button
        variant='pagination'
        disabled={isNextDisabled}
        onClick={() => {
          setCurrentProductsPage(currentProductsPage + 1);
          setTimeout(() => scrollToProductsSection(), 0);
        }}
      >
        <Image
          src='/icons/chevron-right.svg'
          alt='icon-chevron-next'
          width={1}
          height={1}
          className={`w-6 h-6`}
        />
      </Button>
    </div>
  );
};

export default ProductsPagination;
