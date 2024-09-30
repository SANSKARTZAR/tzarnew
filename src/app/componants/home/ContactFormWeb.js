'use client';
import React, { useEffect, useRef } from 'react'
import contactForm from "@/app/data/contactForm";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from '../contact/ContactForm';
import WebServicesContactForm from '../contact/WebServiceContactForm';


const { bg, Ftitle, tagline, inputs } = contactForm;
function ContactFormWeb() {
  return (
    <>
      <section id="Contactform" className="ContactForm-page">
        <div
          className="counter-one-pattern"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <Row>
            <Col xl={6} md={12}>
              <div className="form-dev-enquiry">
                <WebServicesContactForm/>
              </div>
            </Col>
            <Col xl={6} md={12}>
              <div className="ContactForm-page__right">
                <div className="boximp">
                  <h6>TZAR DIGITAL MARKETING AGENCY</h6>
                  <h1>We Can Get <b className="highlight">Massive</b> Traffic To Your Website</h1>
                  <p>SEO | Content Marketing | Paid Search Marketing | Social Media | Analytics | Programmatic Advertising</p>
                  <div className="important">
                    <h5><b className="highlight1">SEO</b> – Bring huge traffic through SEO strategies.</h5>
                    <h5><b className="highlight1">Paid Media</b> – Strategies with guaranteed ROI.</h5>
                    <h5><b className="highlight1">Content Marketing</b> – Attractive and creative content which will increase customer engagement and traffic.</h5>
                  </div>
                  <div><p style={{ display: 'none' }}>DateCreated</p></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default ContactFormWeb;
