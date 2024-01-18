import Link from 'next/link';

interface Props {
  href: string;
  children: string | React.ReactNode;
}

export const LinkNavbar = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className='flex items-center gap-4 text-tx100 font-medium w-full bg-bg100 py-4 pl-4 hover:bg-bg200 rounded-md'
    >
      {children}
    </Link>
  );
};
