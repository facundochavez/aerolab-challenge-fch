import { Product } from '@/types';
import RedeemButton from '../RedeemButton/RedeemButton';
import Image from 'next/image';
import { ProductCardState } from '@/types';
import { Separator } from '../ui/separator';

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
        <Image
          src={product.img.url}
          alt={product.name}
          width={280}
          height={204}
          className={`w-[280px]`}
        />
      </div>
      <Separator />
      <footer className='w-full p-6 pt-4'>
        <h2 className='l1-text-default text-neutral-900'>{product.name}</h2>
        <span className='l2-text-allcaps text-neutral-600'>
          {product.category}
        </span>
      </footer>
    </div>
  );
};

export default ProductCard;
