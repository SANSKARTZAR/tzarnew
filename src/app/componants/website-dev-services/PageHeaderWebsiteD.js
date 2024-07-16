"use client";
import bg12 from "@/assets/images/backgrounds/page-header-bgWeb-Design.jpg";
import bg121 from "@/assets/images/MobileTopBanners/Web-Design.jpg";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderWebsiteD = ({ page = "", title = "", parent = "" }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 683;
  if (width > breakpoint) { 
  return (
    <section className="page-header">
      <div
        className="page-header-bgAu"
        style={{ backgroundImage: `url(${bg12.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerAuW">
          <ul className="thm-breadcrumb list-unstyledAuW">
            <li>
              <Link href="/">Home</Link>/
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>/
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
  <>
    <section className="page-header ">
      <div
        className="page-header-bgWd "
        style={{ backgroundImage: `url(${bg12.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerAuW">
          <ul className="thm-breadcrumb list-unstyledAuW">
            <li>
              <Link href="/">Home</Link>/
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>/
              </li>
            )}{" "}
            <li>{page || title}</li>
          </ul>
          <h2>{title || page}</h2>
        </div>
      </Container>
    </section>
  
  </>

)
}


export default PageHeaderWebsiteD;
