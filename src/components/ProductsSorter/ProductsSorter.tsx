import SortBadge from './SortBadge/SortBadge';
import { SortOption } from '@/types';
import { Separator } from '../ui/separator';

const ProductsSorter = () => {
  const sortOptions = [
    {
      id: 'date',
      label: 'Date',
      upText: 'Most Recent',
      downText: 'Most Ancient',
    },
    {
      id: 'price',
      label: 'Price',
      upText: 'Highest Price',
      downText: 'Lowest Price',
    },
  ] as SortOption[];

  return (
    <div className='flex items-center gap-2 xl:w-auto order-3 xl:order-2 xl:mr-auto overflow-scroll absolute w-screen right-0 top-20 px-[10vw] sm:relative sm:top-0 sm:w-full sm:px-0 scroll-area'>
      <Separator
        orientation='vertical'
        className='mx-2 h-[59px] border-[1.5px] border-neutral-300 hidden xl:flex'
      />
      <p className='l1-text-lightweight mr-2 hidden xl:flex'>Sort by:</p>
      {sortOptions.map((option) => (
        <SortBadge sortOption={option} />
      ))}
    </div>
  );
};

export default ProductsSorter;
