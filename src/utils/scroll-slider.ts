type Direction = 'go' | 'back';

export const scrollSlider = (element: HTMLDivElement, direction: Direction) => {
  const slides = Array.from(element.children) as HTMLElement[];

  // console.log(slides);

  const optionsObserver = {
    root: element,
    rootMargin: '0px',
    threshold: 0.9,
  };

  const returnNumberPositive = (number: number) => {
    if (number < 0) {
      return 0;
    } else {
      return number;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    const slidesVisible = entries.filter((entrie) => entrie.isIntersecting);

    if (direction === 'back') {
      const firstSlideVisible = slidesVisible[0];
      const indexFirstSlideVisible = entries.indexOf(firstSlideVisible);

      if (indexFirstSlideVisible >= 1) {
        const result = returnNumberPositive(
          indexFirstSlideVisible - slidesVisible.length
        );

        entries[result].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }

    if (direction === 'go') {
      const lastSlideVisible = slidesVisible[slidesVisible.length - 1];
      const indexLastSlideVisible = entries.indexOf(lastSlideVisible);

      if (entries.length - 1 > indexLastSlideVisible) {
        entries[indexLastSlideVisible + 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }

    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, optionsObserver);

  slides.forEach((slide) => {
    observer.observe(slide);
  });
};
