'use client';
import bg1 from "@/assets/images/backgrounds/page-header-bgOur-Team.jpg";
import bg11 from "@/assets/images/MobileTopBanners/Portfolio.jpg"

import { useWindowSize } from "@react-hook/window-size/throttled";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const PageHeaderPrivacyPolicy = ({ page = "", title = "", parent = "" }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 700;

  if (width > breakpoint) {
    return (
      <section className="page-header">
        <div
          className="page-header-bgAu"
          style={{ backgroundImage: `url(${bg1.src})` }}
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
    <>
      <section className="page-header">
        <div
          className="page-header-bgWd"
          style={{ backgroundImage: `url(${bg11.src})`, width: '100%', height: '100%' }}
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

    </>

  );
};

export default PageHeaderPrivacyPolicy;



