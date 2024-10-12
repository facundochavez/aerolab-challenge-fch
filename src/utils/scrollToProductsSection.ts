const scrollToProductsSection = () => {
  const section = document.getElementById('products-section');

  if (section) {
    const yOffset = window.innerWidth > 1024 ? 0 : -30;
    const yPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  }
};

export default scrollToProductsSection;