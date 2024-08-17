/* eslint-disable @next/next/no-img-element */
import footerData from "@/app/data/footerData";
import Link from "next/link";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const { bg, title, phone, phone1, phoneIcon, mailIcon, googlepartner, facebook, googlereview, socials, address, city, email, links, year, author } =
  footerData;

const SiteFooter = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   console.log(formData.get("email"));
  // };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div
          className="site-footer__top-shape"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <div className="site-footer__top-inner">
            <div className="site-footer__top-left">
              <h3 className="site-footer__top-left-title">{title}</h3>
              <a
                href={`tel:${phone.split(" ").join("")}`}
                className="site-footer__top-left-phone"
              >
                + {phone}
              </a> &nbsp;&nbsp;
              <a
                href={`tel:${phone1.split(" ").join("")}`}
                className="site-footer__top-left-phone"
              >
                + {phone1}
              </a>
            </div>
            <div className="site-footer__top-right">
              <div className="site-footer__top-right-social">
                {socials.map(({ id, icon, href }) => (
                  <a key={id} href={href}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="site-footer__middle">
        <Container>
          <div className="site-footer__middle-inner">
            <Row>
              <Col xl={4} lg={4} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">TZAR DIGITAL AGENCY</h3>
                  <p className="footer-widget__contact-text">
                    {address} <br /> {city}
                  </p>
                  {/* <div className="footer-widget__contact-email-phone">
                    <h3 className="footer-widget__title">Contact Us</h3>
                    <div className="footer-flex">
                      <img src={mailIcon.src} alt="" width="15px" height="15px" /> &nbsp;
                      <a
                        href={`mailto:${email}`}
                        className="footer-widget__contact-text"
                      >
                        {email}
                      </a>
                    </div>
                    <img src={phoneIcon.src} alt="" width="15px" /> &nbsp;
                    <a
                      href={`tel:${phone.split(" ").join("")}`}
                      className="footer-widget__contact-text"
                    >
                      + {phone}
                    </a>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href={`tel:${phone1.split(" ").join("")}`}
                      className="footer-widget__contact-text"
                    >
                      + {phone1}
                    </a>
                  </div> */}
                </div>
              </Col>
              <Col xl={4} lg={4} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Links</h3>
                  <div>
                    <ul className="footer-widget__links-list list-unstyled clearfix">
                      {links.slice(0, 6).map(({ id, title, href }) => (
                        <li key={id}>
                          <Link href={href}>{title}</Link>
                        </li>

                      ))}
                      <br />
                      {/* <li>
                        <div className="button-header-btn">
                          <Link href="/singup-form" className="footer-widget__contact-text footerenq-btn">Enquiry Now</Link>
                        </div>
                      </li> */}
                    </ul>

                  </div>
                  <ul className="footer-widget__links-list footer-widget__links-list-two list-unstyled clearfix">
                    {links.slice(6).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </Col>
              <Col xl={4} lg={4} className="animated fadeInUp">
                <div className="footer-widget__contact-email-phone">
                  <h3 className="footer-widget__title">Contact Us</h3>
                  <div className="footer-flex">
                    <img src={mailIcon.src} alt="" width="15px" height="15px" /> &nbsp;
                    <a
                      href={`mailto:${email}`}
                      className="footer-widget__contact-text"
                    >
                      {email}
                    </a>
                  </div>
                  <img src={phoneIcon.src} alt="" width="15px" /> &nbsp;
                  <a
                    href={`tel:${phone.split(" ").join("")}`}
                    className="footer-widget__contact-text"
                  >
                    + {phone} ,
                  </a>
                  {/* <br />*/}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href={`tel:${phone1.split(" ").join("")}`}
                    className="footer-widget__contact-text"
                  >
                    + {phone1}
                  </a>
                </div>
                <Row>
                  <Col xl={12}>
                    <div className="footer-partners">
                      <a href="https://maps.app.goo.gl/ryxbajb4yg24TbrG8">
                        <img src={googlereview.src} alt="googlereview" width="100px" height="40px" />
                      </a>

                      <img src={googlepartner.src} alt="googlepartner" width="150px" height="55px" />
                      <a href="https://www.facebook.com/TzarAgency">
                        <img src={facebook.src} alt="facebook" width="130px" height="50px" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {/* <div className="singup-none">
            <Link href="/Singup-EnquiryNow" className="footer-widget__contact-text">Enquiry Now</Link>
          </div> */}
          <div className="singup-none">
            <h5 className="footer-widget__titlebranch">Most Popular Location For Our Online Digital Marketing Services: </h5>
            <Link href="/Digital-Marketing-Services-in-Mumbai" className="footer-widget__contact-text">Digital Marketing Services in Mumbai</Link>
            {/* &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Chennai" className="footer-widget__contact-text">Digital Marketing Services in Chennai</Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Kolkata" className="footer-widget__contact-text">Digital Marketing Services in Kolkata</Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Hyderabad" className="footer-widget__contact-text">Digital Marketing Services in Hyderabad</Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Delhi" className="footer-widget__contact-text">Digital Marketing Services in Delhi</Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Bangalore" className="footer-widget__contact-text">Digital Marketing Services in Bangalore </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Gurgaon" className="footer-widget__contact-text">Digital Marketing Services in Gurgaon</Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Ghaziabad" className="footer-widget__contact-text">Digital Marketing Services in Ghaziabad</Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Noida" className="footer-widget__contact-text">Digital Marketing Services in Noida & Greater Noida  </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Pune" className="footer-widget__contact-text">Digital Marketing Services in Pune </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Ahmedabad" className="footer-widget__contact-text">Digital Marketing Services in Ahmedabad </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Lucknow" className="footer-widget__contact-text">Digital Marketing Services in Lucknow </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Indore" className="footer-widget__contact-text">Digital Marketing Services in Indore </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-Kanpur" className="footer-widget__contact-text">Digital Marketing Services in Kanpur </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-USA" className="footer-widget__contact-text">Digital Marketing Services in USA </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-USA" className="footer-widget__contact-text">Digital Marketing Services in New York </Link>
            &nbsp; | &nbsp; <Link href="/Digital-Marketing-Services-in-USA" className="footer-widget__contact-text">Digital Marketing Services in New jersey </Link> */}
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyrights, {year} <a href="#">{author}</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
