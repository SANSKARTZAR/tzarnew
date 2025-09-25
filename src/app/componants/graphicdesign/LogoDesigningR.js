/* eslint-disable @next/next/no-img-element */
'use client';
import LogoDesigning from "@/app/data/logodesigning";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const {
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9,
  title, text1
} = LogoDesigning;

const LogoDesigningR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    padding: "50px 20px",
    backgroundColor: "#fff",
  };

  const titleStyle = {
    fontSize: screenWidth < 480 ? "1.6rem" : "2.3rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 30px",
    color: "#555",
  };

  // ✅ Grid system
  const cardsContainer = {
    display: "grid",
    gap: "20px",
    listStyle: "none",
    padding: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)" // 5 per row desktop
        : screenWidth >= 992
        ? "repeat(3, 1fr)" // 3 per row laptop
        : "repeat(2, 1fr)", // 2 per row tablet/mobile
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px", // smaller card
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "0.3s ease",
  };

  const imageStyle = {
    maxWidth: "90%",
    height: "auto",
  };

  const cardTitle = {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: 600,
  };

  const buttonWrapper = {
    textAlign: "center",
    marginTop: "30px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 25px",
    borderRadius: "25px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
    fontSize: "0.95rem",
  };

  const cardData = [
    { img: img1, title: "Billboard Design" },
    { img: img2, title: "Stationery Design" },
    { img: img3, title: "Signage Design" },
    { img: img4, title: "Letterhead Design" },
    { img: img5, title: "Label Design" },
    { img: img6, title: "Business Card Design" },
    { img: img7, title: "Car Wrap Design" },
    { img: img8, title: "Logo Design" },
    { img: img9, title: "Trade Show Booth Design" },
  ];

  return (
    <section className="LogoDesigningR-page">
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
    </section>
  );
};

export default LogoDesigningR;
