import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Lazy, Navigation } from 'swiper';

import { SLIDER_CONSTANT } from 'constants/CarouselConstant';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Carousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className='relative px-6 pb-16 sm:px-0'>
      <div className='swiper coverflow-slider !pt-5'>
        <Swiper
          effect='coverflow'
          modules={[EffectCoverflow, Navigation, Lazy]}
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
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={swiper => {
            //@ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            //@ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className='swiper-wrapper !pb-6'
        >
          {SLIDER_CONSTANT.map(slider => (
            <SwiperSlide className='swiper-slide' key={`${slider.nftName}_slider`}>
              <article>
                <div className='block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700'>
                  <figure className='relative'>
                    <a href='#'>
                      <img
                        src={`${slider.nftImage}`}
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
                        <img src={`${slider.userAvatar}`} alt='' className='mr-4 h-10 w-10 rounded-full' />
                      </a>
                      <div>
                        <a href='#' className='block'>
                          <span className='font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white'>
                            {slider.nftName}
                          </span>
                        </a>
                        <a href='#' className='text-2xs text-accent'>
                          {slider.creator}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}

          <div
            ref={navigationPrevRef}
            className='group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 group-hover:fill-accent'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z' />
            </svg>
          </div>
          <div
            ref={navigationNextRef}
            className='group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 group-hover:fill-accent'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
