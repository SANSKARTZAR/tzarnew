"use client";
import { Container, Row, Col } from "react-bootstrap";
import {
  Search,
  Share2,
  BarChart3,
  PenTool,
  LineChart,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: <Search size={22} />,
    title: "SEO & Search",
    desc: "Dominate search rankings with data-driven SEO strategies that drive organic growth.",
  },
  {
    icon: <Share2 size={22} />,
    title: "Social Media",
    desc: "Build engaged communities and viral campaigns across all major platforms.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Paid Advertising",
    desc: "Maximize ROI with precision-targeted PPC and display advertising campaigns.",
  },
  {
    icon: <PenTool size={22} />,
    title: "Content Strategy",
    desc: "Compelling content that tells your story and converts audiences into customers.",
  },
  {
    icon: <LineChart size={22} />,
    title: "Analytics & Data",
    desc: "Deep insights and reporting that inform smarter business decisions.",
  },
  {
    icon: <Mail size={22} />,
    title: "Email Marketing",
    desc: "Nurture leads and drive conversions with automated email journeys.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Deep dive into your business, audience, and goals to craft the perfect strategy.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Data-driven roadmap designed to achieve measurable results and ROI.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Flawless implementation with continuous optimization and A/B testing.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "Amplify what works, refine what doesn’t, and accelerate your growth.",
  },
];

export default function ServicesAndProcess() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "100px 0",
        color: "#fff",
      }}
    >
      <Container>
        {/* SERVICES */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ fontSize: 42, fontWeight: 700 }}>
            Services That{" "}
            <span style={{ color: "#000" }}>Drive Growth</span>
          </h2>
          <p
            style={{
              color: "#000",
              maxWidth: 600,
              margin: "10px auto 0",
            }}
          >
            Full-stack digital marketing solutions tailored to your business goals
          </p>
        </div>

        <Row className="g-4" style={{ marginBottom: 80 }}>
          {services.map((item, i) => (
            <Col lg={4} md={6} key={i}>
              <div
                style={{
                  background: "#003366",
                  border: "1px solid #003366",
                  borderRadius: 16,
                  padding: 28,
                  height: "100%",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#003366",
                    marginBottom: 16,
                  }}
                >
                  {item.icon}
                </div>

                <h5 style={{ fontSize: 18, marginBottom: 8, color: "#fff" }}>
                  {item.title}
                </h5>
                <p style={{ color: "#fff", fontSize: 14 }}>
                  {item.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* PROCESS */}
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 style={{ fontSize: 42, fontWeight: 700 }}>
              Our Proven <span style={{ color: "#003366" }}>Process</span>
            </h2>
            <p
              style={{
                color: "#000",
                maxWidth: 520,
                marginTop: 10,
              }}
            >
              A systematic approach that has generated over $10M in revenue for
              our clients. Every step is designed for maximum impact.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 20,
              }}
            >
              {["Google Partner", "Meta Business Partner", "HubSpot Certified"].map(
                (badge, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1px solid #003366",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: 13,
                      color: "#003366",
                    }}
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </Col>

          <Col lg={6}>
            {process.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 20,
                  background: "#fff",
                  border: "1px solid #003366",
                  borderRadius: 16,
                  padding: 24,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#003366",
                  }}
                >
                  {item.step}
                </div>

                <div>
                  <h5 style={{ marginBottom: 6 }}>{item.title}</h5>
                  <p style={{ color: "#003366", fontSize: 14 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
