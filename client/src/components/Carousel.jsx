import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
  Scrollbar,
  EffectFade,
  Autoplay,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import slide1 from '../assets/images/1.jpg';
import slide2 from '../assets/images/2.jpg';
import slide3 from '../assets/images/3.jpg';
import slide4 from '../assets/images/4.jpg';

const Carousel = () => {
  const slides = [
    {
      id: '1',
      src: slide1,
      alt: 'slide one',
    },
    {
      id: '2',
      src: slide2,
      alt: 'slide two',
    },
    {
      id: '3',
      src: slide3,
      alt: 'slide three',
    },
    {
      id: '4',
      src: slide4,
      alt: 'slide four',
    },
  ];
  SwiperCore.use([Pagination, Scrollbar, EffectFade, Autoplay]);

  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        effect="fade"
        id="main"
        className="rounded-lg "
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
