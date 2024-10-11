'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCardState } from '@/types';
import formatedNumber from '@/utils/formatedNumber';
import { LoaderCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { showSuccessToast, showErrorToast } from '@/utils/toastUtils';
import { useState } from 'react';

const RedeemButton = ({
  state,
  coins,
  productName,
}: {
  state: ProductCardState;
  coins: number;
  productName: string;
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return state === 'charging' ? (
    <Skeleton className='w-full min-h-[56px] xl:min-h-[59px] rounded-[14px] lg:rounded-[16px]' />
  ) : (
    <Button
      onClick={() => {
        showSuccessToast(productName);
      }}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
      className='w-full min-h-[56px] xl:min-h-[59px] l1-text-default'
      variant={
        state === 'disabled'
          ? 'disabled'
          : state === 'processing'
          ? 'processing'
          : 'default'
      }
    >
      {state === 'processing' ? (
        <>
          <LoaderCircle className='h-6 w-6 mr-1 animate-spin text-neutral-0' />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <span>{state === 'disabled' ? 'You need' : isButtonHovered? 'Redeem now for' : 'Redeem for'}</span>
          <Image
            src='/icons/icon-aerolab-white.svg'
            alt='icon-aerolab'
            width={1}
            height={1}
            className={`w-5 lg:w-6 h-5 lg:h-6 ${
              state === 'disabled' && 'filter-neutral-500'
            }`}
          />
          <span>{formatedNumber(coins)}</span>
        </>
      )}
    </Button>
  );
};

export default RedeemButton;
