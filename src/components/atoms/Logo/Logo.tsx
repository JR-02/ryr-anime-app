import Link from 'next/link';

interface Props {
  className?: string;
  children: string;
}
export const Logo = ({ children, className }: Props) => {
  return (
    <Link
      href='/'
      className={`text-4xl text-tx100 font-filmotype uppercase ${
        className ? className : ''
      }`}
    >
      {children}
    </Link>
  );
};
