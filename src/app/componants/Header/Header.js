"use client"
import { useRootContext } from "@/app/componants/context/context";
import header from "@/app/data/header";
import useScroll from "@/app/componants/hooks/useScroll";
import Link from "next/link";
// import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import React, { useState } from 'react'
import Modal from 'react-modal'
import PopupHireUs from "../home/PopupHireUs";

const { logo1, logo2, phone, phone1, phoneIcon, navItems } = header;

const Header = ({ pageTitle }) => {
  const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zindex: '999999'
    },
    content: {
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
    <header
      className={`main-header${pageTitle === "Home Two"
        ? " main-header-two"
        : pageTitle === "Home Three"
          ? " main-header-three"
          : ""
        } clearfix`}
    >
      <nav
        className={`${scrollTop
          ? "stricky-header stricked-menu stricky-fixed slideInDown"
          : "slideIn"
          } main-menu animated clearfix${pageTitle === "Home Two"
            ? " main-menu-two"
            : pageTitle === "Home Three"
              ? " main-menu-three"
              : ""
          }`}
      >
        <div
          className={
            scrollTop
              ? "sticky-header__content main-menu-wrapper clearfix"
              : "main-menu-wrapper clearfix"
          }
        >
          <div className="main-menu-wrapper__logo">
            <Link href="/">
              <Image
                src={pageTitle === "Home Two" ? logo2.src : logo1.src}
                alt=""
                width="85px"
              />
            </Link>
          </div>
          <div className="main-menu-wrapper__main-menu">
            <span onClick={() => toggleMenu()}  className="mobile-nav__toggler">
              <i className="fa fa-bars"></i>
            </span>
            

            <ul className="main-menu__list">
              {navItems.map((navItem) => (
                <NavItem key={navItem.id} navItem={navItem} />
              ))}
              <li>
                <button type="button" onClick={() => setIsOpen(true)} className="button-header">Hire Us</button>
              </li>
            </ul>
          </div>

          <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <Image src={phoneIcon.src} alt="" />
              </div>
              <div className="main-menu-wrapper__call-number">
                <p>Call Anytime</p>
                <h5>
                  <a href={`tel:${phone.split(" ").join("")}`}>+ {phone}</a> &nbsp;&nbsp;
                  <a href={`tel:${phone1.split(" ").join("")}`}>+ {phone1}</a>
                </h5>
              </div>
            </div>
            {/* <div className="main-menu-wrapper__search-box">
              <span
                onClick={toggleSearch}
                style={{ cursor: "pointer" }}
                className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
              ></span>
            </div> */}

            <div className="header-form">
              <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>

                <button onClick={() => setIsOpen(false)} className="close-form">×</button>

               
                <PopupHireUs/>

              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
