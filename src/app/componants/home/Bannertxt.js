import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
// import {Slide} from 'react-reveal/Slide';
import { useWindowSize } from "@react-hook/window-size/throttled";
// import ContactForm from "@/components/ContactPage copy/ContactForm";
// import ServicesOne from "@/components/ServicesOne/ServicesOne";
import BannertxtR from './BannertxtR';
import ContactForm from '../contact/ContactForm';
// import EnquiryForm from '../ContactForm/Enquiry';
// import ContactUs from '../ContactForm/ContactUs';
// import HomeContact from '../ContactPage/HomeContact';

function handleButtonClick() {
  const element = document.getElementById('Contactform');
  element.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick1() {
  const element = document.getElementById('ServicesOne');
  element.scrollIntoView({ behavior: 'smooth' });
}



function Bannertxt() {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;



  if (width > breakpoint) {
    return (

      <>
        <div>
          <Row>
            <Col xl={8} md={6}>
              <div className="bannertxthero">
                <div className="banner-heading">
                  <TypeAnimation
                    sequence={['Over a 1000+ Satisfied Clients were Served in the Year 2023. ', 1000, '']}
                    speed={25}
                    deletionSpeed={99}
                    wrapper="h2"
                    repeat={Infinity}
                  />
                </div>

                <div className="btntxt-hero-btn">
                  <div className="btnContainerdiv">
                    <Button className="heroBtn" onClick={handleButtonClick1} >Our Services</Button>
                    {/* {!<ServicesOne />} */}
                  </div>
                  <div className="btnContainerdiv">
                    <Button className="heroBtn" onClick={handleButtonClick} >Contact Us</Button>
                    {/* {!<ContactForm />} */}
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6}>
              {/* <HomeContact /> */}
              <div className="hero-form">
                {/* <EnquiryForm /> */}
                {/* <ContactUs/> */}
                <ContactForm/>
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
  }
  return (

    <>

      <BannertxtR />
      <video autoPlay loop muted src='https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029'></video>

    </>
  )
}

export default Bannertxt;



