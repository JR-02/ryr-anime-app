'use client';

import { useEffect, useRef } from 'react';

import { ArrowRightIcon, ArrowLeftIcon } from '@/icons';
import { scrollSlider } from '@/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const GridSlider = ({ children, className }: Props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slideContainer = sliderRef.current;
  }, []);

  return (
    <section className='flex relative'>
      <button
        onClick={() => scrollSlider(sliderRef.current!, 'back')}
        className='bg-bg200/60 hover:bg-bg300/70 backdrop-blur-sm h-fit sticky left-2 my-auto z-20 rounded -mr-5 p-1'
      >
        <ArrowLeftIcon width={30} height={30} className='fill-tx100' />
      </button>

      <div
        ref={sliderRef}
        className={`grid gap-4 grid-flow-col overflow-x-scroll scrollbar-bottom pb-4 ${
          className ? className : ''
        }`}
      >
        {children}
      </div>

      <button
        onClick={() => scrollSlider(sliderRef.current!, 'go')}
        className='bg-bg200/60 hover:bg-bg300/70 backdrop-blur-sm h-fit sticky right-2 my-auto z-20 rounded -ml-5 p-1'
      >
        <ArrowRightIcon width={30} height={30} className='fill-tx100' />
      </button>
    </section>
  );
};
