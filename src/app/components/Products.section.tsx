'use client';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductsFilter from '@/components/ProductsFilter/ProductsFilter';
import ProductsPagination from '@/components/ProductsPagination/ProductsPagination';
import ProductsSorter from '@/components/ProductsSorter/ProductsSorter';
import RedeemButton from '@/components/RedeemButton/RedeemButton';
import { useProductsContext } from '@/context/products.context';
import { useSelector } from 'react-redux';
import { RootState } from '@/types';
import ProductsNavbar from '@/components/ProductsNavbar/ProductsNavbar';

const ProductsSection = () => {
  const { groupedProducts, currentProductsPage, orderedProductsLen } =
    useProductsContext();
  const user = useSelector((state: RootState) => state.user);

  return (
    <section
      id='products-section'
      className='w-screen flex flex-col items-center gap-10 bg-neutral-0 pt-20 px-[5%] lg:pt-48 pb-40'
      style={{
        maskImage: 'linear-gradient(to top, transparent, black 80px)',
      }}
    >
      <ProductsNavbar />
      <ul
        className={`w-full max-w-[1464px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 ${
          user?.status === 'processing' ? 'pointer-events-none' : ''
        }`}
      >
        {groupedProducts[currentProductsPage - 1]?.map((product) => {
          return (
            <li key={product._id} className='w-full flex flex-col gap-4'>
              <ProductCard product={product} />
              <RedeemButton
                cost={product.cost}
                productId={product._id}
                productName={product.name}
              />
            </li>
          );
        })}
      </ul>
      <footer className='relative w-full max-w-[1464px] flex flex-col items-center pt-6 gap-8'>
        <div className='md:absolute right-0'>
          <ProductsPagination />
        </div>
        <p className='l1-text-default text-neutral-600 order-3 md:pt-5'>
          <span className='text-brand-gradient'>
            {groupedProducts[currentProductsPage - 1]?.length} of{' '}
            {orderedProductsLen}
          </span>{' '}
          products
        </p>
      </footer>
    </section>
  );
};

export default ProductsSection;
