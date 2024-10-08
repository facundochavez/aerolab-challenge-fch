import LandingSection from "./sections/Landing.section";
import ProductsSection from "./sections/Products.section";
import WalkthroughSection from "./sections/Walkthrough.section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <WalkthroughSection />
      <ProductsSection />
    </>
  );
}
