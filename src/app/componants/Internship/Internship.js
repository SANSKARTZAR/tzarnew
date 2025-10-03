import intership from "@/app/data/intership";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import lady1 from "@/assets/images/resources/jobs/1-2.png"
const { images, badge, tagline, Ititle, text1, text2 } = intership;

const Intership = () => {
  

  return (
    <section className="intership__page">
      <Container>
        <Row>

          <Col xl={12}>
          <div className="intership__right">
            
              <h6 className="Itext-lefth6">{tagline}</h6>
              <h1 className="Itext-left">{Ititle}</h1>
              {/* <Title title={jtitle} tagline={tagline} className="Itext-left" /> */}
              <p className="intership__right-text-1">{text1}</p>
              <h4 className="intership__right-text-2">{text2}</h4>
            </div>
          </Col>
          <Col xl={6}>
        
             <div className="hiringCard3">
               <Image src={lady1.src}alt=""/>       
                <h1>Social Media Marketing Intern</h1>
                <p>We are looking for creative and active mind who is pro with social media marketing techniques specifically with instagram and facebook You can send us your resume corporate@tzar.co.</p>
                <a className="thm-btn intership__btn"  href="/internship" >Apply Now</a>
             </div>
          </Col>
          <Col xl={6}>
          <div className="hiringCard4">
              <Image src={lady1.src}alt=""/>       
                <h1>Content Writer Intern</h1>
                <p>With an experience of 2-4 years with Digital Marketing Agency and an aptitude to work on target basis.</p>
                <a className="thm-btn intership__btn1"  href="/internship" >Apply Now</a>
               
             </div>

          </Col>
          </Row>
     </Container>
     
    </section>
  );
};

export default Intership;
