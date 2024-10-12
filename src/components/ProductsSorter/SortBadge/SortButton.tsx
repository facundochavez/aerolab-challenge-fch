import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

interface SortButtonProps {
  isSorting: boolean;
  direction: 'up' | 'down';
  onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({
  isSorting = false,
  direction = 'up',
  onClick,
}) => {
  return (
    <Button
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
