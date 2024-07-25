"use client";
import bg6 from "@/assets/images/backgrounds/page-header-bgGraphic-Designning.jpg";
import bg61 from "@/assets/images/MobileTopBanners/Graphic-design.jpg";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderGraphicD = ({ page = "", title = "", parent = "" }) => {
  const [width, setWidth] = useWindowSize({ fps: 30 });
  const breakpoint = 683;
  if (width > breakpoint) { 
  return (
    <section className="page-header">
      <div
        className="page-header-bgAu"
        style={{ backgroundImage: `url(${bg6.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerAuW">
        <h2>{title || page}</h2>
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
        </div>
      </Container>
    </section>
  )
}

return (
  <section className="page-header">
    <div
      className="page-header-bgWd"
      style={{ backgroundImage: `url(${bg61.src})` }}
    ></div>
    <Container>
    <div className="page-header__innerAuW">
    <h2>{title || page}</h2>
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
      </div>
    </Container>
  </section>
 )
}

export default PageHeaderGraphicD;
