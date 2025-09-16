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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemWidth = () => {
    if (screenWidth < 768) return "48%";        // ✅ Mobile: 2 per row
    if (screenWidth < 1024) return "30%";       // ✅ iPad: 3 per row
    return "23%";                               // ✅ Desktop: optional 4 per row
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
    width: "100%",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
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
      <div style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
      }}>
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
      </div>
    </section>
  );
};

export default WebDesignR;
