import { WalkthroughStep } from '@/types';
import walkthroughStepsDataRaw from '@/data/walkthroughSteps.data.json';
import WalkthroughCard from '@/components/WalkthroughCard/WalkthroughCard';
import Image from 'next/image';
import HeroImage from '@/components/HeroImage/HeroImage';

const WalkthroughSection = () => {
  const walkthroughStepsData = walkthroughStepsDataRaw as WalkthroughStep[];

  return (
    <section className='relative mt-[65px] flex w-screen flex-col items-center px-[5%] xs:px-[3%] md:mt-[290px] lg:mt-40 lg:h-[300px] lg:px-[5%] xl:h-[528px]'>
      <div
        className='absolute -bottom-20 h-60 w-full bg-neutral-0'
        style={{
          maskImage: `linear-gradient(to top, black 80px, transparent)`,
        }}
      />
      <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-special-section-bg-opacity50-1 to-special-section-bg-opacity50-2 opacity-50' />
      <div className='z-10 -mb-10 -mt-[130px] min-w-[580px] md:-mt-[350px] lg:hidden'>
        <HeroImage disabledBackground />
      </div>
      <ul className='z-10 flex h-full w-full max-w-[1464px] flex-row-reverse flex-wrap-reverse items-center justify-center gap-4 pb-10 pt-0 lg:hidden'>
        {walkthroughStepsData
          .slice()
          .reverse()
          .map((step, index) => (
            <li
              key={index}
              className='max-w-[320px] flex-grow xs:min-w-[275px]'
            >
              <WalkthroughCard step={step} />
            </li>
          ))}
      </ul>
      <ul className='z-10 hidden h-full w-full max-w-[1464px] translate-y-[-5%] items-center justify-evenly gap-4 px-[200px] lg:flex'>
        {walkthroughStepsData.map((step, index) => (
          <li
            key={index}
            className={`flex w-[30%] flex-col items-center transition-all duration-300 ease-in-out hover:mb-16`}
            style={{
              transformOrigin: `${200 * (1 - index)}% 2000px`,
              transform: `rotate(${3 * (index - 1)}deg) translateY(${
                8 * (1 - index)
              }px)`,
            }}
          >
            <WalkthroughCard step={step} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WalkthroughSection;
