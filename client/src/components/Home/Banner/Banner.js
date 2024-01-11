import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../../utils/data";
import "react-multi-carousel/lib/styles.css";
import "./Banner.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      responsive={responsive}
    >
      {bannerData?.length > 0
        ? bannerData.map((banner, index) => {
            return banner ? (
              <img key={banner.url + index} src={banner.url} alt="banner_img" />
            ) : null;
          })
        : null}
    </Carousel>
  );
};

export default Banner;
