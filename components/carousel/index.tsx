import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

import 'swiper/css';

const Carousel = () => {
  return (
    <div className='relative px-6 pb-16 sm:px-0'>
      <div className='swiper coverflow-slider !py-5'>
        <Swiper
          // install Swiper modules
          effect='coverflow'
          modules={[EffectCoverflow]}
          speed={400}
          loop={true}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView='auto'
          slidesPerGroup={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 0.5,
            slideShadows: true,
          }}
          breakpoints={{
            560: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          preloadImages={true}
          lazy={true}
          className='swiper-wrapper'
        >
          <SwiperSlide className='swiper-slide'>
            <article>
              <div className='block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700'>
                <figure className='relative'>
                  <a href='#'>
                    <img
                      src='./img/products/item_13_lg.gif'
                      alt=''
                      className='swiper-lazy h-[430px] w-full object-cover'
                      height='430'
                      width='379'
                    />
                    <div className='swiper-lazy-preloader'></div>
                  </a>
                </figure>
                <div className='p-6'>
                  <div className='flex'>
                    <a href='#' className='shrink-0'>
                      <img src='img/avatars/avatar_18_rounded.gif' alt='' className='mr-4 h-10 w-10 rounded-full' />
                    </a>
                    <div>
                      <a href='#' className='block'>
                        <span className='font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white'>
                          Etherium NFT Launching Lab
                        </span>
                      </a>
                      <a href='#' className='text-2xs text-accent'>
                        051_Hart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <article>
              <div className='block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700'>
                <figure className='relative'>
                  <a href='#'>
                    <img
                      src='./img/products/item_12_lg.jpg'
                      alt=''
                      height='430'
                      width='379'
                      className='swiper-lazy h-[430px] w-full object-cover'
                    />
                    <div className='swiper-lazy-preloader'></div>
                  </a>
                </figure>
                <div className='p-6'>
                  <div className='flex'>
                    <a href='#' className='shrink-0'>
                      <img src='img/avatars/avatar_17_rounded.jpg' alt='' className='mr-4 h-10 w-10 rounded-full' />
                    </a>
                    <div>
                      <a href='#' className='block'>
                        <span className='font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white'>
                          Light Bars
                        </span>
                      </a>
                      <a href='#' className='text-2xs text-accent'>
                        Wow Frens
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <article>
              <div className='block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700'>
                <figure className='relative'>
                  <a href='#'>
                    <img
                      src='./img/pixel.jpg'
                      data-src='./img/products/item_14_lg.jpg'
                      alt=''
                      className='swiper-lazy h-[430px] w-full object-cover'
                      height='430'
                      width='379'
                    />
                    <div className='swiper-lazy-preloader'></div>
                  </a>
                </figure>
                <div className='p-6'>
                  <div className='flex'>
                    <a href='#' className='shrink-0'>
                      <img src='img/avatars/avatar_19_rounded.jpg' alt='' className='mr-4 h-10 w-10 rounded-full' />
                    </a>
                    <div>
                      <a href='#' className='block'>
                        <span className='font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white'>
                          Amazing NFT art
                        </span>
                      </a>
                      <a href='#' className='text-2xs text-accent'>
                        Lila Spacex
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <article>
              <div className='block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700'>
                <figure className='relative'>
                  <a href='#'>
                    <img
                      src='./img/pixel.jpg'
                      data-src='./img/products/item_15_lg.jpg'
                      alt=''
                      className='swiper-lazy h-[430px] w-full object-cover'
                      height='430'
                      width='379'
                    />
                    <div className='swiper-lazy-preloader'></div>
                  </a>
                </figure>
                <div className='p-6'>
                  <div className='flex'>
                    <a href='#' className='shrink-0'>
                      <img src='img/avatars/avatar_20_rounded.jpg' alt='' className='mr-4 h-10 w-10 rounded-full' />
                    </a>
                    <div>
                      <a href='#' className='block'>
                        <span className='font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white'>
                          SwagFox#133
                        </span>
                      </a>
                      <a href='#' className='text-2xs text-accent'>
                        Bored Bunny
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
