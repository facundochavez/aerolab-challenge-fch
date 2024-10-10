'use client';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import Image from 'next/image';

const ProductsPagination = () => {
  const [isPreviousActive, setIsPreviousActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(true);

  return (
    <div className='hidden sm:flex order-2 xl:order-3'>
      <Pagination>
        <PaginationContent className='flex gap-4 h-[59px] rounded-[14px] lg:rounded-[16px] border border-neutral-300 p-2'>
          <PaginationItem onClick={(e) => e.preventDefault}>
            <PaginationLink
              href='#'
              isActive={isPreviousActive}
              onClick={(e) => e.preventDefault}
            >
              <Image
                src='/icons/chevron-right.svg'
                alt='icon-chevron'
                width={1}
                height={1}
                className={`w-6 h-6 rotate-180`}
              />
            </PaginationLink>
          </PaginationItem>
          <p className='l1-text-default'>
            Page <span className='text-brand-gradient'>1 of 2</span>
          </p>
          <PaginationItem>
            <PaginationLink href='#' isActive={isNextActive}>
              <Image
                src='/icons/chevron-right.svg'
                alt='icon-chevron'
                width={1}
                height={1}
                className={`w-6 h-6`}
              />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPagination;
