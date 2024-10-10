import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { SortOption } from '@/types';
import { useProductsContext } from '@/context/products.context';
import SortButton from './SortButton';

interface SortBadgeProps {
  sortOption: SortOption;
}

const SortBadge: React.FC<SortBadgeProps> = ({ sortOption }) => {
  const { sortedBy, setSortedBy, sortDirection, setSortDirection } =
    useProductsContext();

  const isBadgeSorting = sortedBy === sortOption.id;

  return (
    <div className='min-w-max flex items-center gap-1.5 p-2 rounded-[14px] lg:rounded-[16px] bg-neutral-0 border-2 border-neutral-100'>
      <span className={`px-2 l1-text-lightweight text-neutral-500 ${isBadgeSorting && 'text-brand-gradient !font-bold'}`}>
        {!isBadgeSorting
          ? sortOption.label
          : sortDirection === 'up'
          ? sortOption.upText
          : sortOption.downText}
      </span>
      <SortButton
        isSorting={isBadgeSorting && sortDirection === 'up'}
        direction='up'
        onClick={() => {
          setSortedBy(sortOption.id);
          setSortDirection('up');
        }}
      />
      <SortButton
        isSorting={isBadgeSorting && sortDirection === 'down'}
        direction='down'
        onClick={() => {
          setSortedBy(sortOption.id);
          setSortDirection('down');
        }}
      />
    </div>
  );
};

export default SortBadge;
