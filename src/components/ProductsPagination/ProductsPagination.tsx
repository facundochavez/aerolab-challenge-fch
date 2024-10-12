'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ProductsPagination = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  

  return (
    <div className='flex items-center gap-4 h-[60px] rounded-[14px] lg:rounded-[16px] border border-neutral-300 p-2'>
      <Button variant='pagination'>
        <Image
          src='/icons/chevron-right.svg'
          alt='icon-chevron'
          width={1}
          height={1}
          className={`w-6 h-6 rotate-180`}
        />
      </Button>
      <p className='l1-text-default'>
        Page <span className='text-brand-gradient'>1 of 2</span>
      </p>
      <Button variant='pagination'>
        <Image
          src='/icons/chevron-right.svg'
          alt='icon-chevron'
          width={1}
          height={1}
          className={`w-6 h-6`}
        />
      </Button>
    </div>
  );
};

export default ProductsPagination;
