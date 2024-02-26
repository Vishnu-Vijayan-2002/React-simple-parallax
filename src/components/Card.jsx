import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Card() {
  return (
    <div className='container'>
      <h1 style={{color:'blue'}} className='heading'>Space Gallery</h1>
      <Swiper effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={
        {   rotate:0,
            stretch:0,
            depth:10,
            modifier:2.5
        }
      }className='swiper_container'>
        <SwiperSlide>
            <img src='https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600' alt='slide_image'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600' alt='slide_image'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=600' alt='slide_image'></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.pexels.com/photos/23781/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt='slide_image'></img>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Card
