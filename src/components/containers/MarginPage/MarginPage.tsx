interface Props {
  className?: string;
  children: React.ReactNode;
}

export const MarginPage = ({ className, children }: Props) => {
  return (
    <div
      className={`w-[90%] m-auto wx-[1500px] ${
        className === undefined ? '' : className
      }`}
    >
      {children}
    </div>
  );
};
