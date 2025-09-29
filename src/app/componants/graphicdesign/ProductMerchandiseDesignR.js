'use client';
/* eslint-disable @next/next/no-img-element */
import productmerchandisedesign from "@/app/data/productmerchandisedesign";
import React, { useEffect, useState } from "react";
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
  title,
  text1,
} = productmerchandisedesign;

const ProductMerchandiseDesignR = () => {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSrc = (img) => (typeof img === "string" ? img : img?.src);

  const cardData = [
    { img: img1, title: "T-shirt Design" },
    { img: img2, title: "Packaging Design" },
    { img: img3, title: "Bag and Tote Design" },
    { img: img4, title: "Cup and Mug Design" },
    { img: img5, title: "Apparel Design" },
    { img: img6, title: "Merchandise Design" },
  ];

  // ✅ Grid Layout
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

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #0D2C6B",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
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

  const buttonWrapper = {
    textAlign: "center",
    marginTop: "30px",
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

  return (
    <section className="ProductMerchandiseDesignR-page" style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
      <div
        className="bg-wrapper"
        style={{
          backgroundImage: `url(${getSrc(bg)})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
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

          {/* Cards */}
          <ul style={cardsContainer}>
            {cardData.map(({ img, title }, idx) => (
              <li key={idx}>
                <div
                  style={cardStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div style={imageWrapper}>
                    <Image src={getSrc(img)} alt={title} style={imageStyle} />
                  </div>
                  <h4 style={cardTitle}>{title}</h4>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
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

export default ProductMerchandiseDesignR;
