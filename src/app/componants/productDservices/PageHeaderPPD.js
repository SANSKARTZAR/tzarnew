// "use client";
// import bg7 from "@/assets/images/backgrounds/page-header-bgProduct-design-&-Packaging.jpg";
// import bg71 from "@/assets/images/MobileTopBanners/Contact-us.gif";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import { useWindowSize } from "@react-hook/window-size/throttled";
// import styles from "./page.module.css";

// const PageHeaderFAQ = ({ page = "", title = "", parent = "" }) => {
//   const [width, height] = useWindowSize({ fps: 60 });
//   const breakpoint = 683;
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <section className="page-header">
//       <div
//         className={width > breakpoint ? "page-header-bgAu" : "page-header-bgWd"}
//         style={{ backgroundImage: `url(${width > breakpoint ? bg7.src : bg71.src})` }}
//       ></div>
//       <Container>
//         <div className="page-header__innerAuW">
//           <h2>{title || page}</h2>
//           <ul className="thm-breadcrumb list-unstyledAuW">
//             <li>
//               <Link href="/">Home</Link>/
//             </li>{" "}
//             {parent && (
//               <li>
//                 <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>/
//               </li>
//             )}{" "}
//             <li>{page || title}</li>
//           </ul>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default PageHeaderFAQ;

"use client";
import bg7 from "@/assets/images/backgrounds/page-header-bgProduct-design-&-Packaging.jpg";
import bg71 from "@/assets/images/MobileTopBanners/Contact-us.gif";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";

const PageHeaderFAQ = ({ page = "", title = "", parent = "" }) => {
  const [width] = useWindowSize({ fps: 60 });
  const breakpoint = 683;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="page-header">
      <div
        className={width > breakpoint ? "page-header-bgAu" : "page-header-bgWd"}
        style={{ backgroundImage: `url(${width > breakpoint ? bg7.src : bg71.src})` }}
      ></div>
      <Container>
        <div className="page-header__inner">
          <h2 className="page-title">{title || page}</h2>
          <ul className="breadcrumb" style={{color: "#fff"}}>
            <li>
              <Link style={{color: "#fff"}} href="/">Home</Link>/
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`}>{parent}</Link>/
              </li>
            )}{" "}
            <li>{page || title}</li>
          </ul>
        </div>
      </Container>

      {/* ✅ Embedded Styles */}
      <style jsx>{`
        .page-header__inner {
          text-align: center;
          padding: 20px 0;
        }

        /* Title */
        .page-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
          word-wrap: break-word;
        }

        /* Breadcrumb */
        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          font-size: 18px;
          font-weight: 500;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        /* ✅ Responsive Adjustments */
        @media (max-width: 1024px) {
          .page-title {
            font-size: 36px;
          }
          .breadcrumb {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 28px;
          }
          .breadcrumb {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 22px;
          }
          .breadcrumb {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default PageHeaderFAQ;
