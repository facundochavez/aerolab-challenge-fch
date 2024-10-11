import LandingSection from './components/Landing.section';
import ProductsSection from './components/Products.section';
import WalkthroughSection from './components/Walkthrough.section';
import { ProductsProvider } from '@/context/products.context';

export default function Home() {
  return (
    <>
      <LandingSection />
      <WalkthroughSection />
      <ProductsProvider>
        <ProductsSection />
      </ProductsProvider>
    </>
  );
}
