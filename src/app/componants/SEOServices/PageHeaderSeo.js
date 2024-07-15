"use client";
import bg11 from "@/assets/images/backgrounds/page-header-bgSEO.jpg";
import bg111 from "@/assets/images/MobileTopBanners/SEO.gif";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";


const PageHeaderSeo = ({ page = "", title = "", parent = "" }) => {
  const [width, setWidth] = useWindowSize({ fps: 30 });
  const breakpoint = 638;
  if (width > breakpoint) { 
  return (
    <section className="page-header">
      <div
        className="page-header-bgSeo"
        style={{ backgroundImage: `url(${bg11.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerSeo">
          <ul className="thm-breadcrumb list-unstyledSeo">
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
      className="page-header-bgSeo"
      style={{ backgroundImage: `url(${bg111.src})` }}
    ></div>
    <Container>
      <div className="page-header__innerSeo">
        <ul className="thm-breadcrumb list-unstyledSeo">
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

export default PageHeaderSeo;
