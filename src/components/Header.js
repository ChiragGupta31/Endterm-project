import React from 'react'
import { Swiper,SwiperSlide} from 'swiper/react'
import {Autoplay, EffectFade, Navigation, Pagination, Scrollbar} from 'swiper'
import './header.css'
import banner from './banner.jpeg'
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'
import banner4 from './banner4.jpg'


export default function Header() {
  return (
    <Swiper className='swiper-container'

    modules={[Navigation,Pagination,Scrollbar,Autoplay,EffectFade]}

    effect={'fade'}
    slidesPerView={1}
    spaceBetween={20}
    speed={500}
    loop={true}
    pagination={{ 

      el:'.swiper-pagination',
      dynamicBullets:true,
      clickable: true

     }}


     navigation={{
      nextEl:'.swiper-next',
      prevEl:'.swiper-prev'
     }}


     autoplay={{
      delay:3000
     }}

     
    

    
    
    
    
    >
    <div className='swiper-wrapper'>


    <SwiperSlide className='slider-item swiper-slide'>
    <div className='slider-image-wrapper'>
      <img className='slider-image' src={banner4}></img>
    </div>

    </SwiperSlide>


    <SwiperSlide className='slider-item swiper-slide'>
    <div className='slider-image-wrapper'>
      <img className='slider-image' src={banner}></img>
    </div>

    </SwiperSlide>

    <SwiperSlide className='slider-item swiper-slide'>

    <div className='slider-image-wrapper'>
      <img className='slider-image' src={banner1}></img>
    </div>
    </SwiperSlide>

    <SwiperSlide className='slider-item swiper-slide'>
    <div className='slider-image-wrapper'>
      <img className='slider-image' src={banner2}></img>
    </div>
    </SwiperSlide>
    <SwiperSlide className='slider-item swiper-slide'>
    <div className='slider-image-wrapper'>
      <img className='slider-image' src={banner3}></img>
    </div>
    </SwiperSlide>


    

    </div>

    <div className='swiper-prev'><i className="fa-solid fa-angle-left"></i></div>

    <div className='swiper-next'><i className="fa-solid fa-angle-right"></i></div>
    

    <div className='swiper-pagination'></div>  


    </Swiper>


  )
}
