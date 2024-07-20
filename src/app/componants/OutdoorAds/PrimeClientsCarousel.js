// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MobileSlide1 from "@/assets/images/iconicbrands/p1.png" 
import MobileSlide2 from "@/assets/images/iconicbrands/p2.png" 
import MobileSlide3 from "@/assets/images/iconicbrands/p3.png" 
import MobileSlide4 from "@/assets/images/iconicbrands/p4.png" 
import MobileSlide5 from "@/assets/images/iconicbrands/p5.png" 
import MobileSlide6 from "@/assets/images/iconicbrands/p6.png" 
import MobileSlide7 from "@/assets/images/iconicbrands/p7.png" 
import MobileSlide8 from "@/assets/images/iconicbrands/p8.png" 
import MobileSlide9 from "@/assets/images/iconicbrands/p9.png" 
import MobileSlide10 from "@/assets/images/iconicbrands/p10.png" 

const PrimeClientCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    MobileSlide1.src,
    MobileSlide2.src,
    MobileSlide3.src,
    MobileSlide4.src,
    MobileSlide5.src,
    MobileSlide6.src,
    MobileSlide7.src,
    MobileSlide8.src,
    MobileSlide9.src,
    MobileSlide10.src,
  ];

  return (
    <div className="carouselContainer">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='slide'>
            <img src={image} alt={`Slide ${index}`} className='image'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PrimeClientCarousel;
