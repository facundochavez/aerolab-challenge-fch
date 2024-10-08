const WavesBackground = () => {
  return (
    <>
      <div
        className='fixed top-[140px] sm:top-[200px] inset-0 -z-10 h-screen w-screen'
        style={{
          backgroundImage: "url('/icons/wave-path.svg')",
          backgroundRepeat: 'repeat',
        }}
      />
      <div
        className='fixed top-[156px] sm:top-[216px] inset-0 -z-10 h-screen w-screen'
        style={{
          backgroundImage: "url('/icons/wave-path.svg')",
          backgroundRepeat: 'repeat',
        }}
      />
    </>
  );
};

export default WavesBackground;
