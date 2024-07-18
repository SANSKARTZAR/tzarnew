/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide from "@/assets/images/MobileShowcase/foods1.png"
// import MobileMock from "@/assets/images/MobileShowcase/studioframe.png"
import MobileSlide1 from "@/assets/images/MobileShowcase/foods2.png"
import MobileSlide2 from "@/assets/images/MobileShowcase/foods3.png"
import MobileSlide3 from "@/assets/images/MobileShowcase/foods4.png"
import MobileSlide4 from "@/assets/images/MobileShowcase/foods5.png"
import MobileSlide5 from "@/assets/images/MobileShowcase/foods6.png"
// import MobileSlide6 from "@/images/MobileShowcase/Showcase-13.png"
// import MobileSlide7 from "@/images/MobileShowcase/Showcase-14.png"
// import MobileSlide8 from "@/images/MobileShowcase/Showcase-15.png"
// import MobileSlide9 from "@/images/MobileShowcase/Showcase-16.png"
// import MobileSlide10 from "@/images/MobileShowcase/Showcase-17.png"
import { Container } from "react-bootstrap";




export default class Food extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            autoplay: true,
            slidesToShow: 4,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 500
        };
        return (

            <Container> 
            {/* <div className="studiosliderbox"> */}

                <Slider {...settings} className="ContainerWebContainerframestudio">
                    <div className="studioSlidebox" >
                        <img src={MobileSlide.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide1.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide2.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide3.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide4.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                     <div className="studioSlidebox" >
                        <img src={MobileSlide5.src} alt="" className="mobileSlideframestudio" />
                    </div>
                   {/* <div className="studioSlidebox" >
                        <img src={MobileSlide6.src} alt="" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide7.src} alt="" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide8.src} alt="" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide9.src} alt="" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide10.src} alt="" className="mobileSlideframestudio" />
                    </div> */}
                </Slider>
            {/* </div> */}
            </Container>

        );
    }
}
