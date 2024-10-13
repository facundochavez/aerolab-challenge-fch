'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useProductsContext } from '@/context/products.context';
import { useEffect, useState } from 'react';

const ProductsFilter = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const { categories, setFilterCategory, filterCategory } =
    useProductsContext();

  return (
    <div className='flex items-center gap-3'>
      <p className='l1-text-lightweight hidden xl:flex'>Filter by:</p>
      <Select onValueChange={setFilterCategory} defaultValue={filterCategory}>
        <SelectTrigger
          aria-label='Open filter menu'
          className='w-[90vw] sm:w-[300px] h-[60px] l1-text-default text-neutral-600 rounded-[14px] lg:rounded-[16px] border-neutral-300 px-6 shadow-none'
        >
          <SelectValue placeholder='All Products' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='All Products'>All Products</SelectItem>
            {categories.map((category) => (
              <SelectItem
                key={category}
                value={category}
                aria-label={'Filter by ' + category}
              >
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductsFilter;
