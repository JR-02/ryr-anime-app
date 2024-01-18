import { LinkNavbar } from '@/components';

export const NavbarHeader = () => {
  const LinkDirectory = [
    {
      content: 'Home',
      href: '/',
    },
    {
      content: 'Category',
      href: '/category',
    },
    {
      content: 'List Anime',
      href: '/listanime',
    },
    {
      content: 'In broadcast',
      href: '/in-broadcast',
    },
  ];

  return (
    <nav className='flex gap-4 border-r-[1px] border-gray-400/50 pr-3'>
      {LinkDirectory.map((element) => (
        <LinkNavbar href={element.href} key={element.content}>
          {element.content}
        </LinkNavbar>
      ))}
    </nav>
  );
};
