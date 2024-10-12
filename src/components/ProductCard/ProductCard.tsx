import { Product, RootState } from '@/types';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }: { product: Product }) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className={`w-full flex flex-col items-center bg-white border border-neutral-300 rounded-[16px] shadow-md shadow-neutral-500/10 ${
        product.cost > (user.points || Infinity) ? 'grayscale opacity-50' : ''
      }`}
    >
      <header className='h-[345px] flex items-center justify-center'>
        {!product.img.url || !product.name ? (
          <Image
            loading='lazy'
            src='/icons/icon-aerolab-skeleton.svg'
            alt='Icon Aerolab Skeleton'
            width={1}
            height={1}
            className={`w-20 h-20 animate-pulse`}
          />
        ) : (
          <>
            <Image
              loading='lazy'
              src={product.img.url}
              alt={product.name}
              width={280}
              height={204}
              className={`w-[280px] lg:hidden`}
            />
            <Image
              loading='lazy'
              src={product.img.hdUrl}
              alt={product.name}
              width={280}
              height={204}
              className={`w-[280px] hidden lg:flex`}
            />
          </>
        )}
      </header>
      <Separator />
      <footer className='w-full min-h-[91px] p-6 pt-4'>
        {!product.name ? (
          <Skeleton className='h-4 w-52 mb-2 rounded-[12px] max-w-full' />
        ) : (
          <h2 className='l1-text-default text-neutral-900 overflow-hidden text-ellipsis whitespace-nowrap'>
            {product.name}
          </h2>
        )}
        {!product.category ? (
          <Skeleton className='h-2 w-28 rounded-[4px] max-w-full' />
        ) : (
          <span className='l2-text-allcaps text-neutral-600'>
            {product.category}
          </span>
        )}
      </footer>
    </div>
  );
};

export default ProductCard;
