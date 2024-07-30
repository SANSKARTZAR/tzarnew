"use client"
import leadgeneration from "@/app/data/leadgeneration";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import Link from "next/link";
import Title from "../Reuseable/Title";

const { ImageUrl, badge, tagline, title, text1, text2 , text3} = leadgeneration ;

const LeadGeneration = () => {
  return (
    <section className="Lead_Generation-page">
      <Container>
        <Row>
          <Col xl={6}>
          <div className="Lead_Generation__left">
              <ul className="list-unstyled Lead_Generation__images">
                    <div className="Lead_Generation__img">
                      {/* <Image
                        src={require(`@/assets/images/resources/${image}`).default.src}
                        alt=""
                      /> */}
                      <Image src={ImageUrl} alt="Lead_Generation"/>
                    </div>
              </ul>
              <div className="Lead_Generation__badge">
                {/* <Tilt options={{ scale: 1 }}>
                  <Image src={badge.src} alt="" />
                </Tilt> */}
              </div>
            </div>
          </Col>
          <Col xl={6}>
          <div className="Lead_Generation__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="Lead_Generation__right-text-1">{text1}</p>
              <p className="Lead_Generation__right-text-1">{text2}</p>
              <p className="Lead_Generation__right-text-1">{text3}</p>

              {/* <h4 className="Lead_Generation__right-text-2">{text2}</h4> */}
              <Link href="#Contactform" className="thm-btn Lead_Generation__btn">
                Enquiry Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LeadGeneration;
