'use client';
import ecomseopackdata from "@/app/data/ecomseopackdata";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SEOPackAccord from "../SEOServices/SEOPackAccord";

const { bg, faqs, bottomText } = ecomseopackdata;

const EcomPackagestab = () => {
  return (
    <section className="seopack-page" id="seopack-page-cell">
      <Container>
        <div className="get-a-quote-pack-div">
          <table id="seo-packages" className="pack-main">
            <thead>
              <tr>
                <th>Ecommerce Seo</th>
                <th>Nano</th>
                <th>Enterprise</th>
                <th>Blast</th>
                <th>Mega</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Keywords Plan</td>
                <td>Upto 30</td>
                <td>Upto 50</td>
                <td>Upto 100</td>
                <td>Upto 200</td>
              </tr>
              <tr>
                <td>Focus Keywords</td>
                <td>15</td>
                <td>25</td>
                <td>50</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Other Relevant Keywords</td>
                <td>15</td>
                <td>25</td>
                <td>50</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Best Suited for</td>
                <td>Upto 20 Products</td>
                <td>Upto 40 Products</td>
                <td>Upto 50 to 70 Products</td>
                <td>Upto 100 to 150 Products</td>
              </tr>
              <tr>
              <td><a href="#"></a></td>
                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
                <td><a href="#" className="get-a-quote-pack">Get Pricing</a></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="faq-page__top">
          {faqs.map((singlepack) => (
            <div className="faq-page__single">
              <SEOPackAccord faqs={singlepack} />
            </div>
          ))}
        </div>
        <table id="seo-packages">
          <tbody>
            <tr>
            <td><a href="#"></a></td>
              <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
              <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
              <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
              <td><a href="#" className="get-a-quote-pack">SignUp</a></td>
            </tr>
          </tbody>
        </table>
        <Row>
          <Col xl={12}>
            <div className="faq-page__bottom">
              <p className="faq-page__bottom-text">
                {bottomText} <Link href="/about">Find Your Solution</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EcomPackagestab;



