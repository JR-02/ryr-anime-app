interface Props {
  children: React.ReactNode;
  className?: string;
}

export const GridSlider = ({ children, className }: Props) => {
  return (
    <section
      className={`grid gap-4 grid-flow-col overflow-x-scroll scrollbar-bottom pb-4 ${
        className ? className : ''
      }`}
    >
      {children}
    </section>
  );
};
