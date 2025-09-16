"use client";

import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Enquiryform from "./enquiryform";
import Corporate from "@/assets/images/backgrounds/Corporate.jpg";

// Banner Images
import topBanner from "@/assets/images/backgrounds/banner.webp";

// --- Sample Product Data ---
const employeeGiftingProducts = [
  {
    id: 1,
    name: "Smart Tech Bundle",
    img: Corporate,
    category: "Technology",
    description: "Modern tech accessories including wireless chargers and speakers",
    features: [
      "Latest technology",
      "Universal compatibility",
      "Warranty included",
      "Custom branding available",
    ],
    price: 1999,
  },
  {
    id: 2,
    name: "Mobile Accessories Kit",
    img: Corporate,
    category: "Mobile",
    description: "Complete mobile accessory set with power banks, stands, and more",
    features: [
      "High capacity power bank",
      "Adjustable stands",
      "Multiple connectors",
      "Compact design",
    ],
    price: 899,
  },
  {
    id: 3,
    name: "Premium Audio Set",
    img: Corporate,
    category: "Audio",
    description: "High-quality headphones and speakers for corporate use",
    features: [
      "Superior sound quality",
      "Noise cancellation",
      "Wireless connectivity",
      "Professional design",
    ],
    price: 2499,
  },
];

// Reusable Product Grid Component
const ProductGrid = ({ products }) => {
  return (
    <Row className="mt-4 justify-content-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Row>
  );
};

// ProductCard with Image Hover using inline styles
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col xs={12} sm={6} md={6} lg={5} xl={4} className="mb-4">
      <Card className="shadow-sm h-100" style={{ height: "100%", width: "100%", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={product.img.src}
          alt={product.name}
          style={{
            objectFit: "cover",
            height: "180px",
            width: "100%",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        <Card.Body style={{ padding: "15px" }}>
          <Card.Title className="text-center" style={{ fontSize: "1.1rem" }}>
            {product.name}
          </Card.Title>

          <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
            {product.description}
          </Card.Text>

          <ul style={{ fontSize: "0.85rem", paddingLeft: "20px" }}>
            {product.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="text-primary fw-bold">From ₹{product.price}</span>
            <button className="btn btn-outline-primary btn-sm">Get Quote</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Custom styles for modern tabs
const tabStyles = {
  tabList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    borderBottom: "none",
    marginBottom: "25px",
    padding: 0,
    listStyle: "none",
  },
  tab: {
    padding: "10px 22px",
    borderRadius: "999px",
    border: "1px solid transparent",
    background: "#f0f0f0",
    color: "#333",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
    userSelect: "none",
  },
  tabHover: {
    background: "#e0e0e0",
  },
  tabSelected: {
    backgroundColor: "#003366",
    color: "#fff",
    borderColor: "#003366",
    fontWeight: 600,
  },
};

const CorporateGiftingPage = () => {
  // State for active tab index to apply styles
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${topBanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
          minHeight: "200px",
          position: "relative",
        }}
      >
        <Container fluid>
          <Row className="align-items-center justify-content-center">
            <Col md={7} className="text-center mb-4 mb-md-0">{/* Optional */}</Col>
            <Col xs={12} md={5} lg={4}>
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <Enquiryform />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tabs Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Our Gifting Solutions</h2>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList style={tabStyles.tabList}>
              {["Employee Gifting", "Client Gifting", "Festive Hampers", "Custom Packaging", "Bulk Orders", "Eco-Friendly"].map(
                (tab, idx) => (
                  <Tab
                    key={tab}
                    style={{
                      ...tabStyles.tab,
                      ...(tabIndex === idx ? tabStyles.tabSelected : {}),
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#e0e0e0")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = tabIndex === idx ? "#003366" : "#f0f0f0")
                    }
                  >
                    {tab}
                  </Tab>
                )
              )}
            </TabList>

            <TabPanel>
              <p style={{ textAlign: "center" }}>
                Appreciate your employees with thoughtful gifts tailored to boost morale and loyalty.
              </p>
              <ProductGrid products={employeeGiftingProducts} />
            </TabPanel>

            <TabPanel>
              <p style={{ textAlign: "center" }}>
                Enhance client relationships with elegant, branded gifting options that leave a mark.
              </p>
              <ProductGrid products={employeeGiftingProducts} />
            </TabPanel>

            <TabPanel>
              <p style={{ textAlign: "center" }}>
                Celebrate occasions with premium hampers packed with festive cheer.
              </p>
              <ProductGrid products={employeeGiftingProducts} />
            </TabPanel>

            <TabPanel>
              <p style={{ textAlign: "center" }}>
                Create lasting impressions with fully customized packaging that tells your brand story.
              </p>
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  maxWidth: "600px",
                  margin: "20px auto",
                }}
              >
                <Enquiryform />
              </div>
            </TabPanel>

            <TabPanel>
              <p style={{ textAlign: "center" }}>
                Seamless handling of large quantity corporate gifting with on-time delivery.
              </p>
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "12px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  maxWidth: "600px",
                  margin: "20px auto",
                }}
              >
                <Enquiryform />
              </div>
            </TabPanel>

            <TabPanel>
              <p style={{ textAlign: "center" }}>
                Support the planet with sustainable, eco-friendly gift items and packaging.
              </p>
            </TabPanel>
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default CorporateGiftingPage;
