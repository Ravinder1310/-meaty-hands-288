import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Image } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // justifyContent='center'
        
      >
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/cover/1920x770cd5550fd6fe64ed19f73339697501913a1ebe2567d824021883c08f193544046.jpg' />
       </SwiperSlide>
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/cover/1920x7701789cd01c98a4b098ff87b399b61530c3e52cc15ff174f4689cc1ebefe5b40ff.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250530/cover/1920x770129e19e854434fa98ff8734cfc2d6d32e0963a08143b47459c03e15212307595.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/cover/1920x770146d749f8ff14971b38653f6029302ad.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770df39a953f65e4e66a5e2a7c7748f63b5.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x7707680c95e70a24006bd090c775c8000f5.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/cover/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg'/>
            </SwiperSlide>
       
      </Swiper>
    </>
  );
}
