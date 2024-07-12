'use client';
import bg1 from "@/assets/images/backgrounds/page-header-bgOur-Services.jpg";
import bg11 from "@/assets/images/backgrounds/Our-Services.jpg" 

import { useWindowSize } from "@react-hook/window-size/throttled";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const PageHeaderServices = ({ page = "", title = "", parent = "" }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 700;

  if (width > breakpoint) { 
  return (
    <section className="page-header">
      <div
        className="page-header-bgSer"
        style={{ backgroundImage: `url(${bg1.src})` }}
      ></div>
      <Container>
        <div className="page-header__innerSer">
          <ul className="thm-breadcrumb list-unstyledSer">
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
    <>
      <section className="page-header">
        <div
          className="page-header-bgSer"
          style={{ backgroundImage: `url(${bg11.src})`, width: '100%', height: '100%' }}
        ></div>
        <Container>
          <div className="page-header__innerSer">
            <ul className="thm-breadcrumb list-unstyledSer">
              <li>
                <Link href="/">Home</Link> /
              </li>{" "}
              {parent && (
                <li>
                  <Link href={`/${parent.toLowerCase()}`}>{parent}/</Link>
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

export default PageHeaderServices;



