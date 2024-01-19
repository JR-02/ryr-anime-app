import { LinkNavbar, SearchHeader } from '@/components';
import { HomeIcon, ListIcon, CategoryIcon, MenuIcon } from '@/icons';

interface DrawerProps {
  showDrawer: Boolean;
  setShowDrawer: any;
}

export const Drawer = ({ showDrawer, setShowDrawer }: DrawerProps) => {
  const handleShowDrawer = () => {
    setShowDrawer((value: Boolean) => !value);
  };

  const links = [
    {
      title: 'Home',
      icon: <HomeIcon className='fill-tx100' />,
      path: '/',
    },
    {
      title: 'List',
      icon: <ListIcon className='fill-tx100' />,
      path: '/list',
    },
    {
      title: 'Categories',
      icon: <CategoryIcon className='fill-tx100' />,
      path: '/categories',
    },
  ];

  return (
    <section>
      {showDrawer && (
        <div
          onClick={handleShowDrawer}
          className='fixed bg-[#000]/70 inset-0 z-40 h-screen'
        />
      )}
      <section
        className={`flex flex-col gap-4 fixed z-50 bg-bg100 w-[250px] h-screen ${
          showDrawer ? 'right-0' : '-right-[250px]'
        } top-0 p-4 duration-200`}
      >
        <div className='w-full rounded p-1 flex items-center'>
          <button
            onClick={handleShowDrawer}
            className='hover:bg-bg300/40 p-1 rounded-full'
          >
            <MenuIcon width={40} height={40} className='fill-tx100' />
          </button>
          <span className='uppercase text-xl font-semibold text-tx100 text-center flex-grow'>
            R&R:Anime
          </span>
        </div>

        <SearchHeader className='w-full bg-bg200 lg:hidden' />

        <nav className='w-full flex flex-col gap-2'>
          {links.map(({ title, icon, path }) => (
            <LinkNavbar onClick={handleShowDrawer} path={path} key={title}>
              {icon}
              {title}
            </LinkNavbar>
          ))}
        </nav>
      </section>
    </section>
  );
};
