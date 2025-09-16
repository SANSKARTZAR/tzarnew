"use client";
import leadgeneration from "@/app/data/leadgeneration";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
import Title from "../Reuseable/Title";

const { ImageUrl, badge, tagline, title, text1, text2, text3 } = leadgeneration;

const LeadGeneration = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-stretch">
          {/* LEFT: IMAGE COLUMN */}
          <Col
            xl={6}
            lg={6}
            md={12}
            className="d-flex align-items-stretch justify-content-center mb-4 mb-lg-0"
          >
            <div
              className="w-100"
              style={{
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "450px", // 👈 Increase image height
                overflow: "hidden",
              }}
            >
              <Image
                src={ImageUrl}
                alt="Lead Generation"
                className="img-fluid h-100 object-fit-cover"
                style={{ objectFit: "cover", height: "100%", width: "auto" }}
              />
            </div>
          </Col>

          {/* RIGHT: TEXT COLUMN */}
          <Col
            xl={6}
            lg={6}
            md={12}
            className="d-flex align-items-stretch flex-column justify-content-between"
          >
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <Title title={title} tagline={tagline} className="text-left" />
                <p className="mb-3">{text1}</p>
                <p className="mb-3">{text2}</p>
                <p className="mb-3">{text3}</p>
              </div>
              <div>
                <Link href="#Contactform" className="thm-btn mt-3" style={{color: "black"}}>
                  Enquiry Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LeadGeneration;
