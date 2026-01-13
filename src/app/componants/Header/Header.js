"use client";
import { useRootContext } from "@/app/componants/context/context";
import header from "@/app/data/header";
import Link from "next/link";
import { Image } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import MobileMenu from "../MobileMenu/MobileMenu";

const { logo1, logo2, phone, phone1, phoneIcon, navItems } = header;

const NavItem = ({ navItem = {}, isMobile = false }) => {
  const { name, href, subNavItems = [] } = navItem;
  const [open, setOpen] = useState(false);

  return (
    <li
      style={{
        position: "relative",
        listStyle: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <Link
        href={href}
        onClick={(e) =>
          isMobile &&
          subNavItems.length > 0 &&
          (e.preventDefault(), setOpen(!open))
        }
        style={{
          display: "block",
          padding: "10px 15px",
          textDecoration: "none",
          color: "#fff",
        }}
      >
        {name}
      </Link>

      {subNavItems.length > 0 && (
        <ul
          style={{
            display: open ? "block" : "none",
            position: isMobile ? "relative" : "absolute",
            top: isMobile ? "0" : "100%",
            left: 0,
            background: "#fff",
            minWidth: "180px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "5px 0",
            zIndex: 9999,
          }}
        >
          {subNavItems.map((subItem) => (
            <li
              key={subItem.id}
              style={{ listStyle: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#023878";
                e.currentTarget.firstChild.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.firstChild.style.color = "#0D2C6B";
              }}
            >
              <Link
                href={subItem.href}
                style={{
                  display: "block",
                  padding: "8px 15px",
                  color: "#023878",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = ({ pageTitle }) => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [headerHeight, setHeaderHeight] = useState(0);

  const isMobile = windowWidth <= 1100;
  const isLaptop = windowWidth <= 1450;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", updateHeaderHeight);
    updateHeaderHeight();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", updateHeaderHeight);
    };
  }, []);

  const customStyles = {
    overlay: { backgroundColor: "transparent", zIndex: 9999 },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
      borderRadius: 0,
      padding: 0,
      background: "transparent",
    },
  };

  return (
    <>
      {/* TOP MOVING BAR */}
      <div className="topbar">
  <div className="topbar-track">
    {/* First set */}
    <div className="topbar-text">
      25,000+ Corporate Gifts Delivered Pan India — Now Order Directly from Our Website
    </div>
    <div className="topbar-text">
      Trusted by 25,000+ Businesses Across India
    </div>
    <div className="topbar-text">
      Fast Delivery • Premium Quality • Best Pricing
    </div>

    {/* Duplicate set for seamless loop */}
    <div className="topbar-text">
      25,000+ Corporate Gifts Delivered Pan India — Now Order Directly from Our Website
    </div>
    <div className="topbar-text">
      Trusted by 25,000+ Businesses Across India
    </div>
    <div className="topbar-text">
      Fast Delivery • Premium Quality • Best Pricing
    </div>
  </div>
</div>


      {/* Space for fixed header + topbar */}
      <div style={{ paddingTop: headerHeight + 40 }} />

      <header
        ref={headerRef}
        style={{
          width: "100%",
          background: "#023878",
          position: "fixed",
          top: 40,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "top 0.3s ease-in-out",
          fontFamily: "'Federo', sans-serif",
          fontSize: "18px",
          textTransform: "capitalize",
        }}
      >
        <nav
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "10px 20px",
            gap: 10,
          }}
        >
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <Link href="/">
              <Image
                src={pageTitle === "Home Two" ? logo2.src : logo1.src}
                alt="Logo"
                width="70px"
              />
            </Link>
          </div>

          {/* MENU AREA */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: isMobile ? "flex-end" : "center",
              minWidth: 0,
            }}
          >
            {/* HAMBURGER MENU */}
            {isMobile && (
              <span
                onClick={() => setIsOpen(true)}
                style={{
                  cursor: "pointer",
                  marginLeft: "auto",
                }}
              >
                <i
                  className="fa fa-bars"
                  style={{ fontSize: "27px", color: "#fff" }}
                ></i>
              </span>
            )}

            {/* DESKTOP MENU */}
            <ul
              style={{
                display: isMobile ? "none" : "flex",
                listStyle: "none",
                padding: 0,
                margin: 0,
                gap: isLaptop ? 10 : 26,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <NavItem key={item.id} navItem={item} isMobile={false} />
              ))}

              <li>
                <Link
                  href="/hire-us"
                  style={{
                    padding: "5px 20px",
                    textDecoration: "none",
                    color: "#0D2C6B",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  Hire Us
                </Link>
              </li>
            </ul>
          </div>

          {/* PHONE */}
          <div
            style={{
              display: isMobile ? "none" : "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image src={phoneIcon.src} alt="" width="34" height="34" />
            <div>
              <p style={{ margin: 0, color: "#fff" }}>Call Anytime</p>
              <h5 style={{ margin: 0, fontSize: "16px", color: "#fff" }}>
                + {phone} &nbsp; + {phone1}
              </h5>
            </div>
          </div>

          {/* MOBILE MENU */}
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
          >
            <div style={{ background: "#0D2C6B", padding: 20 }}>
              <span
                onClick={() => setIsOpen(false)}
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  color: "#fff",
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              <MobileMenu />
            </div>
          </Modal>
        </nav>
      </header>
    </>
  );
};

export default Header;

// "use client";
// import header from "@/app/data/header";
// import Link from "next/link";
// import { Image } from "react-bootstrap";
// import React, { useState, useEffect, useRef } from "react";
// import Modal from "react-modal";
// import MobileMenu from "../MobileMenu/MobileMenu";

// const { logo1, logo2, phone, phone1, phoneIcon, navItems } = header;

// const NavItem = ({ navItem = {}, isMobile = false }) => {
//   const { name, href, subNavItems = [] } = navItem;
//   const [open, setOpen] = useState(false);

//   return (
//     <li
//       style={{
//         position: "relative",
//         listStyle: "none",
//         cursor: "pointer",
//         whiteSpace: "nowrap",
//       }}
//       onMouseEnter={() => !isMobile && setOpen(true)}
//       onMouseLeave={() => !isMobile && setOpen(false)}
//     >
//       <Link
//         href={href}
//         onClick={(e) =>
//           isMobile &&
//           subNavItems.length > 0 &&
//           (e.preventDefault(), setOpen(!open))
//         }
//         style={{
//           padding: "8px 12px",
//           textDecoration: "none",
//           color: "#fff",
//           fontWeight: "500",
//           whiteSpace: "nowrap",
//         }}
//       >
//         {name}
//       </Link>

//       {subNavItems.length > 0 && (
//         <ul
//           style={{
//             display: open ? "block" : "none",
//             position: isMobile ? "relative" : "absolute",
//             top: "100%",
//             left: 0,
//             background: "#fff",
//             minWidth: "180px",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
//             padding: "8px 0",
//             zIndex: 9999,
//           }}
//         >
//           {subNavItems.map((subItem) => (
//             <li key={subItem.id} style={{ listStyle: "none" }}>
//               <Link
//                 href={subItem.href}
//                 style={{
//                   display: "block",
//                   padding: "10px 18px",
//                   color: "#023878",
//                   textDecoration: "none",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {subItem.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// const Header = ({ pageTitle }) => {
//   const headerRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200
//   );
//   const [headerHeight, setHeaderHeight] = useState(0);

//   const isMobile = windowWidth <= 1100;

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);

//     const updateHeaderHeight = () => {
//       if (headerRef.current) {
//         setHeaderHeight(headerRef.current.offsetHeight);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("load", updateHeaderHeight);
//     updateHeaderHeight();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("load", updateHeaderHeight);
//     };
//   }, []);

//   const customStyles = {
//     overlay: { backgroundColor: "transparent", zIndex: 9999 },
//     content: {
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//       borderRadius: 0,
//       padding: 0,
//       background: "transparent",
//     },
//   };

//   return (
//     <>
//       {/* TOP BAR */}
//       <div className="topbar">
//         <div className="topbar-track">
//           <div className="topbar-text">
//             25,000+ Corporate Gifts Delivered Pan India — Now Order Directly from Our Website
//           </div>
//           <div className="topbar-text">Trusted by 25,000+ Businesses Across India</div>
//           <div className="topbar-text">Fast Delivery • Premium Quality • Best Pricing</div>

//           <div className="topbar-text">
//             25,000+ Corporate Gifts Delivered Pan India — Now Order Directly from Our Website
//           </div>
//           <div className="topbar-text">Trusted by 25,000+ Businesses Across India</div>
//           <div className="topbar-text">Fast Delivery • Premium Quality • Best Pricing</div>
//         </div>
//       </div>

//       <div style={{ paddingTop: headerHeight + 40 }} />

//       {/* HEADER */}
//       <header
//         ref={headerRef}
//         style={{
//           width: "100%",
//           background: "#023878",
//           position: "fixed",
//           top: 40,
//           left: 0,
//           zIndex: 1000,
//           fontFamily: "'Federo', sans-serif",
//         }}
//       >
//         <nav
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "10px 30px",
//             width: "100%",
//             flexWrap: "nowrap",
//           }}
//         >
//           {/* LOGO */}
//           <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
//             <Link href="/">
//               <Image
//                 src={pageTitle === "Home Two" ? logo2.src : logo1.src}
//                 alt="Logo"
//                 width="70"
//               />
//             </Link>
//           </div>

//           {/* MENU */}
//           <ul
//             style={{
//               display: isMobile ? "none" : "flex",
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               gap: "22px",
//               alignItems: "center",
//               flexWrap: "nowrap",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {navItems.map((item) => (
//               <NavItem key={item.id} navItem={item} />
//             ))}

//             {/* Hire Us */}
//             <li style={{ display: "flex", alignItems: "center" }}>
//               <Link
//                 href="/hire-us"
//                 style={{
//                   padding: "8px 20px",
//                   color: "#023878",
//                   background: "#fff",
//                   borderRadius: "8px",
//                   textDecoration: "none",
//                   fontWeight: "600",
//                   height: "38px",
//                   display: "flex",
//                   alignItems: "center",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 Hire Us
//               </Link>
//             </li>

//             {/* Payment */}
//            <li style={{ display: "flex", alignItems: "center" }}>
//               <Link
//                 href="/payment"
//                 style={{
//                   padding: "8px 20px",
//                   color: "#023878",
//                   background: "#fff",
//                   borderRadius: "8px",
//                   textDecoration: "none",
//                   fontWeight: "600",
//                   height: "38px",
//                   display: "flex",
//                   alignItems: "center",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 Payment
//               </Link>
//             </li>
//           </ul>

//           {/* CALL ANYTIME */}
//           <div
//             style={{
//               display: isMobile ? "none" : "flex",
//               alignItems: "center",
//               gap: 10,
//               whiteSpace: "nowrap",
//               flexShrink: 0,
//             }}
//           >
//             <Image src={phoneIcon.src} alt="" width="32" height="32" />
//             <div style={{ lineHeight: "1.2" }}>
//               <p style={{ margin: 0, color: "#fff", fontSize: "12px" }}>
//                 Call Anytime
//               </p>
//               <h5 style={{ margin: 0, fontSize: "14px", color: "#fff" }}>
//                 + {phone} &nbsp; + {phone1}
//               </h5>
//             </div>
//           </div>

//           {/* MOBILE MENU ICON */}
//           {isMobile && (
//             <span onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
//               <i className="fa fa-bars" style={{ fontSize: "26px", color: "#fff" }}></i>
//             </span>
//           )}

//           {/* MOBILE MENU MODAL */}
//           <Modal
//             isOpen={isOpen}
//             onRequestClose={() => setIsOpen(false)}
//             style={customStyles}
//           >
//             <div style={{ background: "#023878", padding: 20 }}>
//               <span
//                 onClick={() => setIsOpen(false)}
//                 style={{ cursor: "pointer", fontSize: "24px", color: "#fff" }}
//               >
//                 <i className="fa fa-times"></i>
//               </span>
//               <MobileMenu />
//             </div>
//           </Modal>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;
