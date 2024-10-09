import LandingImage from '@/components/LandingImage/LandingImage';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const LandingSection = () => {
  return (
    <section className='w-full flex flex-col items-center lg:flex-row max-w-[1464px] pt-[89px] lg:pt-[120px]'>
      <div className='w-min max-w-[90vw] flex flex-col items-center lg:items-start gap-2 lg:-mr-36  xl:mr-0 '>
        <h1 className='l1-text-allcaps text-neutral-600'>Explore the</h1>
        <div className='flex flex-col items-center lg:items-start gap-2 origin-left lg:scale-[0.83] lg:-my-6 xl:scale-100 xl:my-0'>
          <h1 className='l1-title-default text-transparent bg-clip-text bg-gradient-to-r from-brand-default-1 to-brand-default-2'>
            Tech
          </h1>
          <h1 className='l1-title-default text-neutral-900'>Zone</h1>
        </div>
        <p className='l1-text-default w-full lg:w-[90%] text-center lg:text-left mt-3'>
          Here you&apos;ll be able to redeem all of your hard-earned Aeropoints
          and exchange them for cool tech.
        </p>
        <Button className='min-h-16 lg:min-h-20 px-10 mt-8 !rounded-[24px]'>
          <span className='l1-text-allcaps'>View all products</span>
          <Image
            src='/icons/arrow-down.svg'
            alt='Arrow Down'
            width={1}
            height={1}
            className='w-6 h-6 brightness-200'
          />
        </Button>
      </div>
      <aside className='hidden lg:flex w-full pl-[8%] -translate-y-10 xl:translate-y-0'>
        <LandingImage />
      </aside>
    </section>
  );
};

export default LandingSection;
