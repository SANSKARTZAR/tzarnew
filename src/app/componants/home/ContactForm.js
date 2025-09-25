import React from 'react';
import contactForm from "@/app/data/contactForm";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from '../contact/ContactForm';

const { bg } = contactForm;

function ContactFormSection() {
  return (
    <section id="Contactform" className="ContactForm-page" style={{ position: "relative" }}>
      <div
        className="counter-one-pattern"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: -1,
        }}
      ></div>

      <Container className="py-5">
        <Row className="align-items-start justify-content-center">
          {/* Contact Form Column */}
          <Col xs={12} lg={5} className="mb-4 mb-lg-0 px-2">
            <div className="form-dev-enquiry">
              <ContactForm />
            </div>
          </Col>

          {/* Text Content Column */}
          <Col xs={12} lg={5} className="px-2">
            <div className="ContactForm-page__right text-start">
              <div className="boximp">
                <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: '1rem' }}>
                  TZAR DIGITAL MARKETING AGENCY
                </h6>

                <h1 className="fw-bold mb-3" style={{ fontSize: '1.8rem', lineHeight: '1' }}>
                  We Can Get <span className="highlight" style={{ color: '#003366' }}>Massive</span> Traffic To Your Website
                </h1>

                <p className="mb-3" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#333' }}>
                  SEO | Content Marketing | Paid Search Marketing | Social Media | Analytics | Programmatic Advertising
                </p>

                <div className="important">
                  <h5 style={{ fontSize: '1rem', marginBottom: '10px' }}>
                    <span className="highlight1" style={{ color: '#003366', fontWeight: 'bold' }}>SEO</span> – Bring huge traffic through SEO strategies.
                  </h5>
                  <h5 style={{ fontSize: '1rem', marginBottom: '10px' }}>
                    <span className="highlight1" style={{ color: '#003366', fontWeight: 'bold' }}>Paid Media</span> – Strategies with guaranteed ROI.
                  </h5>
                  <h5 style={{ fontSize: '1rem' }}>
                    <span className="highlight1" style={{ color: '#003366', fontWeight: 'bold' }}>Content Marketing</span> – Attractive and creative content which will increase customer engagement and traffic.
                  </h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactFormSection;
