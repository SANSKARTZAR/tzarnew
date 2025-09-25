'use client';
/* eslint-disable @next/next/no-img-element */
import webdesigning from "@/app/data/webdesigning";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  bg, img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  title, text1,
} = webdesigning;

const WebDesignR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    padding: "25px 10px", // much smaller vertical padding
    backgroundColor: "#fff",
  };

  const titleStyle = {
    fontSize: screenWidth < 480 ? "1.4rem" : "2rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "6px", // reduced
  };

  const textStyle = {
    fontSize: "0.95rem",
    textAlign: "center",
    maxWidth: "750px",
    margin: "0 auto 15px", // reduced
    color: "#555",
  };

  // ✅ Responsive Grid
  const cardsContainer = {
    display: "grid",
    gap: "10px", // very compact grid
    listStyle: "none",
    padding: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)" // 5 per row desktop
        : screenWidth >= 992
        ? "repeat(3, 1fr)" // 3 per row laptop
        : "repeat(2, 1fr)", // 2 per row mobile/tablet
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "6px",
    padding: "8px", // smaller card padding
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    transition: "0.2s ease",
  };

  const imageStyle = {
    maxWidth: "85%",
    height: "auto",
    borderRadius: "6px",
  };

  const cardTitle = {
    marginTop: "5px", // minimal space
    fontSize: "0.9rem",
    fontWeight: 600,
  };

  const buttonWrapper = {
    textAlign: "center",
    marginTop: "12px", // almost no gap above
    marginBottom: "5px", // minimal below
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "8px 18px", // smaller button
    borderRadius: "20px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "0.85rem",
  };

  const cardData = [
    { img: img1, title: "Wordpress Design" },
    { img: img2, title: "Icon Design" },
    { img: img3, title: "Wix Website Design" },
    { img: img4, title: "Web Design" },
    { img: img5, title: "App Design" },
    { img: img6, title: "Shopify Design" },
    { img: img7, title: "Newsletter Design" },
    { img: img8, title: "Squarespace Design" },
    { img: img9, title: "Banner Ad Design" },
    { img: img10, title: "Email Marketing Design" },
    { img: img11, title: "WooCommerce Design" },
    { img: img12, title: "Landing Page Design" },
  ];

  return (
    <section className="WebdesignR-page">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
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
                  <Image src={card.img.src} alt={card.title} style={imageStyle} />
                  <h4 style={cardTitle}>{card.title}</h4>
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

export default WebDesignR;
