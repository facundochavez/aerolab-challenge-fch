import { walkthroughStep } from '@/types';
import walkthroughStepsDataRaw from '@/data/walkthroughSteps.data.json';
import WalkthroughCard from '@/components/WalkthroughCard/WalkthroughCard';

const WalkthroughSection = () => {
  const walkthroughStepsData = walkthroughStepsDataRaw as walkthroughStep[];

  return (
    <section className='relative w-screen flex flex-col items-center px-[5%]'>
      <div
        className='absolute -bottom-20 w-full h-60 bg-neutral-0'
        style={{
          maskImage: `linear-gradient(to top, black 80px, transparent)`,
        }}
      />
      <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-brand-default-1 to-brand-default-2 opacity-50' />

      <ul className='z-10 w-full h-full max-w-[1464px] flex flex-wrap-reverse items-center justify-center py-20 gap-4'>
        {walkthroughStepsData.map((step, index) => (
          //Calculate min width within 100% and 270px
          <li key={index} className='min-w-[250px] max-w-[350px] flex-grow'>
            <WalkthroughCard step={step} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WalkthroughSection;
