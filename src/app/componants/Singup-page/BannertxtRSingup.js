"use client"
import React from 'react'
// import ContactForm from "@/components/ContactPage copy/ContactForm";
// import ServicesOne from "@/components/ServicesOne/ServicesOne";
import { TypeAnimation } from 'react-type-animation';
import { Button, Row, Col, Image } from 'react-bootstrap'
// import HomeContact from '../ContactPage/HomeContact';

function handleButtonClick() {
  const element = document.getElementById('Contactform');
  element.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick1() {
  const element = document.getElementById('ServicesOne');
  element.scrollIntoView({ behavior: 'smooth' });
}


function BannertxtRSingup() {
  return (
    <>
      <Row>
        <Col xl={8} md={6} sm={12}>
          <div className="bannertxt-mob">
            <div className='singup-tzarlogo'>
              <Image src="/White_Tzar.png" alt="description of image" width="80" />
            </div>

            <TypeAnimation
              sequence={['Over a 1000+ Satisfied Clients were Served in the Year 2023.', 1000, '']}
              speed={25}
              deletionSpeed={99}
              wrapper="h1"
              repeat={Infinity}
            />

            {/* <div className="btnContainer">
              <Button className="BtnServices" onClick={handleButtonClick1} >Our Services</Button>
              {!<ServicesOne />}
            </div>
            <div className="btnContainer1">
              <Button className="BtnContact" onClick={handleButtonClick} >Contact Us</Button>
              {!<ContactForm />}
            </div> */}

          </div>
        </Col>

      </Row>
      {/* <Col xl={4} md={4} sm={4}> */}
      {/* <HomeContact /> */}
      {/* </Col> */}

    </>
  )
}

export default BannertxtRSingup