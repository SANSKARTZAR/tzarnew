"use client";
import bg15 from "@/assets/images/backgrounds/page-header-bgSocial-Media-marketing.jpg";
import bg151 from "@/assets/images/MobileTopBanners/SMM.jpg";
import Link from "next/link";
import React from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";
import { Container } from "react-bootstrap";

const PageHeaderSmm = ({ page = "", title = "", parent = "" }) => {
  const [width, setWidth] = useWindowSize({ fps: 30 });
  const breakpoint = 638;
  if (width > breakpoint) { 
 
  return (
    <section className="page-header">
      <div
        className="page-header-bgAu"
        style={{ backgroundImage: `url(${bg15.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerAu">
          <ul className="thm-breadcrumb list-unstyledAu">
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
      className="page-header-bgAu"
      style={{ backgroundImage: `url(${bg151.src})` }}
    ></div>
    <Container>
      <div className="page-header__innerSmm">
        <ul className="thm-breadcrumb list-unstyledSmm">
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

export default PageHeaderSmm;
