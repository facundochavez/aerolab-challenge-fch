import Image from 'next/image';
import { Button } from '../ui/button';
import { ProductCardState } from '@/types';
import formatedNumber from '@/utils/formatedNumber';
import { LoaderCircle } from 'lucide-react';

const RedeemButton = ({
  state,
  coins,
}: {
  state: ProductCardState;
  coins: number;
}) => {
  return (
    <Button
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
