"use client";
import { useRootContext } from "@/app/componants/context/context";
import header from "@/app/data/header";
import useScroll from "@/app/componants/hooks/useScroll";
import Link from "next/link";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import React, { useState } from "react";
import Modal from "react-modal";
import MobileMenu from "../MobileMenu/MobileMenu";

const { logo1, logo2, phone, phone1, navItems } = header;

const Header = ({ pageTitle }) => {
  const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "transparent",
      zIndex: "999999",
    },
  };

  return (
    <header
      className={`main-header${
        pageTitle === "Home Two"
          ? " main-header-two"
          : pageTitle === "Home Three"
          ? " main-header-three"
          : ""
      } clearfix`}
    >
      <nav
        className={`${
          scrollTop
            ? "stricky-header stricked-menu stricky-fixed slideInDown"
            : "slideIn"
        } main-menu animated clearfix${
          pageTitle === "Home Two"
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
          {/* Left: Logo */}
          <div className="main-menu-wrapper__logo">
            <Link href="/">
              <Image
                src={pageTitle === "Home Two" ? logo2.src : logo1.src}
                alt="Tzar Venture Logo"
                width="70px"
              />
            </Link>
          </div>

          {/* Center: Main Menu */}
          <div className="main-menu-wrapper__main-menu">
            <span
              onClick={() => setIsOpen(true)}
              className="mobile-nav__toggler"
            >
              <i className="fa fa-bars"></i>
            </span>

            <ul className="main-menu__list">
              {navItems.map((navItem) => (
                <NavItem key={navItem.id} navItem={navItem} />
              ))}
              <li>
                <Link href="/hire-us" className="button-header">
                  Hire Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Phone Section */}
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
              <p
                style={{
                  margin: "0 0 5px 0",
                  fontSize: "14px",
                  color: "#fff",
                }}
              >
                Call Anytime
              </p>
              <a
                href={`tel:${phone.split(" ").join("")}`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  lineHeight: "1.2",
                }}
              >
                + {phone}
              </a>
              <a
                href={`tel:${phone1.split(" ").join("")}`}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  lineHeight: "1.2",
                }}
              >
                + {phone1}
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="header-form">
              <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
              >
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

      {/* Inline CSS for Menu Alignment */}
      <style jsx>{`
        .main-menu-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center; /* ✅ Vertically centers everything */
          height: 80px;
        }

        .main-menu-wrapper__main-menu {
          display: flex;
          justify-content: center;
          align-items: center; /* ✅ Center menu vertically */
          flex: 1;
        }

        .main-menu__list {
          display: flex;
          align-items: center; /* ✅ Center menu items vertically */
          gap: 20px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .button-header {
          background: #fff;
          color: #002b5c;
          padding: 8px 16px;
          border-radius: 30px;
          font-weight: 600;
          transition: 0.3s;
        }

        .button-header:hover {
          background: #ffc107;
          color: #002b5c;
        }

        /* ✅ Apple Laptop / 1450px screens */
        @media screen and (max-width: 1500px) {
          .main-menu-wrapper__main-menu {
            justify-content: flex-start;
            padding-left: 60px;
          }
          .main-menu__list {
            gap: 15px;
          }
        }

        /* ✅ Medium laptops */
        @media screen and (max-width: 1300px) {
          .main-menu-wrapper__main-menu {
            justify-content: center;
            padding-left: 0;
          }
          .main-menu__list {
            gap: 12px;
          }
        }

        /* ✅ Tablets and below */
        @media screen and (max-width: 992px) {
          .main-menu__list {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
