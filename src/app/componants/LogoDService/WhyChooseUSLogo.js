import React from 'react'
import { Container,Col, Row, Image } from 'react-bootstrap'
import whychooseUSlogo from '@/app/data/whychooseUSlogo';
import Designers from "@/assets/images/resources/prf-design.png"  
import grnty from "@/assets/images/resources/100grnty.png"  
import unilogo from "@/assets/images/resources/uni-logo.png"  
import hour from "@/assets/images/resources/247.png"  

const { HeadTitle, WCHTxt1,WCHTxt2, WCHTxt3, WCHTxt4,WCUH1,WCUH2,WCUH3,WCUH4, title10, subtitle6, subtitle7 , subtitle8, 
    subtitle9, subtitle10, tagline, ppcmgmt} = whychooseUSlogo ;

function WhyChooseUSLogo() {
  return (
    <>
     <section className="WhyChooseUSLogo-page">
       <Container>
        <h1>{HeadTitle}</h1>
          <Row>
            <Col xl={6}>
              <div className="BoxWCU1">  
              <Image src={Designers.src} alt=""/> 
                <h1>{WCUH1}</h1>
                <p>{WCHTxt1}</p>    
             </div> 
            </Col>
            <Col xl={6}>
            <div className="BoxWCU1">  
            <Image src={grnty.src} alt=""/> 
                <h1>{WCUH2}</h1>
                <p>{WCHTxt2}</p>    
            </div>
            </Col>    
          </Row>  
          <Row>
            <Col xl={6}>

            <div className="BoxWCU1">  
            <Image src={unilogo.src} alt=""/> 
                <h1>{WCUH3}</h1>
                <p>{WCHTxt3}</p>    
            </div>
            </Col>
            <Col xl={6}>
                <div className="BoxWCU1">  
                <Image src={hour.src} alt=""/> 
                    <h1>{WCUH4}</h1>
                    <p>{WCHTxt4}</p>    
                </div> 
            </Col>    
          </Row>  
        </Container> 
     </section> 
    </>
  )
}

export default WhyChooseUSLogo
