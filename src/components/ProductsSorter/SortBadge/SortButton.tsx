import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

interface SortButtonProps {
  sortBy: string;
  isSorting: boolean;
  direction: 'up' | 'down';
  onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
  sortBy,
  isSorting = false,
  direction = 'up',
  onClick,
}) => {
  return (
    <Button
      aria-label={`Sort products by ${sortBy} to ${direction}`}
      onClick={onClick}
      variant={`${isSorting ? 'selected' : 'selector'}`}
    >
      <Image
        src={`/icons/arrow-down.svg`}
        alt={`${direction} icon`}
        width={1}
        height={1}
        className={`w-[28px] h-[28px] ${direction === 'up' ? 'rotate-180' : ''} ${
          isSorting ? 'brightness-200' : ''
        } `}
      />
    </Button>
  );
};

export default SortButton;
