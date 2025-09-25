'use client';
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import graphicdesign from "@/app/data/graphicdesign";
import Link from "next/link";

const { bg, img1, img2, img3, img4, img5, img6, img7, img8, title, text1 } =
  graphicdesign;

const GraphicDesigR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Responsive Grid Layout
  const cardsContainer = {
    display: "grid",
    gap: "15px",
    listStyle: "none",
    padding: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)" // 5 per row desktop
        : screenWidth >= 992
        ? "repeat(3, 1fr)" // 3 per row laptop
        : "repeat(2, 1fr)", // 2 per row mobile
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "0.3s ease",
  };

  const imageStyle = {
    maxWidth: "85%",
    height: "auto",
    borderRadius: "6px",
  };

  const cardTitle = {
    marginTop: "8px",
    fontSize: "0.95rem",
    fontWeight: 600,
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 22px",
    borderRadius: "25px",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  // ✅ Normalize image source (string or object)
  const getSrc = (img) => (typeof img === "string" ? img : img?.src);

  const cardData = [
    { img: img1, title: "Graphic Design" },
    { img: img2, title: "PowerPoint Design" },
    { img: img3, title: "Vector Design" },
    { img: img4, title: "3D Design" },
    { img: img5, title: "Photoshop Design" },
    { img: img6, title: "Podcast Design" },
    { img: img7, title: "Infographic Design" },
    { img: img8, title: "Mascot Design" },
  ];

  return (
    <section className="GraphicDesigR-page">
      <div
        style={{
          backgroundImage: `url(${getSrc(bg)})`, // ✅ Safe handling
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1
              style={{
                fontSize: screenWidth < 480 ? "1.6rem" : "2.2rem",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                fontSize: "1rem",
                color: "#555",
              }}
            >
              {text1}
            </p>
          </div>

          <ul style={cardsContainer}>
            {cardData.map((card, index) => (
              <li key={index}>
                <div style={cardStyle}>
                  <Image
                    src={getSrc(card.img)} // ✅ Safe handling
                    alt={card.title}
                    style={imageStyle}
                  />
                  <h4 style={cardTitle}>{card.title}</h4>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Link href="#Contactform" style={buttonStyle}>
              Enquiry Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesigR;
