"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductsFilter from "@/components/ProductsFilter/ProductsFilter";
import ProductsPagination from "@/components/ProductsPagination/ProductsPagination";
import ProductsSorter from "@/components/ProductsSorter/ProductsSorter";
import RedeemButton from "@/components/RedeemButton/RedeemButton";
import { useProductsContext } from "@/context/products.context";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import ProductsNavbar from "@/components/ProductsNavbar/ProductsNavbar";
import { use, useEffect } from "react";

const ProductsSection = () => {
  const { groupedProducts, currentProductsPage, orderedProductsLen } =
    useProductsContext();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setTimeout(() => {});
  }, [groupedProducts]);

  return (
    <section
      id="products-section"
      className="flex w-screen flex-col items-center gap-10 bg-neutral-0 px-[5%] pb-40 pt-20 lg:pt-48"
      style={{
        maskImage: "linear-gradient(to top, transparent, black 80px)",
      }}
    >
      <ProductsNavbar />
      <ul
        className={`grid w-full max-w-[1464px] grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
          user?.status === "processing" ? "pointer-events-none" : ""
        }`}
      >
        {groupedProducts[currentProductsPage - 1]?.map((product, index) => {
          return (
            <li key={index} className="flex w-full flex-col gap-4">
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
      <footer className="relative flex w-full max-w-[1464px] flex-col items-center gap-8 pt-6">
        <div className="right-0 md:absolute">
          <ProductsPagination />
        </div>
        <p className="l1-text-default order-3 text-neutral-600 md:pt-5">
          <span className="text-brand-gradient">
            {groupedProducts[currentProductsPage - 1]?.length} of{" "}
            {orderedProductsLen}
          </span>{" "}
          products
        </p>
      </footer>
    </section>
  );
};

export default ProductsSection;
