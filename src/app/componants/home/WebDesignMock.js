/* eslint-disable @next/next/no-img-element */
'use client';
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide from "@/assets/images/MobileShowcase/Home/Showcase-06.png"
import MobileMock from "@/assets/images/MobileShowcase/Home/Showcase-12.png"
import MobileMockmob from "@/assets/images/MobileShowcase/Home/Showcase-12mob.png"
import MobileSlide1 from "@/assets/images/MobileShowcase/Home/Showcase-07.png"
import MobileSlide2 from "@/assets/images/MobileShowcase/Home/Showcase-08.png"
import MobileSlide3 from "@/assets/images/MobileShowcase/Home/Showcase-09.png"
import MobileSlide4 from "@/assets/images/MobileShowcase/Home/Showcase-10.png"
import MobileSlide5 from "@/assets/images/MobileShowcase/Home/Showcase-11.png"
import MobileSlide6 from "@/assets/images/MobileShowcase/Home/Showcase-13.png"
import MobileSlide7 from "@/assets/images/MobileShowcase/Home/Showcase-14.png"
// import MobileSlide8 from "@/assets/images/MobileShowcase/Home/Showcase-15.png" 
// import MobileSlide9 from "@/assets/images/MobileShowcase/Home/Showcase-16.png" 
// import MobileSlide10 from "@/assets/images/MobileShowcase/Home/Showcase-17.png" 
// import MobileSlide11 from "@/assets/images/MobileShowcase/Home/MahaaRajass.png" 
// import MobileSlide12 from "@/assets/images/MobileShowcase/Home/CabeoChavess.png" 
// import MobileSlide13 from "@/assets/images/MobileShowcase/Home/blue7vets.png" 
// import MobileSlide14 from "@/assets/images/MobileShowcase/Home/epitomess.png" 



export default class WebDesignMock extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      autoplay: true,
      slidesToShow: 6,
      arrows: false,
      autoplaySpeed: 1000,
      speed: 500
    };
    return (
      <>
        <section>
          <div className="ContainerWeb">
            <div className="section-titlemk text-center">
              <p className="section-title__taglinemk">Website Design & Development</p>
              <h2 className="section-title__titlemk">Shocase Mockup</h2>
            </div>
            <img src={MobileMock.src} alt="" className="mobileCont" />
            <img src={MobileMockmob.src} alt="" className="mobileContmob" />

            <Slider {...settings} className="ContainerWebContainer">
              <div className="mobileSlidebox" >
                <img src={MobileSlide.src} alt="" className="mobileSlidemk n" />
              </div>
              {/* <div className= "mobileSlidebox" >
            <img src={MobileSlide11.src} alt=""  className="mobileSlidemk"  />  
          </div>
          <div className= "mobileSlidebox" >
            <img src={MobileSlide12.src} alt=""  className="mobileSlidemk"  />  
          </div>
          <div className= "mobileSlidebox" >
            <img src={MobileSlide13.src} alt=""  className="mobileSlidemk"  />  
          </div>
          <div className= "mobileSlidebox" >
            <img src={MobileSlide14.src} alt=""  className="mobileSlidemk"  />  
          </div> */}
              <div className="mobileSlidebox" >
                <img src={MobileSlide1.src} alt="" className="mobileSlidemk" />
              </div>
              <div className="mobileSlidebox" >
                <img src={MobileSlide2.src} alt="" className="mobileSlidemk" />
              </div>
              <div className="mobileSlidebox" >
                <img src={MobileSlide3.src} alt="" className="mobileSlidemk" />
              </div>
              <div className="mobileSlidebox" >
                <img src={MobileSlide4.src} alt="" className="mobileSlidemk" />
              </div>
              <div className="mobileSlidebox" >
                <img src={MobileSlide5.src} alt="" className="mobileSlidemk" />
              </div>
              <div className="mobileSlidebox" >
                <img src={MobileSlide6.src} alt="" className="mobileSlidemk" />
              </div>
              <div className="mobileSlidebox" >
                <img src={MobileSlide7.src} alt="" className="mobileSlidemk" />
              </div>
              {/* <div className= "mobileSlidebox" >
            <img src={MobileSlide8.src} alt=""  className="mobileSlidemk"  />  
          </div>
          <div className= "mobileSlidebox" >
            <img src={MobileSlide9.src} alt=""  className="mobileSlidemk"  />  
          </div>
          <div className= "mobileSlidebox" >
            <img src={MobileSlide10.src} alt=""  className="mobileSlidemk"  />  
          </div> */}
            </Slider>
          </div>
        </section>
      </>
    );
  }
}