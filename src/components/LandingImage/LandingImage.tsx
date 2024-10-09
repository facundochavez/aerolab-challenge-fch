import Image from 'next/image';

const LandingImage = ({ disableBackground = false }) => {
  return (
    <div className='relative w-full h-full'>
      {!disableBackground && (
        <div className='inset-0 w-full aspect-[1.35/1] rounded-[4vw] bg-gradient-to-br from-special-section-bg-opacity50-1 to-special-section-bg-opacity50-2 opacity-50 shadow-xl shadow-neutral-500/30' />
      )}
      <Image
        src='/images/hero-desktop.svg'
        alt='Landing Image'
        width={1}
        height={1}
        className={`bottom-0 w-full aspect-square object-cover hidden lg:flex ${
          !disableBackground && 'absolute'
        }`}
      />
      <Image
        src='/images/hero-mobile.svg'
        alt='Landing Image'
        width={1}
        height={1}
        className={`bottom-0 w-full aspect-square object-cover lg:hidden ${
          !disableBackground && 'absolute'
        }`}
      />
    </div>
  );
};

export default LandingImage;
