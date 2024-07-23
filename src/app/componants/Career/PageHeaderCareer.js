"use client";
import bg2 from "@/assets/images/backgrounds/Jobs.jpg";
import bg31 from "@/assets/images/MobileTopBanners/Jobs.jpg" 
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderCareer = ({ page = "", title = "", parent = "" }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 500;
  if (width > breakpoint) { 
  return (
    <section className="page-header">
      <div
        className="page-header-bgAu"
        style={{ backgroundImage: `url(${bg2.src})` }}
      ></div>
      <Container>
      <div className="page-header__innerAuW">
      <ul className="thm-breadcrumb list-unstyledAuW">
            <li>
              <Link href="/">Home</Link>/
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>
              </li>
            )}{" "}
            <li>{page || title}</li>
          </ul>
          <h2>{title || page}</h2>
        </div>
      </Container>
    </section>
  )
}

return (
    <section className="page-header">
      <div
        className="page-header-bgWd"
        style={{ backgroundImage: `url(${bg31.src})` }}
      ></div>
      <Container>
      <div className="page-header__innerAuW">
      <ul className="thm-breadcrumb list-unstyledAuW">
            <li>
              <Link href="/">Home</Link>/
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>
              </li>
            )}{" "}
            <li>{page || title}</li>
          </ul> 
          <h2>{title}</h2>
        </div>
      </Container>
    </section>
   )
}


export default PageHeaderCareer;
