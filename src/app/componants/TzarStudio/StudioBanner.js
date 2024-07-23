/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import { useWindowSize } from "@react-hook/window-size/throttled";
import ContactForm from '../contact/ContactForm';

function handleButtonClick() {
    const element = document.getElementById('Contactform');
    element.scrollIntoView({ behavior: 'smooth' });
}


function StudioBanner() {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;



    if (width > breakpoint) {
        return (
            <>
                <div className='studio-header'>
                    <Row>
                        <Col xl={4} md={12} sm={12}>
                            <div className="lense">
                                <span className='banner-text'>LIGHTS</span>
                                <div className='studio-lense-color'>
                                    <img className='my-img' src="/camlense.png" alt="description of image" width="350" height="350" />
                                </div>
                                <span className='banner-text'>IMAGINATION</span>
                            </div>
                        </Col>
                        <Col xl={4} md={12} sm={12}>
                            <div className='bannertext-box'>
                                <div className="studio-bannertxt">
                                    <span className='banner-text cameratext'>CAMERA</span>
                                    <TypeAnimation
                                        sequence={['PRODUCT PHOTOGRAPHY SERVICES ', 1000, '']}
                                        speed={25}
                                        deletionSpeed={99}
                                        wrapper="h3"
                                        repeat={Infinity}
                                    />
                                </div>
                                <div className="studio-btnContainer">
                                    <Button className="BtnStudio" href='/services' >Our Services</Button>
                                    {/* {!<ServicesOne />} */}

                                    <Button className="BtnStudio" onClick={handleButtonClick} >Enquiry Now</Button>

                                </div>
                            </div>
                        </Col>
                        <Col xl={4} md={12} sm={12}>
                            <div className="hero-form">
                                <ContactForm />
                            </div>
                        </Col>
                    </Row>
                </div>

            </>
        )
    }
    return (

        <>
            <div className='studio-header'>
                <Row>
                    <Col xl={4} md={12} sm={12}>
                        <div className="lense">
                            <span className='banner-text'>LIGHTS</span>
                            <div className='studio-lense-color'>
                                <img className='my-img' src="/camlense.png" alt="description of image" width="400" height="400" />
                            </div>
                            <span className='banner-text'>IMAGINATION</span>
                        </div>
                    </Col>
                    <Col xl={4} md={12} sm={12} >

                        <div className="studio-bannertxt">
                            <span className='banner-text cameratext'>CAMERA</span>
                            <TypeAnimation
                                sequence={['PRODUCT PHOTOGRAPHY SERVICES ', 1000, '']}
                                speed={25}
                                deletionSpeed={99}
                                wrapper="h3"
                                repeat={Infinity}
                            />
                        </div>
                        <div className="studio-btnContainer">
                            <Button className="BtnStudio" href='/services' >Our Services</Button>
                            {/* {!<ServicesOne />} */}

                            <Button className="BtnStudio" onClick={handleButtonClick} >Enquiry Now</Button>

                        </div>

                    </Col>
                    <Col xl={4} md={12} sm={12} >
                        {/* <StudioContact /> */}
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default StudioBanner;



