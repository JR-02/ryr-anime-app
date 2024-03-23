import { forwardRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

type Ref = HTMLElement;

export const SectionGridSlider = forwardRef<Ref, Props>(
  ({ children, className }, ref) => {
    return (
      <section
        ref={ref}
        className={`grid gap-4 grid-flow-col overflow-x-scroll scrollbar-bottom pb-4 ${
          className ? className : ''
        }`}
      >
        {children}
      </section>
    );
  }
);
SectionGridSlider.displayName = 'SectionGridSlider';
