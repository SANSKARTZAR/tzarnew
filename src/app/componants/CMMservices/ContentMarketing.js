"use client"
import contentMarketingt from "@/app/data/contentMarketingt";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import Link from "next/link";

const { images, badge, tagline, title, text1, text2 } = contentMarketingt ;

const ContentMarketing = () => {
  return (
    <section className="Cm-page">
      <Container>
        <Row>
          <Col xl={6}>
          <div className="Cm__left">
              <ul className="list-unstyled Cm__images">
                {images.map((image, i) => (
                  <li key={i}>
                    <div className={`Cm__img-${i + 1}`}>
                      <Image
                        src={require(`@/assets/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="Cm__badge">
                {/* <Tilt options={{ scale: 1 }}>
                  <Image src={badge.src} alt="" />
                </Tilt> */}
              </div>
            </div>
          </Col>
          <Col xl={6}>
          <div className="Cm__right">
              {/* <Title title={title} tagline={tagline} className="text-left" /> */}
              <h1 className="section-title__titleCm">{title}</h1>    
              <p className="Cm__right-text-1">{text1}</p>
              <p className="Cm__right-text-1">{text2}</p>
              <Link href="/about" className="thm-btn Cm__btn">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContentMarketing;
