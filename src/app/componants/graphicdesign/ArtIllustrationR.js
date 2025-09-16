'use client';
import artillustration from "@/app/data/artillustration";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  bg,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  title,
  text1,
} = artillustration;

const ArtIllustrationR = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let cardWidth = "180px";
  let containerPadding = "15px";

  if (windowWidth <= 480) {
    cardWidth = "100%";
    containerPadding = "10px";
  } else if (windowWidth <= 768) {
    cardWidth = "45%";
    containerPadding = "12px";
  } else if (windowWidth <= 1366) {
    cardWidth = "22%"; // better for iPad Pro landscape (4 cards per row)
    containerPadding = "20px";
  } else {
    cardWidth = "180px";
    containerPadding = "15px";
  }

  const cards = [
    { img: img1, title: "Illustration Design" },
    { img: img2, title: "Character Design" },
    { img: img3, title: "Card Design" },
    { img: img4, title: "Art Design" },
    { img: img5, title: "CD Cover Design" },
    { img: img6, title: "Tattoo Design" },
    { img: img7, title: "Invitation Design" },
    { img: img8, title: "eBook Cover Design" },
    { img: img9, title: "Greeting Card Design" },
    { img: img10, title: "Book Cover Design" },
  ];

  return (
    <section
      className="ArtIllustration-page"
      style={{
        padding: `2rem ${containerPadding}`,
        boxSizing: "border-box",
      }}
    >
      <div
        className="counter-one-pattern"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      <div
        className="container-fluid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: containerPadding,
          paddingRight: containerPadding,
          boxSizing: "border-box",
        }}
      >
        <div className="mainAi" style={{ textAlign: "center" }}>
          <div
            className="ArtIllustration__center"
            style={{ marginBottom: "2rem" }}
          >
            <h1
              className="section-title1__titleAi"
              style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
            >
              {title}
            </h1>
            <p className="ArtIllustration__right-text-1" style={{ marginTop: 0 }}>
              {text1}
            </p>
          </div>

          <ul
            className="cardsAi"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {cards.map(({ img, title }, idx) => (
              <li
                key={idx}
                className="cards_itemAi"
                style={{
                  border: "1px solid #0D2C6B",
                  borderRadius: "8px",
                  width: cardWidth,
                  padding: "15px",
                  boxSizing: "border-box",
                  textAlign: "center",
                  backgroundColor: "white",
                  flex: windowWidth <= 480 ? "1 1 100%" : "0 0 auto",
                  maxWidth: cardWidth,
                }}
              >
                <div className="cardAi">
                  <div
                    className="card_imageAi"
                    style={{
                      width: "100%",
                      height: "180px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={title}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <h4
                    className="card_titleAi"
                    style={{
                      color: "#0D2C6B",
                      fontWeight: "600",
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    {title}
                  </h4>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="graphic-crd-btn"
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            <Link href="#Contactform" className="thm-btn GraphicDesigning__btn">
              Enquiry Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtIllustrationR;
