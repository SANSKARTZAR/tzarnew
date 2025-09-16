'use client';
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import graphicdesign from "@/app/data/graphicdesign";
import Link from "next/link";

const {
  bg,
  img1, img2, img3, img4, img5, img6, img7, img8,
  title,
  text1
} = graphicdesign;

const GraphicDesigR = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardWidth = () => {
    if (width < 768) return "48%";      // Mobile (2 per row)
    if (width < 1024) return "30%";     // Tablet (3 per row)
    return "22%";                       // Desktop (4 per row)
  };

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
    <section style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}>
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100px",
          marginBottom: "30px",
        }}
      ></div>

      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{title}</h1>
        <p style={{ maxWidth: "800px", margin: "0 auto 30px" }}>{text1}</p>
      </div>

      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}
      >
        {cardData.map((card, index) => (
          <li key={index} style={{ width: getCardWidth() }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "center",
                padding: "16px",
                backgroundColor: "#fff",
              }}
            >
              <Image
                src={card.img.src}
                alt={card.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h4 style={{ marginTop: "10px", fontSize: "1rem" }}>{card.title}</h4>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link
          href="#Contactform"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Enquiry Now
        </Link>
      </div>
    </section>
  );
};

export default GraphicDesigR;
