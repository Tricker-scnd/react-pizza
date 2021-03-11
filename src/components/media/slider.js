import React, {useRef} from 'react';

import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);



function Slider() {

    const slides = ['slide1.jpg','slide2.jpg','slide3.jpg','slide1.jpg','slide2.jpg','slide3.jpg']

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)


    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3900,
          disableOnInteraction: false
        }}  
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
          {
              slides.map((s,i)=>
              <SwiperSlide key={s+i}>
                  <div className="head-banner-slider__slide-wrapper">
                      <img src={"./images/"+s} alt="" />
                  </div>
              </SwiperSlide>
          )
          }
          <div className="head-banner-nav">
          <span ref={navigationPrevRef} className="head-banner-nav__arrow arrow--left"></span>
          <span ref={navigationNextRef} className="head-banner-nav__arrow arrow--right"></span>
      </div>
    </Swiper>
    );
}

export default Slider;