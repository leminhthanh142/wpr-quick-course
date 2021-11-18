import React from "react";
import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Poster } from "../atoms/Poster";

const IMAGES = [
  "https://cf.shopee.sg/file/ef1f3dfe1379a24a2c73cf905cc34489_xxhdpi",
  "https://cf.shopee.sg/file/a2f484aeed0e231b34677cc0d1b925e7_xxhdpi",
  "https://cf.shopee.sg/file/214d9e351a7150ffc3afc36a0c82bb85_xxhdpi",
  "https://cf.shopee.sg/file/c975bb65a3aa2c1e8a2e743a6129af0a_xxhdpi",
  "https://cf.shopee.sg/file/2bbc571d3b2573d1706f3dc38814943a_xxhdpi",
  "https://cf.shopee.sg/file/97ce2af302ce2765f351f51817344206_xxhdpi",
  "https://cf.shopee.sg/file/75e4697902a688cacf4ee548cabb0225_xxhdpi",
];
SwiperCore.use([Autoplay, Pagination, Navigation]);
const Slider = function () {
  return (
    <Container>
      <Swiper
        loop
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        {IMAGES.map((img, i) => (
          <SwiperSlide key={i}>
            <Poster
              directTo="https://www.google.com.vn/"
              imgLink={img}
              posterHeight="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Slider;
const Container = styled.div`
  flex: 2;
  height: 100%;
  overflow: hidden;
  margin-right: 5px;
`;
