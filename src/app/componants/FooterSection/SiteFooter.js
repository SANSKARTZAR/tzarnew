/* eslint-disable @next/next/no-img-element */
import footerData from "@/app/data/footerData";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const {
  phone,
  phone1,
  phone2,
  mailIcon,
  phoneIcon,
  googlepartner,
  facebook,
  googlereview,
  socials,
  address,
  city,
  email,
  links,
  year,
  author,
} = footerData;

const SiteFooter = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #141418, #0d0d11)",
        color: "#cfcfd4",
        paddingTop: "70px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ================= MAIN FOOTER ================= */}
      <Container>
        <Row>
          {/* LEFT COLUMN */}
          <Col lg={4} md={12} style={{ marginBottom: "40px" }}>
            <h4 style={{ color: "#fff", marginBottom: "18px" }}>
              TZAR DIGITAL AGENCY
            </h4>

            <p style={{ lineHeight: "1.9", fontSize: "15px" }}>
              {address}
              <br />
              {city}
            </p>

            {/* SOCIAL ICONS */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "18px",
                marginBottom: "24px",
              }}
            >
              {socials.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>

            <Link
              href="/payment"
              style={{
                display: "inline-block",
                color: "#fff",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              MAKE ONLINE PAYMENT
            </Link>
          </Col>

          {/* CENTER COLUMN */}
          <Col lg={4} md={12} style={{ marginBottom: "40px" }}>
            <h4 style={{ color: "#fff", marginBottom: "18px" }}>LINKS</h4>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                rowGap: "12px",
                columnGap: "30px",
                fontSize: "15px",
              }}
            >
              {links.map(({ id, title, href }) => (
                <Link key={id} href={href} style={{ color: "#cfcfd4" }}>
                  {title}
                </Link>
              ))}
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col lg={4} md={12}>
            <h4 style={{ color: "#fff", marginBottom: "18px" }}>
              CONTACT US
            </h4>

            {/* EMAIL */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <img src={mailIcon.src} alt="" width="16" />
              <a href={`mailto:${email}`} style={{ color: "#cfcfd4" }}>
                {email}
              </a>
            </div>

            {/* PHONE NUMBERS — ONE LINE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "25px",
                whiteSpace: "nowrap",
                fontSize: "15px",
              }}
            >
              <img src={phoneIcon.src} alt="" width="16" />

              <a href={`tel:${phone}`} style={{ color: "#cfcfd4" }}>
                {phone}
              </a>

              <span style={{ opacity: 0.4 }}>|</span>

              <a href={`tel:${phone1}`} style={{ color: "#cfcfd4" }}>
                {phone1}
              </a>

              <span style={{ opacity: 0.4 }}>|</span>

              <a href={`tel:${phone2}`} style={{ color: "#cfcfd4" }}>
                {phone2}
              </a>
            </div>

            {/* PARTNERS */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="https://maps.app.goo.gl/ryxbajb4yg24TbrG8">
                <img
                  src={googlereview.src}
                  alt="google-review"
                  height="40"
                />
              </a>
              <img
                src={googlepartner.src}
                alt="google-partner"
                height="45"
              />
              <a href="https://www.facebook.com/TzarAgency">
                <img src={facebook.src} alt="facebook" height="45" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ================= BOTTOM ================= */}
      <div
        style={{
          marginTop: "50px",
          padding: "18px 0 14px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        {/* TRUSTED PAYMENT */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginBottom: "6px",
            fontSize: "12px",
            opacity: 0.75,
          }}
        >
          <span>Trusted Online Payment Partner</span>
          <img
            src="/images.png"
            alt="Razorpay"
            style={{ height: "18px", display: "block" }}
          />
          <span>100% Secure Payment</span>
        </div>

        {/* COPYRIGHT */}
        <div style={{ opacity: 0.85 }}>
          © Copyrights {year} {author}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;