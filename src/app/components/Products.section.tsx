import ProductCard from '@/components/ProductCard/ProductCard';
import ProductsFilter from '@/components/ProductsFilter/ProductsFilter';
import ProductsPagination from '@/components/ProductsPagination/ProductsPagination';
import ProductsSorter from '@/components/ProductsSorter/ProductsSorter';
import RedeemButton from '@/components/RedeemButton/RedeemButton';
import ProductsProvider from '@/context/products.context';
import { Product } from '@/types';
import { ProductCardState } from '@/types';

const ProductsSection = () => {
  const products = [
    {
      _id: '5a033eeb364bf301523e9b92',
      name: 'Sandalia Pale Gold YSL',
      cost: 200,
      category: 'Indumentaria',
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png',
      },
    },
    {
      _id: '5a033f0f364bf301523e9b93',
      name: 'iPhone 7 Case Sea-Blue',
      cost: 200,
      category: 'Accesorios',
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png',
      },
    },
    {
      _id: '5a033eeb364bf301523e9b92',
      name: 'Sandalia Pale Gold YSL',
      cost: 200,
      category: 'Indumentaria',
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png',
      },
    },
    {
      _id: '5a033f0f364bf301523e9b93',
      name: 'iPhone 7 Case Sea-Blue',
      cost: 200,
      category: 'Accesorios',
      img: {
        url: 'https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png',
        hdUrl:
          'https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png',
      },
    },
  ] as Product[];

  return (
    <ProductsProvider>
      <section
        id='products-section'
        className='w-screen flex flex-col items-center gap-10 bg-neutral-0 pt-20 px-[5%] lg:pt-48 pb-40'
        style={{
          maskImage: 'linear-gradient(to top, transparent, black 80px)',
        }}
      >
        <header className='w-full max-w-[1464px] flex flex-col items-center'>
          <h1 className='w-full l2-title-default text-neutral-900 text-center sm:text-left !leading-8 pb-8 lg:pb-14'>
            <span className='text-brand-gradient'>Tech</span> Products
          </h1>
          <nav className='relative w-full h-full flex items-center flex-wrap gap-3 justify-between overflow-visible pb-20 sm:pb-6'>
            <div className='order-1'>
              <ProductsFilter />
            </div>
            <div className='hidden sm:flex order-2 xl:order-3'>
              <ProductsPagination />
            </div>
            <div className='xl:w-auto order-3 xl:order-2 xl:mr-auto overflow-scroll absolute w-screen right-0 top-20 px-[10vw] sm:relative sm:top-0 sm:w-full sm:px-0 scroll-area'>
              <ProductsSorter />
            </div>
          </nav>
        </header>
        <ul className='w-full max-w-[1464px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {products.map((product) => {
            const state: ProductCardState = 'enabled';
            return (
              <li key={product._id} className='w-full flex flex-col gap-4'>
                <ProductCard product={product} state={state} />
                <RedeemButton state={state} coins={product.cost} productName={product.name} />
              </li>
            );
          })}
        </ul>
        <footer className='relative w-full max-w-[1464px] flex flex-col items-center pt-6 gap-8'>
          <div className='md:absolute right-0'>
            <ProductsPagination />
          </div>
          <p className='l1-text-default text-neutral-600 order-3 md:pt-5'>
            <span className='text-brand-gradient'>16 of 32</span> products
          </p>
        </footer>
      </section>
    </ProductsProvider>
  );
};

export default ProductsSection;
