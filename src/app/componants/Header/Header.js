"use client"
import { useRootContext } from "@/app/componants/context/context";
import header from "@/app/data/header";
import useScroll from "@/app/componants/hooks/useScroll";
import Link from "next/link";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import React, { useState } from 'react';
import Modal from 'react-modal';
import MobileMenu from "../MobileMenu/MobileMenu";

const { logo1, logo2, phone, phone1, navItems } = header;

const Header = ({ pageTitle }) => {
  const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'transparent',
      zIndex: '999999'
    },
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
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <div className="main-menu-wrapper__logo">
            <Link href="/">
              <Image
                src={pageTitle === "Home Two" ? logo2.src : logo1.src}
                alt=""
                width="70px"
              />
            </Link>
          </div>

          {/* Main Menu */}
          {/* Main Menu */}
<div
  className="main-menu-wrapper__main-menu"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }}
>
  <span onClick={() => setIsOpen(true)} className="mobile-nav__toggler">
    <i className="fa fa-bars"></i>
  </span>

  <ul
    className="main-menu__list"
    style={{
      display: "flex",
      gap: "15px", // default gap
      margin: 0,
      padding: 0,
      flexWrap: "wrap", // allows wrapping on smaller screens
      justifyContent: "center",
      listStyle: "none",
    }}
  >
    {navItems.map((navItem) => (
      <NavItem key={navItem.id} navItem={navItem} />
    ))}
    <li>
      <Link href="/hire-us" className="button-header">Hire Us</Link>
    </li>
  </ul>
</div>

{/* Add this style tag somewhere in your component or global CSS */}
<style jsx>{`
  @media screen and (max-width: 1440px) { /* Apple laptops like 13-15 inch */
    .main-menu__list {
      gap: 5px !important; /* reduce horizontal gap */
    }
  }

  @media screen and (max-width: 1200px) { 
    .main-menu__list {
      gap: 8px !important;
      justify-content: center;
    }
  }

  @media screen and (max-width: 992px) { 
    .main-menu__list {
      flex-direction: column; /* stack menu items */
      align-items: center;
      gap: 12px !important;
    }
  }
`}</style>


          {/* Phone Section (Right Side) */}
          <div className="main-menu-wrapper__right">
            <div
              className="main-menu-wrapper__call"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "#fff",
                textAlign: "right",
              }}
            >
              <p style={{ margin: "0 0 5px 0", fontSize: "14px", color: "#fff" }}>
                Call Anytime
              </p>
              <a
                href={`tel:${phone.split(" ").join("")}`}
                style={{ textDecoration: "none", color: "#fff", lineHeight: "1.2" }}
              >
                + {phone}
              </a>
              <a
                href={`tel:${phone1.split(" ").join("")}`}
                style={{ textDecoration: "none", color: "#fff", lineHeight: "1.2" }}
              >
                + {phone1}
              </a>
            </div>

            {/* Mobile Menu Modal */}
            <div className="header-form">
              <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <div className="mobile-nav__wrapper animated fadeInLeft">
                  <div className="mobile-nav__content">
                    <span
                      onClick={() => setIsOpen(false)}
                      className="mobile-nav__close mobile-nav__toggler"
                    >
                      <i className="fa fa-times"></i>
                    </span>
                    <MobileMenu />
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
