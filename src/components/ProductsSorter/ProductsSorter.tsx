'use client';
import { useState } from 'react';
import SortBadge from './SortBadge/SortBadge';
import { SortOption } from '@/types';

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
    <div className='flex gap-2'>
      {sortOptions.map((option) => (
        <SortBadge sortOption={option} />
      ))}
    </div>
  );
};

export default ProductsSorter;
