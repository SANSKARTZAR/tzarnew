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

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine item width based on screen size
  const getItemWidth = () => {
    if (screenWidth < 480) return "100%";
    if (screenWidth < 768) return "100%";
    if (screenWidth < 1024) return "47%";
    return "30%";
  };

  const containerStyle = {
    padding: "60px 20px",
    backgroundColor: "#fff",
  };

  const titleStyle = {
    fontSize: screenWidth < 480 ? "1.8rem" : "2.5rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 40px",
    color: "#555",
  };

  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: 0,
    listStyle: "none",
  };

  const cardItem = {
    width: getItemWidth(),
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s ease",
    width: "70%",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const cardTitle = {
    marginTop: "15px",
    fontSize: "1.1rem",
    fontWeight: 600,
  };

  const buttonWrapper = {
    textAlign: "center",
    marginTop: "40px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "30px",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
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
            <li key={index} style={cardItem}>
              <div style={cardStyle}>
                <div>
                  <Image src={card.img.src} alt={card.title} style={imageStyle} />
                </div>
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
