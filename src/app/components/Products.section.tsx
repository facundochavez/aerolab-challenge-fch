import ProductsFilter from '@/components/ProductsFilter/ProductsFilter';
import ProductsPagination from '@/components/ProductsPagination/ProductsPagination';
import ProductsSorter from '@/components/ProductsSorter/ProductsSorter';
import ProductsProvider from '@/context/products.context';

const ProductsSection = () => {
  return (
    <ProductsProvider>
      <section id='products-section' className='w-screen h-[200vh] flex flex-col items-center bg-neutral-0 pt-20 px-[5%] lg:pt-48'>
        <div className='w-full max-w-[1464px] flex flex-col items-center'>
          <h1 className='w-full l2-title-default text-neutral-900 text-center sm:text-left !leading-8 pb-8 lg:pb-14'>
            <span className='text-brand-gradient'>Tech</span> Products
          </h1>
          <nav className='relative w-full h-full flex items-center flex-wrap gap-3 justify-between overflow-visible'>
            <ProductsFilter />
            <ProductsPagination />
            <ProductsSorter />
          </nav>
        </div>
      </section>
    </ProductsProvider>
  );
};

export default ProductsSection;
