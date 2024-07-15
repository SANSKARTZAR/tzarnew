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
        className="page-header-bgGd"
        style={{ backgroundImage: `url(${bg6.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerGd">
          <ul className="thm-breadcrumb list-unstyledGd">
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
  <section className="page-header">
    <div
      className="page-header-bgGd"
      style={{ backgroundImage: `url(${bg61.src})` }}
    ></div>
    <Container>
      <div className="page-header__innerGd">
        <ul className="thm-breadcrumb list-unstyledGd">
          <li>
            <Link href="/">Home/</Link>
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

export default PageHeaderGraphicD;
