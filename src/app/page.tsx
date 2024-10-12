import HeroSection from './components/Hero.section';
import ProductsSection from './components/Products.section';
import WalkthroughSection from './components/Walkthrough.section';
import { ProductsProvider } from '@/context/products.context';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WalkthroughSection />
      <ProductsProvider>
        <ProductsSection />
      </ProductsProvider>
    </>
  );
}
