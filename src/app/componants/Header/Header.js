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
      className={`main-header${pageTitle === "Home Two"
        ? " main-header-two"
        : pageTitle === "Home Three"
        ? " main-header-three"
        : ""
        } clearfix`}
      style={{ width: "100%" }}
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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 40px",
          height: "90px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div className="main-menu-wrapper__logo" style={{ flex: "0 0 auto" }}>
          <Link href="/">
            <Image
              src={pageTitle === "Home Two" ? logo2.src : logo1.src}
              alt="logo"
              width="70"
              height="auto"
            />
          </Link>
        </div>

        {/* Centered Menu */}
        <div
          className="main-menu-wrapper__main-menu"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            onClick={() => setIsOpen(true)}
            className="mobile-nav__toggler"
            style={{ display: "none" }}
          >
            <i className="fa fa-bars"></i>
          </span>

          <ul
            className="main-menu__list"
            style={{
              display: "flex",
              gap: "35px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {navItems.map((navItem) => (
              <NavItem key={navItem.id} navItem={navItem} />
            ))}
          </ul>
        </div>

        {/* Right Section: Phone + Hire Us */}
        <div
          className="main-menu-wrapper__right"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "20px",
            flex: "0 0 auto",
          }}
        >
          <div
            className="main-menu-wrapper__call"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              color: "#fff",
              textAlign: "right",
              lineHeight: "1.2",
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
                fontSize: "14px",
              }}
            >
              + {phone}
            </a>
            <a
              href={`tel:${phone1.split(" ").join("")}`}
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              + {phone1}
            </a>
          </div>

          {/* Hire Us Button */}
          <Link
            href="/hire-us"
            className="button-header"
            style={{
              backgroundColor: "#fff",
              color: "#0D2C6B",
              padding: "8px 18px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            Hire Us
          </Link>

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
      </nav>
    </header>
  );
};

export default Header;
