'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ProductCardState } from '@/types';
import formatedNumber from '@/utils/formatedNumber';
import { LoaderCircle } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { toast } from 'sonner';

const RedeemButton = ({
  state,
  coins,
  productName,
}: {
  state: ProductCardState;
  coins: number;
  productName: string;
}) => {
  return state === 'charging' ? (
    <Skeleton className='w-full min-h-[56px] xl:min-h-[59px] rounded-[14px] lg:rounded-[16px]' />
  ) : (
    <Button
      onClick={() =>
        toast(productName, {
          description: 'redeemed successfully',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }
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
          <span>{state === 'disabled' ? 'You need' : 'Redeem for'}</span>
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
