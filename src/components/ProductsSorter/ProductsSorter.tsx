'use client';
import { useState } from 'react';
import SortBadge from './SortBadge/SortBadge';
import { SortOption } from '@/types';
import { Separator } from '../ui/separator';

const ProductsSorter = () => {
  const sortOptions = [
    {
      id: 'price',
      label: 'Price',
      upText: 'Highest Price',
      downText: 'Lowest Price',
    },
    {
      id: 'date',
      label: 'Date',
      upText: 'Most Recent',
      downText: 'Most Ancient',
    },
  ] as SortOption[];

  return (
    <div className='flex items-center gap-2 w-full xl:w-auto order-3 xl:order-2 xl:mr-auto'>
      <Separator orientation='vertical' className='mx-2 h-[59px] border-[1.5px] border-neutral-300 hidden xl:flex' />
      <p className='l1-text-lightweight mr-2 hidden xl:flex'>Sort by:</p>
      {sortOptions.map((option) => (
        <SortBadge sortOption={option} />
      ))}
    </div>
  );
};

export default ProductsSorter;
