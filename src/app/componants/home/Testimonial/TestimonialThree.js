/* eslint-disable react/no-unescaped-entities */
'use client';
import testimonialThree from "@/app/data/testimonialThree";
import dynamic from "next/dynamic";
import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import SingleTestimonial1 from "./SingleTestimonial1";

const TinySlider1 = dynamic(() => import("@/app/componants/home/TinySlider1/TinySlider1"), {
  ssr: false,
});

const settings = {
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  autoplay: true,
  autoHeight: false, // ✅ Set to false to prevent jumpy layout
  controls: false,
  gutter: 20, // ✅ Increased for more spacing
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    568: {
      items: 2,
      gutter: 15,
    },
    668: {
      items: 2,
      gutter: 20,
    },
    768: {
      items: 3,
      gutter: 20,
    },
    886: {
      items: 3,
      gutter: 25,
    },
    998: {
      items: 4,
      gutter: 25,
    },
    1200: {
      items: 5,
      gutter: 30,
    },
  },
};

const { bg, tagline, title, testimonials } = testimonialThree;

const TestimonialThree = () => {
  const listRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive styles for the title based on window width
  let titleFontSize = "3rem";
  let titleLineHeight = 1.2;
  let titlePadding = "0 15px";

  if (windowWidth <= 576) {
    titleFontSize = "1.6rem";
    titleLineHeight = 1.4;
    titlePadding = "0 10px";
  } else if (windowWidth <= 768) {
    titleFontSize = "2.2rem";
    titleLineHeight = 1.3;
    titlePadding = "0 15px";
  } else if (windowWidth <= 992) {
    titleFontSize = "2.6rem";
    titleLineHeight = 1.25;
    titlePadding = "0 20px";
  }

  const sectionTitleStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 15px",
    textAlign: "center",
  };

  const taglineStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "500",
    fontSize: "1rem",
  };

  const titleStyle = {
    fontSize: titleFontSize,
    lineHeight: titleLineHeight,
    maxWidth: "100%",
    wordWrap: "break-word",
    margin: "0 auto",
    padding: titlePadding,
    fontWeight: "700",
  };

  return (
    <section className="testimonial-three">
      <div
        className="testimonial-three__map"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title" style={sectionTitleStyle}>
          <span style={taglineStyle}>{tagline || "We Don't Sell Products"}</span>
          <h2 className="section-title__title" style={titleStyle}>
            {title || "WE MAKE ICONIC BRANDS"}
          </h2>
        </div>
        <Row>
          <Col xl={12}>
           <div
  className="testimonial-three__carousel"
  style={{
    overflow: "hidden", // ✅ Prevent horizontal scroll
    padding: "20px 0",  // ✅ Space around carousel
  }}
>

              <TinySlider1 options={settings} listRef={listRef}>
                {testimonials.map((testimonial) => (
                  <SingleTestimonial1
                    key={testimonial.id}
                    testimonial={testimonial}
                    listRef={listRef}
                  />
                ))}
              </TinySlider1>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <div className="viewallservice-btn" style={{ textAlign: "center" }}>
          <Link
            href="/our-client"
            className="BtnStudio GraphicDesigning__studiobtn"
            style={{ display: "inline-block" }}
          >
            View More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialThree;
