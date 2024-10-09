import LandingSection from './components/Landing.section';
import ProductsSection from './components/Products.section';
import WalkthroughSection from './components/Walkthrough.section';

export default function Home() {
  return (
    <>
      <LandingSection />
      <WalkthroughSection />
      <ProductsSection />
    </>
  );
}
