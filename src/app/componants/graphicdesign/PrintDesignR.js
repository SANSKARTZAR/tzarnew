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
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Grid layout responsive
  const cardsContainer = {
    display: "grid",
    gap: "15px",
    listStyle: "none",
    padding: 0,
    margin: 0,
    gridTemplateColumns:
      screenWidth >= 1200
        ? "repeat(5, 1fr)"
        : screenWidth >= 992
        ? "repeat(3, 1fr)"
        : "repeat(2, 1fr)",
  };

  // ✅ Card Styling
  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const imageWrapper = {
  width: "100%",
  aspectRatio: "4 / 3",  // maintain consistent aspect ratio
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
  overflow: "hidden",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  width: "auto",
  objectFit: "contain",
  borderRadius: "6px",
};


  const cardTitle = {
    color: "#0D2C6B",
    fontWeight: 600,
    fontSize: "0.9rem",
    margin: 0,
  };

  const buttonStyle = {
    backgroundColor: "#0D2C6B",
    color: "#fff",
    padding: "10px 22px",
    borderRadius: "25px",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "inline-block",
  };

  const buttonWrapper = {
    textAlign: "center",
    marginTop: "25px",
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
    <section className="PrintDesignR-page" style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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

          {/* ✅ Grid of Cards */}
          <ul style={cardsContainer}>
            {cardData.map(({ img, title }, index) => (
              <li key={index}>
                <div
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div style={imageWrapper}>
                    <Image src={img.src} alt={title} style={imageStyle} />
                  </div>
                  <h4 style={cardTitle}>{title}</h4>
                </div>
              </li>
            ))}
          </ul>

          {/* ✅ Button */}
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
