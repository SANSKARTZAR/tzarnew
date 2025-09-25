'use client';

import React, { useState } from "react";
import { Col, Container, Image, Row, Modal, Button } from "react-bootstrap";
import lady1 from "@/assets/images/resources/jobs/1-2.png";
import intership from "@/app/data/intership";

const { images, badge, tagline, Ititle, text1, text2 } = intership;

const Intership = () => {
  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle popup visibility
  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="intership__page">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="intership__right">
              <h6 className="Itext-lefth6">{tagline}</h6>
              <h1 className="Itext-left">{Ititle}</h1>
              <p className="intership__right-text-1">{text1}</p>
              <h4 className="intership__right-text-2">{text2}</h4>
            </div>
          </Col>

          <Col xl={6}>
            <div className="hiringCard3">
              <Image src={lady1.src} alt="Social Media Marketing" />
              <h1>Social Media Marketing Intern</h1>
              <p>
                We are looking for a creative and active mind who is pro with
                social media marketing techniques, specifically with Instagram
                and Facebook. You can send us your resume at
                corporate@tzar.co.
              </p>
              <Button
                className="thm-btn intership__btn"
                onClick={handlePopupToggle}
              >
                Apply Now
              </Button>
            </div>
          </Col>

          <Col xl={6}>
            <div className="hiringCard4">
              <Image src={lady1.src} alt="Content Writer" />
              <h1>Content Writer Intern</h1>
              <p>
                With experience of 2-4 years in a Digital Marketing Agency and
                an aptitude to work on a target basis.
              </p>
              <Button
                className="thm-btn intership__btn1"
                onClick={handlePopupToggle}
              >
                Apply Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Popup Modal */}
      <Modal show={showPopup} onHide={handlePopupToggle} centered>
        <Modal.Header closeButton>
          <Modal.Title>Internship Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for showing interest in applying! Please send your resume to corporate@tzar.co to apply for this internship.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePopupToggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Intership;
