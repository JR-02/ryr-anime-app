import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  children: string | React.ReactNode;
  onClick: () => void;
}

export const LinkNavbar = ({ path, children, onClick }: Props) => {
  const currentPath = usePathname();

  return (
    <Link
      onClick={onClick}
      href={path}
      className={`flex items-center gap-4 text-tx100 font-medium w-full bg-bg100 py-4 pl-4 hover:bg-bg200 rounded-md ${
        currentPath === path ? 'bg-primary100 hover:bg-primary100' : ''
      }`}
    >
      {children}
    </Link>
  );
};
