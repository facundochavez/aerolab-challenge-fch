import { walkthroughStep } from '@/types';
import walkthroughStepsDataRaw from '@/data/walkthroughSteps.data.json';
import WalkthroughCard from '@/components/WalkthroughCard/WalkthroughCard';
import Image from 'next/image';

const WalkthroughSection = () => {
  const walkthroughStepsData = walkthroughStepsDataRaw as walkthroughStep[];

  return (
    <section className='relative w-screen flex flex-col items-center px-[3%] mt-[65px] md:mt-[290px] lg:mt-0'>
      <div
        className='absolute -bottom-20 w-full h-60 bg-neutral-0'
        style={{
          maskImage: `linear-gradient(to top, black 80px, transparent)`,
        }}
      />
      <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-special-section-bg-opacity50-1 to-special-section-bg-opacity50-2 opacity-50' />

      <Image src='/images/hero-mobile.svg' alt='Landing Image' width={1} height={1} className='z-10 min-w-[580px] -mb-10 -mt-[130px] md:-mt-[350px] lg:hidden' />
      <ul className='z-10 w-full h-full max-w-[1464px] flex flex-row-reverse flex-wrap-reverse items-center justify-center gap-4 pb-10 pt-0 lg:pt-10'>
        {walkthroughStepsData.slice().reverse().map((step, index) => (
          <li key={index} className='xs:min-w-[275px] max-w-[320px] flex-grow'>
            <WalkthroughCard step={step} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WalkthroughSection;
