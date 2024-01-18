'use client';
import { useState } from 'react';

import { Logo, SearchHeader, MarginPage, Drawer } from '@/components';
import { MenuIcon } from '@/icons/MenuIcon';

export const Header = () => {
  const [showDrawer, setShowDrawer] = useState<Boolean>(false);

  const handleShowDrawer = () => {
    setShowDrawer((value) => !value);
  };

  return (
    <header id='header-page' className='fixed z-50 w-full '>
      <MarginPage className='flex items-center py-4'>
        <Logo className='flex flex-grow basis-0'>R&R:Anime</Logo>

        <SearchHeader className='w-[500px] hidden lg:block' />

        <div className='flex flex-grow basis-0 justify-end'>
          <button
            onClick={handleShowDrawer}
            className='hover:bg-bg300/40 p-1 rounded-full'
          >
            <MenuIcon width={40} height={40} className='fill-tx100' />
          </button>
        </div>
      </MarginPage>
      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </header>
  );
};
