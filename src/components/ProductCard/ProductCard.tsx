import { Product } from '@/types';
import RedeemButton from '../RedeemButton/RedeemButton';
import Image from 'next/image';
import { ProductCardState } from '@/types';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';

const ProductCard = ({
  product,
  state,
}: {
  product: Product;
  state: ProductCardState;
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center bg-neutral-0 border border-neutral-300 rounded-[16px] shadow-md shadow-neutral-500/10 ${
        state === 'disabled' && 'grayscale opacity-50'
      }`}
    >
      <div className='h-[345px] flex items-center justify-center'>
        {state === 'charging' ? (
          <Image
            src='/icons/icon-aerolab-skeleton.svg'
            alt='Icon Aerolab Skeleton'
            width={1}
            height={1}
            className={`w-20 h-20 animate-pulse`}
          />
        ) : (
          <Image
            src={product.img.url}
            alt={product.name}
            width={280}
            height={204}
            className={`w-[280px]`}
          />
        )}
      </div>
      <Separator />
      <footer className='w-full p-6 pt-4'>
        {state === 'charging' ? (
          <>
            <Skeleton className='h-4 w-52 mb-2 rounded-[12px] max-w-full' />
            <Skeleton className='h-2 w-28 rounded-[4px] max-w-full'/>
          </>
        ) : (
          <>
            <h2 className='l1-text-default text-neutral-900'>{product.name}</h2>
            <span className='l2-text-allcaps text-neutral-600'>
              {product.category}
            </span>
          </>
        )}
      </footer>
    </div>
  );
};

export default ProductCard;
