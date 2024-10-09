import { walkthroughStep } from '@/types';
import Image from 'next/image';

const WalkthroughCard = ({ step }: { step: walkthroughStep }) => {
  return (
    <div className='w-full bg-neutral-0/70 lg:bg-neutral-0 rounded-[32px] border-neutral-300 border p-3 lg:shadow-xl lg:shadow-neutral-500/10 lg:w-[380px] xl:w-[532px]'>
      <div className='w-full h-full rounded-[20px] border-neutral-300 border overflow-hidden bg-neutral-0'>
        <header className='w-full h-[200px] bg-gradient-to-br from-special-illustration-bg-1 to-special-illustration-bg-2 lg:h-[300px] xl:h-[498px]'>
          <Image
            src={step.imageDesktop}
            alt={step.title}
            width={1}
            height={1}
            className='w-full h-full object-cover hidden lg:flex'
          />
          <Image
            src={step.imageMobile}
            alt={step.title}
            width={1}
            height={1}
            className='w-full h-full object-cover lg:hidden'
          />
        </header>
        <footer className='relative w-full flex flex-col gap-4 p-4 lg:pb-6'>
          <header
            className={`w-full flex items-center gap-4 lg:pr-[calc(130px-3vw)]`}
          >
            <div className='w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-brand-light rounded-[8px]'>
              <Image
                src={step.icon}
                alt={step.title}
                width={1}
                height={1}
                className='w-[26px] lg:w-[32px] h-[26px] lg:h-[32px]'
              />
            </div>
            <h2 className='l3-title-default text-transparent bg-clip-text bg-gradient-to-r from-brand-default-1 to-brand-default-2'>
              {step.position}—{step.title}
            </h2>
          </header>
          <div className={`relative w-full xs:h-[72px] ${step.position !== 3 && 'lg:pr-[calc(250px-15vw)] xl:pr-[calc(380px-min(300px,15vw))]'}`}>
            <p className='xs:absolute l1-text-default text-neutral-600 flex lg:relative'>
              {step.description}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WalkthroughCard;
