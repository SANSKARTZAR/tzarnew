'use client';
/* eslint-disable @next/next/no-img-element */
import printdesign from "@/app/data/printdesign";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  bg, img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12, img13, img14,
  title, text1
} = printdesign;

const PrintDesignR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Container
  const containerStyle = {
    padding: "25px 10px", // smaller vertical padding
    backgroundColor: "#fff",
  };

  // ✅ Title
  const titleStyle = {
    fontSize: screenWidth < 480 ? "1.4rem" : "2rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "6px",
  };

  const textStyle = {
    fontSize: "0.95rem",
    textAlign: "center",
    maxWidth: "750px",
    margin: "0 auto 15px",
    color: "#555",
  };

  // ✅ Grid (5 / 3 / 2)
  const cardsContainer = {
    display: "grid",
    gap: "10px",
    listStyle: "none",
    padding: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)" // desktop
        : screenWidth >= 992
        ? "repeat(3, 1fr)" // laptop
        : "repeat(2, 1fr)", // mobile/tablet
  };

  // ✅ Card
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "6px",
    padding: "8px",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    transition: "0.2s ease",
  };

  const imgStyle = {
    maxWidth: "85%",
    height: "auto",
    borderRadius: "6px",
  };

  const cardTitleStyle = {
    marginTop: "5px",
    fontSize: "0.9rem",
    fontWeight: 600,
  };

  // ✅ Button
  const buttonWrapper = {
    textAlign: "center",
    marginTop: "12px",
    marginBottom: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "20px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "0.85rem",
  };

  const cardData = [
    { img: img1, title: "Flyer Design" },
    { img: img2, title: "Brochure Design" },
    { img: img3, title: "Poster Design" },
    { img: img4, title: "Advertisement Design" },
    { img: img5, title: "Catalogue Design" },
    { img: img6, title: "Envelope Design" },
    { img: img7, title: "Magazine Design" },
    { img: img8, title: "Menu Design" },
    { img: img9, title: "Newspaper Ad Design" },
    { img: img10, title: "Print Design" },
    { img: img11, title: "Sticker Design" },
    { img: img12, title: "Resume Design" },
    { img: img13, title: "Word Template Design" },
    { img: img14, title: "PostCard Design" },
  ];

  return (
    <section className="PrintDesignR-page">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div style={containerStyle}>
          <div>
            <h1 style={titleStyle}>{title}</h1>
            <p style={textStyle}>{text1}</p>
          </div>

          <ul style={cardsContainer}>
            {cardData.map((card, index) => (
              <li key={index}>
                <div style={cardStyle}>
                  <Image src={card.img.src} alt={card.title} style={imgStyle} />
                  <h4 style={cardTitleStyle}>{card.title}</h4>
                </div>
              </li>
            ))}
          </ul>

          <div style={buttonWrapper}>
            <Link href="#Contactform" style={buttonStyle}>
              Enquiry Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintDesignR;
