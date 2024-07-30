'use client';
import graphicdesignt from "@/app/data/graphicdesignt";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import Link from "next/link";
import Title from "../Reuseable/Title";

const { images, badge, tagline, title, text1, text2,text3 } = graphicdesignt ;

const GraphicDesigning = () => {
  return (
    <section className="GraphicDesigning-page">
      <Container>
        <Row>
          <Col xl={6}>
          <div className="GraphicDesigning__left">
              <ul className="list-unstyled GraphicDesigning__images">
                {images.map((image, i) => (
                  <li key={i}>
                    <div className={`GraphicDesigning__img-${i + 1}`}>
                      <Image
                        src={require(`@/assets/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="GraphicDesigning__badge">
                {/* <Tilt options={{ scale: 1 }}>
                  <Image src={badge.src} alt="" />
                </Tilt> */}
              </div>
            </div>
          </Col>
          <Col xl={6}>
          <div className="GraphicDesigning__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="GraphicDesigning__right-text-1">{text1}</p>
              <p className="GraphicDesigning__right-text-1">{text2}</p>
              <p className="GraphicDesigning__right-text-1">{text3}</p>
              <br/>
              <Link href="#Contactform" className="thm-btn GraphicDesigning__btn">
                Enquiry Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GraphicDesigning;
