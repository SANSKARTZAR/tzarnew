"use client"
import React from 'react'
import { Button, Col, Row , Image} from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import { useWindowSize } from "@react-hook/window-size/throttled";
// import ContactForm from "@/components/ContactPage copy/ContactForm";
// import ServicesOne from "@/components/ServicesOne/ServicesOne";
// import BannertxtR from './BannertxtR';
// import HomeContact from '../ContactPage/HomeContact';
// import SingupForm from '../SingupPage/SingupForm';
// import MumbaiForm from '../SingupPage/MumbaiForm';

function handleButtonClick() {
    const element = document.getElementById('Contactform');
    element.scrollIntoView({ behavior: 'smooth' });
}

function handleButtonClick1() {
    const element = document.getElementById('ServicesOne');
    element.scrollIntoView({ behavior: 'smooth' });
}



function SingupBannertxt() {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;



    //   if (width > breakpoint) {
    return (

        <>
            <Row>
                <Col xl={8} md={6}>
                 <Image className='singup-logoimgs' src="/White_Tzar.png" alt="description of image" width="100"/>
                    <div className="bannertxt">
                    <br/> <br/> 
                        <TypeAnimation
                            sequence={['Over a 1000+ Satisfied Clients were Served in the Year 2023. ', 1000, '']}
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
                <Col xl={4} md={6}>
                    {/* <SingupForm /> */}
                    {/* <MumbaiForm /> */}
                </Col>
            </Row>

        </>
    )
}
//   return (

//     <>

//       <BannertxtR />
//       {/* <HomeContact /> */}
//     </>
//   )
// }

export default SingupBannertxt



