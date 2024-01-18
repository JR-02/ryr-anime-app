interface Props {
  className?: string;
  children: string;
}
export const Logo = ({ children, className }: Props) => {
  return (
    <h1
      className={`text-4xl text-tx100 font-filmotype uppercase ${
        className ? className : ''
      }`}
    >
      {children}
    </h1>
  );
};
