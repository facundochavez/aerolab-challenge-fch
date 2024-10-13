"use client";
import HeroImage from "@/components/HeroImage/HeroImage";
import { Button } from "@/components/ui/button";
import scrollToProductsSection from "@/utils/scrollToProductsSection";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex w-full max-w-[1464px] flex-col items-center pt-[90px] lg:flex-row lg:pt-[110px]">
      <div className="flex w-min max-w-[90vw] flex-col items-center gap-2 lg:-mr-36 lg:items-start xl:mr-0">
        <h1 className="l1-text-allcaps text-neutral-600">Explore the</h1>
        <div className="lg:scale-[0.83] xl:scale-100 lg:-my-6 xl:my-0 flex origin-left flex-col items-center gap-2 lg:items-start">
          <h1 className="l1-title-default text-brand-gradient">Tech</h1>
          <h1 className="l1-title-default text-neutral-900">Zone</h1>
        </div>
        <p className="l1-text-default mt-3 w-full text-center lg:w-[90%] lg:text-left">
          Here you&apos;ll be able to redeem all of your hard-earned Aeropoints
          and exchange them for cool tech.
        </p>
        <Button
          className="mt-8 min-h-16 !rounded-[24px] px-10 lg:min-h-20"
          onClick={scrollToProductsSection}
        >
          <span className="l1-text-allcaps">View all products</span>
          <Image
            src="/icons/arrow-down.svg"
            alt="Arrow Down"
            width={1}
            height={1}
            className="h-6 w-6 brightness-200"
          />
        </Button>
      </div>
      <aside className="hidden w-full -translate-y-10 pl-[8%] lg:flex xl:translate-y-0">
        <HeroImage />
      </aside>
    </section>
  );
};

export default HeroSection;
