"use client"

/* eslint-disable react/no-unescaped-entities */
// import Header from "@/components/Header/Header";
import Preloader from "@/app/componants/Preloader/Preloader";
import { useRootContext } from "@/app/componants/context/context";
import useScroll from "@/app/componants/hooks/useScroll";
import Head from "next/head";
import { Image } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "../MobileMenu/MobileMenu";
// import Search from "../Search/Search";
import SiteFooter1 from "../FooterSection/SiteFooter1";
import header from "@/app/data/header";

const { logo1, logo2, phone, phone1, phoneIcon, navItems } = header;
const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();
  const scrollTop = useScroll(100);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);


  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zindex: '999999'
    },
    content: {
      background: '#023878',
      padding: '40px',
      borderradius: '4px',
      width: '452px',
      height: 'auto',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-16%',
      transform: 'translate(-50%, -50%)',
      zindex: '999999',
      borderradius: 'none'
    }
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {pageTitle}
          {/* India's fastest growing digital marketing agency | company in India - Tzar Digital Agency Mumbai */}
        </title>
      </Head>
      <Preloader loading={loading} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className="page-wrapper"
      >
        {/* <Header pageTitle={pageTitle} /> */}
        {children}
        {/* <SiteFooter /> */}
        <SiteFooter1 />
      </main>
      {menuStatus && <MobileMenu />}
      {/* <Search /> */}
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}

    </>
  );
};

export default Layout;
