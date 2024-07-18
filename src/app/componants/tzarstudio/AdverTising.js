/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import Slider from "react-slick";
import MobileSlide from "@/assets/images/MobileShowcase/product1.png"
// import MobileMock from "@/assets/images/MobileShowcase/studioframe.png"
import MobileSlide1 from "@/assets/images/MobileShowcase/product2.png"
import MobileSlide2 from "@/assets/images/MobileShowcase/product3.png"
import MobileSlide3 from "@/assets/images/MobileShowcase/product4.png"
import MobileSlide4 from "@/assets/images/MobileShowcase/product5.png"
import MobileSlide5 from "@/assets/images/MobileShowcase/product6.png"
import MobileSlide6 from "@/assets/images/MobileShowcase/social21.png"
import MobileSlide7 from "@/assets/images/MobileShowcase/social22.png"
import MobileSlide8 from "@/assets/images/MobileShowcase/social23.png"
import MobileSlide9 from "@/assets/images/MobileShowcase/social13.png"
import MobileSlide10 from "@/assets/images/MobileShowcase/social24.png"
import MobileSlide11 from "@/assets/images/MobileShowcase/social25.png"
import MobileSlide12 from "@/assets/images/MobileShowcase/social16.png"
import MobileSlide13 from "@/assets/images/MobileShowcase/social17.png"
import MobileSlide14 from "@/assets/images/MobileShowcase/social18.png"
import MobileSlide15 from "@/assets/images/MobileShowcase/social19.png"
import MobileSlide16 from "@/assets/images/MobileShowcase/social20.png"
import { Container } from "react-bootstrap";




export default class AdverTising extends Component {
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
                            <img src={MobileSlide5.src} alt="studioimg" className="mobileSlideframestudio" />
                        </div>
                        <div className="studioSlidebox" >
                        <img src={MobileSlide6.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide7.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide8.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide9.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide10.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide11.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide12.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide13.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide14.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide15.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    <div className="studioSlidebox" >
                        <img src={MobileSlide16.src} alt="studioimg" className="mobileSlideframestudio" />
                    </div>
                    </Slider>
                {/* </div> */}
            </Container>


        );
    }
}