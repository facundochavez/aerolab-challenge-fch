const WavesBackground = () => {
  return (
    <div className='h-screen w-screen fixed top-[140px] lg:top-[200px] -z-10 dark:opacity-[0.03]'>
      <div
        className='h-full w-full'
        style={{
          backgroundImage: "url('/icons/wave-path.svg')",
          backgroundRepeat: 'repeat',
        }}
      />
      <div
        className='h-full w-full absolute top-[13.5px]'
        style={{
          backgroundImage: "url('/icons/wave-path.svg')",
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default WavesBackground;
