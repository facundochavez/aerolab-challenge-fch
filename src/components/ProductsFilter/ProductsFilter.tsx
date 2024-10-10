import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductsFilter = () => {
  return (
    <div className='flex items-center gap-3'>
      <p className='l1-text-lightweight hidden xl:flex'>Filter by:</p>
      <Select>
        <SelectTrigger className='w-[90vw] sm:w-[300px] h-[59px] l1-text-default text-neutral-600 rounded-[14px] lg:rounded-[16px] border-neutral-300 px-6 shadow-none'>
          <SelectValue placeholder='All Products' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='apple'>All Products</SelectItem>
            <SelectItem value='banana'>Gaming</SelectItem>
            <SelectItem value='blueberry'>Audio</SelectItem>
            <SelectItem value='grapes'>Smart Home</SelectItem>
            <SelectItem value='pineapple'>Monitors & TV</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductsFilter;
