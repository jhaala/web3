import React from 'react';
import Searchbar from '../search/Searchbar';
import RecentSearches from '../search/RecentSearches';

const Hero = () => {
  return (
    <main>
      <section className='hero relative py-20 md:pt-32'>
        <picture className='pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden'>
          <img src='img/gradient.jpg' alt='' />
        </picture>
        <picture className='pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block'>
          <img src='img/gradient_dark.jpg' alt='' />
        </picture>

        <div className='container'>
          <div className='mx-auto max-w-2xl pt-24 text-center'>
            <h1 className='mb-10 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl'>
              Discover, Collect & Sell <span className='animate-gradient'>Creative NFTs</span>
            </h1>
            <Searchbar />
            <RecentSearches />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
