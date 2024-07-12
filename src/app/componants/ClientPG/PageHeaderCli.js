'use client';
import bg4 from "@/assets/images/backgrounds/page-header-bgOurClients.jpg";
import bg41 from "@/assets/images/MobileTopBanners/Our-Clients.gif";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";


const PageHeaderCli = ({ page = "", title = "", parent = "" }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 514;
  
  
    if (width > breakpoint) { 
    return (
      <section className="page-header">
        <div
          className="page-header-bgCli"
          style={{ backgroundImage: `url(${bg4.src})` }}
        ></div>
        <Container>
          <div className="page-header__innerCli">
            <ul className="thm-breadcrumb list-unstyledCli">
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
      <section className="page-header">
        <div
          className="page-header-bgCli"
          style={{ backgroundImage: `url(${bg41.src})` }}
        ></div>
        <Container>
          <div className="page-header__innerCli">
            <ul className="thm-breadcrumb list-unstyledCli">
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
export default PageHeaderCli;
