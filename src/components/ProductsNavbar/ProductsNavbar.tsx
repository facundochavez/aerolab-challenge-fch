import ProductsFilter from '@/components/ProductsFilter/ProductsFilter';
import ProductsPagination from '@/components/ProductsPagination/ProductsPagination';
import ProductsSorter from '@/components/ProductsSorter/ProductsSorter';

const ProductsNavbar = () => {
  return (
    <nav className='w-full max-w-[1464px] flex flex-col items-center'>
      <h1 className='w-full l2-title-default text-neutral-900 text-center sm:text-left !leading-8 pb-8 lg:pb-14'>
        <span className='text-brand-gradient'>Tech</span> Products
      </h1>
      <nav className='relative w-full h-full flex items-center flex-wrap gap-x-3 gap-y-4 justify-between overflow-visible pb-20 sm:pb-6'>
        <div className='order-1'>
          <ProductsFilter />
        </div>
        <div className='hidden sm:flex order-2 xxl:order-3'>
          <ProductsPagination />
        </div>
        <div className='xxl:w-fit order-3 xxl:order-2 xxl:mr-auto overflow-scroll absolute w-screen right-0 top-20 px-[10vw] sm:relative sm:top-0 sm:w-full sm:px-0 scroll-area-mask'>
          <ProductsSorter />
        </div>
      </nav>
    </nav>
  );
};

export default ProductsNavbar;
