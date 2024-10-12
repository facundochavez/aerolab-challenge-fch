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
      downText: 'Most Recent',
      upText: 'Most Ancient',
    },
    {
      id: 'price',
      label: 'Price',
      downText: 'Lowest Price',
      upText: 'Highest Price',
    },
    {
      id: 'name',
      label: 'Name',
      downText: 'From A to Z',
      upText: 'Form Z to A',
    },
  ] as SortOption[];

  return (
    <div className='flex items-center gap-2'>
      <Separator
        orientation='vertical'
        className='mx-2 h-[60px] border-[1.5px] border-neutral-300 hidden xxl:flex'
      />
      <p className='l1-text-lightweight mr-2 hidden xxl:flex'>Sort by:</p>
      {sortOptions.map((option) => (
        <SortBadge sortOption={option} />
      ))}
      <div className='min-w-10 h-10 xxl:hidden'></div>
    </div>
  );
};

export default ProductsSorter;
