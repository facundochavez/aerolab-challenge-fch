'use client';
import React, { useRef } from 'react';
import { SortOption } from '@/types';
import { useProductsContext } from '@/context/products.context';
import SortButton from './SortButton';

interface SortBadgeProps {
  sortOption: SortOption;
}

const SortBadge: React.FC<SortBadgeProps> = ({ sortOption }) => {
  const { orderBy, setOrderBy, orderDirection, setOrderDirection } =
    useProductsContext();
  const isBadgeSorting = orderBy === sortOption.id;

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
  }, [orderBy, orderDirection]);

  return (
    <div className='min-w-max flex items-center gap-1.5 p-2 rounded-[14px] lg:rounded-[16px] bg-neutral-100 dark:bg-neutral-100/10'>
      <div
        style={{ width: spanWidth }}
        className='transition-all duration-200 overflow-hidden'
      >
        <span
          ref={spanRef}
          className={`pl-2 pr-1 l1-text-lightweight text-neutral-500 whitespace-nowrap overflow-hidden text-ellipsis ${
            isBadgeSorting
              ? 'text-brand-gradient !font-bold dark:brightness-110'
              : ''
          }`}
        >
          {!isBadgeSorting
            ? sortOption.label
            : orderDirection === 'down'
            ? sortOption.downText
            : sortOption.upText}
        </span>
      </div>
      <SortButton
        isSorting={isBadgeSorting && orderDirection === 'up'}
        sortBy={orderBy}
        direction='up'
        onClick={() => {
          setOrderBy(sortOption.id);
          setOrderDirection('up');
        }}
      />
      <SortButton
        isSorting={isBadgeSorting && orderDirection === 'down'}
        sortBy={orderBy}
        direction='down'
        onClick={() => {
          setOrderBy(sortOption.id);
          setOrderDirection('down');
        }}
      />
    </div>
  );
};

export default SortBadge;
