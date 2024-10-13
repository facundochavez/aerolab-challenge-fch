'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AppDispatch, RootState } from '@/types';
import formatedNumber from '@/utils/formatedNumber';
import { LoaderCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import { useProductsContext } from '@/context/products.context';
import { redeemProduct } from '@/redux/states/user';
import { useDispatch, useSelector } from 'react-redux';

const RedeemButton = ({
  cost,
  productId,
  productName,
}: {
  cost: number;
  productId: string;
  productName: string;
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { selectedProductId, setSelectedProductId } = useProductsContext();

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  if (!productId) {
    return (
      <Skeleton className='w-full min-h-[56px] xl:min-h-[60px] rounded-[14px] lg:rounded-[16px]' />
    );
  }

  if (cost > (user.points || Infinity)) {
    return (
      <Button
        className='w-full min-h-[56px] xl:min-h-[60px] l1-text-default'
        variant='disabled'
      >
        <span>You need</span>
        <Image
          src='/icons/icon-aerolab-white.svg'
          alt='icon-aerolab'
          width={1}
          height={1}
          className='w-5 lg:w-6 h-5 lg:h-6 filter-neutral-500'
        />
        <span>{formatedNumber(cost)}</span>
      </Button>
    );
  }

  if (user.status === 'processing' && productId === selectedProductId) {
    return (
      <Button
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        className='w-full min-h-[56px] xl:min-h-[60px] l1-text-default opacity-70'
      >
        <LoaderCircle className='h-6 w-6 mr-1 animate-spin text-white' />
        <span>Processing...</span>
      </Button>
    );
  }

  return (
    <Button
      aria-label={`Redeem ${productName}`}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
      className='w-full min-h-[56px] xl:min-h-[60px] l1-text-default'
      variant='default'
      onClick={() => {
        setSelectedProductId(productId);
        dispatch(redeemProduct({ productId, productName, cost }));
      }}
    >
      <span>{isButtonHovered ? 'Redeem now for' : 'Redeem for'}</span>
      <Image
        src='/icons/icon-aerolab-white.svg'
        alt='icon-aerolab'
        width={1}
        height={1}
        className='w-5 lg:w-6 h-5 lg:h-6'
      />
      <span>{formatedNumber(cost)}</span>
    </Button>
  );
};

export default RedeemButton;
