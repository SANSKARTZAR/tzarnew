"use client";
import bg7 from "@/assets/images/backgrounds/page-header-bgFAQ.jpg";
import bg71 from "@/assets/images/MobileTopbanners/FAQ.jpg";
import Link from "next/link";
import React from "react";
import { useWindowSize } from "@react-hook/window-size/throttled";
import { Container } from "react-bootstrap";


const PageHeaderCK = ({ page = "", title = "", parent = "" }) => {
  const [width, setWidth] = useWindowSize({ fps: 30 });
  const breakpoint = 638;
  if (width > breakpoint) { 
  return (
    <section className="page-header">
      <div
        className="page-header-bgAu"
        style={{ backgroundImage: `url(${bg7.src})` }}
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
        style={{ backgroundImage: `url(${bg71.src})` }}
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

export default PageHeaderCK;