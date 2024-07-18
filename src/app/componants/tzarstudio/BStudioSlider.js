
"use client";
import React from 'react'
import Slider from 'react-slick'
import { useWindowSize } from "@react-hook/window-size/throttled";
import StudioBanner from "./StudioBanner";

function BStudioSlider() {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1, 
    fadeSpeed: 100,
    speed: 500,
    lazyLoad: true,
    focusOnSelect: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  if (width > breakpoint) {
    return (
      <>
        <StudioBanner />
      </>
    )
  }
  return (
    <Slider {...settings}>

      <div>
        <StudioBanner />
      </div>
    </Slider>
  );
}
export default BStudioSlider;
