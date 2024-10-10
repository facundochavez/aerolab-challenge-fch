import { WalkthroughStep } from '@/types';
import walkthroughStepsDataRaw from '@/data/walkthroughSteps.data.json';
import WalkthroughCard from '@/components/WalkthroughCard/WalkthroughCard';
import Image from 'next/image';
import LandingImage from '@/components/LandingImage/LandingImage';

const WalkthroughSection = () => {
  const walkthroughStepsData = walkthroughStepsDataRaw as WalkthroughStep[];

  return (
    <section className='relative w-screen flex flex-col items-center px-[5%] xs:px-[3%] lg:px-[5%] mt-[65px] md:mt-[290px] lg:mt-40 lg:h-[300px] xl:h-[528px]'>
      <div
        className='absolute -bottom-20 w-full h-60 bg-neutral-0'
        style={{
          maskImage: `linear-gradient(to top, black 80px, transparent)`,
        }}
      />
      <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-special-section-bg-opacity50-1 to-special-section-bg-opacity50-2 opacity-50' />
      <div className='z-10 min-w-[580px] -mb-10 -mt-[130px] md:-mt-[350px] lg:hidden'>
        <LandingImage disableBackground />
      </div>
      <ul className='z-10 w-full h-full max-w-[1464px] flex flex-row-reverse flex-wrap-reverse items-center justify-center gap-4 pb-10 pt-0 lg:hidden'>
        {walkthroughStepsData
          .slice()
          .reverse()
          .map((step, index) => (
            <li
              key={index}
              className='xs:min-w-[275px] max-w-[320px] flex-grow'
            >
              <WalkthroughCard step={step} />
            </li>
          ))}
      </ul>
      <ul className='z-10 w-full h-full items-center gap-4 hidden lg:flex justify-evenly px-[200px] max-w-[1464px] translate-y-[-5%]'>
        {walkthroughStepsData.map((step, index) => (
          <li
            key={index}
            className={`w-[30%] flex flex-col items-center transition-all duration-300 ease-in-out hover:mb-16`}
            style={{
              transformOrigin: `${200 * (1 - index)}% 2000px`,
              transform: `rotate(${3 * (index - 1)}deg)`,
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
