"use client";
import React from "react";
import { Image } from "react-bootstrap";
import Title from "../Reuseable/Title";

import Pr1 from "@/assets/images/projects/r1.jpg";
import Pr2 from "@/assets/images/projects/r2.jpg";
import Pr3 from "@/assets/images/projects/r3.jpg";
import Pr4 from "@/assets/images/projects/r4.jpg";
import Pr5 from "@/assets/images/projects/r5.jpg";
import Pr6 from "@/assets/images/projects/r6.jpg";
import Pr7 from "@/assets/images/projects/r7.jpg";
import Pr8 from "@/assets/images/projects/r8.jpg";
import Pr9 from "@/assets/images/projects/r9.jpg";
import Pr10 from "@/assets/images/projects/r10.jpg";
import Pr11 from "@/assets/images/projects/r11.jpg";
import Pr12 from "@/assets/images/projects/r12.jpg";
import Pr13 from "@/assets/images/projects/r13.jpg";
import Pr14 from "@/assets/images/projects/r14.jpg";
import Pr15 from "@/assets/images/projects/r15.jpg";
import Pr16 from "@/assets/images/projects/r16.jpg";
import Pr17 from "@/assets/images/projects/r17.jpg";
import Pr18 from "@/assets/images/projects/r18.png";

function WebDesign() {
  const data = [
    { id: 1, img: Pr1, title: "Sri Krishna College of Engineering and Technology" },
    { id: 2, img: Pr2, title: "Cairn Group of Hotels" },
    { id: 3, img: Pr3, title: "Spencer Realty LLC" },
    { id: 4, img: Pr4, title: "CondoReviews" },
    { id: 5, img: Pr5, title: "Happy Brews" },
    { id: 6, img: Pr6, title: "Epitome-RBS" },
    { id: 7, img: Pr7, title: "Orcollective" },
    { id: 8, img: Pr8, title: "Staples" },
    { id: 9, img: Pr9, title: "Target" },
    { id: 10, img: Pr10, title: "DIY Mumbai" },
    { id: 11, img: Pr11, title: "LITTLE FLOWER CHILDREN SCHOOL, MAU" },
    { id: 12, img: Pr12, title: "Urbanladder" },
    { id: 13, img: Pr13, title: "Femmella" },
    { id: 14, img: Pr14, title: "Printshop" },
    { id: 15, img: Pr15, title: "Cadd Centre Thane" },
    { id: 16, img: Pr16, title: "Happy Brews" },
    { id: 17, img: Pr17, title: "Sanjivnee Healing" },
    { id: 18, img: Pr18, title: "The Clothing Factory" },
  ];

  // background colors in same pastel tone sequence
  const bgColors = [
    "#E7F1ED",
    "#FAE9E1",
    "#F3EDDD",
    "#F5F9E9",
    "#F9EAEF",
    "#F3EFE5",
    "#EAF7F3",
    "#FAF0E4",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        padding: "2rem 0",
        justifyItems: "center",
      }}
    >
      {data.map((item, index) => (
        <div
          key={item.id}
          style={{
            width: "100%",
            background: bgColors[index % bgColors.length],
            borderRadius: "18px",
            padding: "1.5rem",
            textAlign: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
          }}
        >
          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "0.5rem",
              marginBottom: "1.2rem",
            }}
          >
            <span
              style={{
                background: "#fff",
                color: "#333",
                fontSize: "13px",
                padding: "4px 10px",
                borderRadius: "50px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              WordPress Website Development
            </span>
            <span
              style={{
                background: "#fff",
                color: "#333",
                fontSize: "13px",
                padding: "4px 10px",
                borderRadius: "50px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              UI / UX Strategy
            </span>
          </div>

          {/* Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "180px",
              marginBottom: "1rem",
            }}
          >
            <Image
              src={item.img.src}
              alt={item.title}
              style={{
                maxWidth: "80%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Title */}
          <h5
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#111",
              lineHeight: "1.4",
              marginTop: "0.5rem",
            }}
          >
            Website Development for{" "}
            <span
              style={{
                display: "block",
                fontWeight: "600",
                color: "#222",
              }}
            >
              {item.title}
            </span>
          </h5>
        </div>
      ))}
    </div>
  );
}

export default WebDesign;
