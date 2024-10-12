import Image from 'next/image';

const HeroImage = ({ disabledBackground = false }) => {
  return (
    <div className='relative w-full h-full'>
      {!disabledBackground && (
        <div className='inset-0 w-full aspect-[1.35/1] rounded-[4vw] bg-gradient-to-br from-special-section-bg-opacity50-1 to-special-section-bg-opacity50-2 opacity-50 shadow-xl shadow-neutral-500/30' />
      )}
      <Image
        loading='lazy'
        src='/images/hero-desktop.svg'
        alt='Hero Image'
        width={1}
        height={1}
        className={`bottom-0 w-full aspect-square object-cover hidden lg:flex ${
          !disabledBackground ? 'absolute' : ''
        }`}
      />
      <Image
        loading='lazy'
        src='/images/hero-mobile.svg'
        alt='Hero Image'
        width={1}
        height={1}
        className={`bottom-0 w-full aspect-square object-cover lg:hidden ${
          !disabledBackground ? 'absolute' : ''
        }`}
      />
    </div>
  );
};

export default HeroImage;
