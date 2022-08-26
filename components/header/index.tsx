import React from 'react';

import ConnetWallet from '../wallet';
import { navbarDropdown } from '../../constants/DropdownConstants';
import ProfileDropdown from '../profile/ProfileDropdown';

const Header = () => {
  return (
    <header className='js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors'>
      <div className='flex items-center px-6 py-6 xl:px-24'>
        {/* <!-- Logo --> */}
        <a href='/' className='shrink-0'>
          <img src='img/logo.png' className='max-h-7' alt='' />
          <img src='img/logo_white.png' className='hidden max-h-7 dark:block' alt='' />
        </a>
        {/* <!-- Menu / Actions --> */}
        <div className='js-mobile-menu invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 dark:bg-jacarta-800 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent'>
          {/* <!-- Primary Nav --> */}
          <nav className='navbar w-full'>
            <ul className='flex flex-col lg:flex-row'>
              {navbarDropdown.map(item => {
                return (
                  <li className='group relative' key={`${item?.navItem}_navItem`}>
                    <a className='dropdown-toggle flex items-center justify-between py-3.5 font-display text-base text-jacarta-700 hover:text-accent focus:text-accent dark:text-white dark:hover:text-accent dark:focus:text-accent lg:px-5'>
                      {item?.navItem}
                    </a>
                    {item?.dropdownItems && item?.dropdownItems?.length > 0 ? (
                      <ul className={item?.className}>
                        {item?.dropdownItems?.map((dropdownItem: { name: string; svg?: JSX.Element }) => {
                          return (
                            <li key={`${dropdownItem?.name}_dropdownItem`}>
                              <a className='flex items-center rounded-xl px-5 py-2 transition-colors hover:bg-jacarta-50 hover:text-accent focus:text-accent dark:hover:bg-jacarta-600'>
                                {dropdownItem?.svg}
                                <span className='font-display text-sm text-jacarta-700 dark:text-white'>{dropdownItem?.name}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* <!-- Actions --> */}
          <div className='ml-8 hidden lg:flex xl:ml-12'>
            {/* <!-- Wallet --> */}
            <ConnetWallet />

            {/* <!-- Profile --> */}
            <ProfileDropdown />
          </div>
        </div>

        {/* <!-- Mobile Menu Actions --> */}
        <div className='ml-auto flex lg:hidden'>
          {/* <!-- Profile --> */}
          <a
            href='#'
            className='group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent'
            aria-label='profile'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z' />
            </svg>
          </a>

          {/* <!-- Mobile Menu Toggle --> */}
          <button
            className='js-mobile-toggle group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent'
            aria-label='open mobile menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
