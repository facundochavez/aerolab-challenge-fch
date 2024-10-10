'use client';
import React, { useRef } from 'react';
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

  //HANDLE WIDTH ANIMATION
  const spanRef = useRef<HTMLDivElement>(null);
  const [spanWidth, setSpanWidth] = React.useState(0);

  React.useEffect(() => {
    const handleWidth = () => {
      if (spanRef.current) {
        setSpanWidth(spanRef.current.offsetWidth);
      }
    };

    handleWidth();
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, [sortedBy, sortDirection]);

  return (
    <div className='min-w-max flex items-center gap-1.5 p-2 rounded-[14px] lg:rounded-[16px] bg-neutral-100'>
      <div
        style={{ width: spanWidth }}
        className='transition-all duration-100 overflow-hidden'
      >
        <span
          ref={spanRef}
          className={`px-2 l1-text-lightweight text-neutral-500 whitespace-nowrap overflow-hidden text-ellipsis ${
            isBadgeSorting && 'text-brand-gradient !font-bold'
          }`}
        >
          {!isBadgeSorting
            ? sortOption.label
            : sortDirection === 'up'
            ? sortOption.upText
            : sortOption.downText}
        </span>
      </div>
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
