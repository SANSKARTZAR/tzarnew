"use client"
import { useRootContext } from "@/app/componants/context/context";
import header from "@/app/data/header";
import Link from "next/link";
// import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import React, { useState } from 'react'
import Modal from 'react-modal'
// import PopupHireUs from "@/components/ContactPage/PopupHireUs";

const { logo1, phone, email, socials, navItems } = header;

const MobileMenu = () => {
  // const { toggleMenu, menuStatus } = useRootContext();

  // const [isOpen, setIsOpen] = useState(false)
  // const customStyles = {
  //   overlay: {
  //     backgroundColor: 'rgb(2 56 120)',
  //     zindex:'999999'
  //   },
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-16%',
  //     transform: 'translate(-50%, -50%)',
  //     zindex:'999999',
  //     borderradius:'none',
  //     width:'100%',
  //     height: '100vh'
  //   }
  // };
  return (
    <>
    {/* <div className="mobile-nav__wrapper  animated " > */}
      {/* <div
        onClick={() => toggleMenu()}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div> */}
      {/* <div className="mobile-nav__content">
        <span
          onClick={() => toggleMenu()}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span> */}

        <div className="logo-box">
          <Link href="/" aria-label="logo image">
              <Image src={logo1.src} width={155} alt="" />
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
                
          </ul>
        </div>
        {/* <button type="button" onClick={() => setIsOpen(true)} className="button-header">Hire Us</button> */}
       
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {socials.map((icon, i) => (
              <a key={i} href="#" className={icon}></a>
            ))}
          </div>
        </div>
      {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default MobileMenu;
