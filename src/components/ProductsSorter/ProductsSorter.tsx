'use client';
import SortBadge from './SortBadge/SortBadge';
import { SortOption } from '@/types';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';

const ProductsSorter = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const sortOptions = [
    {
      id: 'date',
      label: 'Date',
      upText: 'Most Recent',
      downText: 'Most Ancient',
    },
    {
      id: 'price',
      label: 'Price',
      upText: 'Highest Price',
      downText: 'Lowest Price',
    },
  ] as SortOption[];

  return (
    <div className='flex items-center gap-2'>
      <Separator
        orientation='vertical'
        className='mx-2 h-[60px] border-[1.5px] border-neutral-300 hidden xl:flex'
      />
      <p className='l1-text-lightweight mr-2 hidden xl:flex'>Sort by:</p>
      {sortOptions.map((option) => (
        <>
          <SortBadge sortOption={option} />
        </>
      ))}
      <div className='min-w-4 h-10 xl:hidden'></div>
    </div>
  );
};

export default ProductsSorter;
