"use client";
import cloudkitchenmarketingt from "@/app/data/cloudkitchenmarketingt";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import Link from "next/link";
import Title from "../Reuseable/Title";

const { images, badge,text13,text12 , tagline, title, text1, text2 } = cloudkitchenmarketingt ;

const CloudKitchenMarketing = () => {
  return (
    <section className="Ck-page">
      <Container>
        <Row>
          <Col xl={6}>
          <div className="Lead_Generation__left">
              <ul className="list-unstyled Ck__images">
                {images.map((image, i) => (
                  <li key={i}>
                    <div className={`Ck__img-${i + 1}`}>
                      <Image
                        src={require(`@/assets/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="Lead_Generation__badge">
                {/* <Tilt options={{ scale: 1 }}>
                  <Image src={badge.src} alt="" />
                </Tilt> */}
              </div>
            </div>
          </Col>
          <Col xl={6}>
          <div className="Ck__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="Ck__right-text-1">{text1}</p>
              <p className="Ck__right-text-1">{text12}</p>
              <p className="Ck__right-text-1">{text13}</p>
              <h4 className="Ck__right-text-2">{text2}</h4>
              <Link href="/about" className="thm-btn Ck__btn">
                Discover More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CloudKitchenMarketing;
