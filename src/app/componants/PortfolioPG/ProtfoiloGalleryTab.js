"use client";
/* eslint-disable @next/next/no-img-element */
import studioTabOne from "@/app/data/studioTabOne";
import React, { Suspense, useState } from "react";
import { Container } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";
import TabButton from "@/app/componants/PortfolioPG/TabButton";
import CreativeBanners from "@/app/componants/PortfolioPG/CreativeBanners";
import WebDesign from "@/app/componants/PortfolioPG/WebDesign";
import Reels from "@/app/componants/PortfolioPG/Reels";
import PrintPackaging from "@/app/componants/PortfolioPG/PrintPackaging";
import NightClubShoot from "@/app/componants/PortfolioPG/NightClubShoot";
import BehanceGall from "@/app/componants/PortfolioPG/BehanceGall";

const { projects } = studioTabOne;

const getFilteredProjects = (filterData) =>
  filterData === "filterData"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

const ProtfoiloGalleryTab = ({ projectPage = true, filterData }) => {
  const [width] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  const [filter, setFilter] = useState("bra");
  const [tab, setTab] = useState("WebDesign");

  return (
    <section className="protfoilo-tab">
      <Container>
        <Suspense fallback={<h1>🌀 Loading...</h1>}>
          <div className="ButtonsTabP">
            <TabButton isActive={tab === "WebDesign"} onClick={() => setTab("WebDesign")}>
              WebDesign
            </TabButton>
            <TabButton isActive={tab === "CreativeBanners"} onClick={() => setTab("CreativeBanners")}>
              Creative Banners
            </TabButton>
            <TabButton isActive={tab === "reels"} onClick={() => setTab("reels")}>
              Reels
            </TabButton>
            <TabButton isActive={tab === "Print&Packaging"} onClick={() => setTab("Print&Packaging")}>
              Print & Packaging
            </TabButton>
            <TabButton isActive={tab === "NightClubShoot"} onClick={() => setTab("NightClubShoot")}>
              Night Club Shoot
            </TabButton>
            {width > breakpoint && (
              <TabButton isActive={tab === "Behance"} onClick={() => setTab("Behance")}>
                Behance Gallery
              </TabButton>
            )}
          </div>

          {tab === "CreativeBanners" && <CreativeBanners />}
          {tab === "WebDesign" && <WebDesign />}
          {tab === "reels" && <Reels />}
          {tab === "Print&Packaging" && <PrintPackaging />}
          {tab === "NightClubShoot" && <NightClubShoot />}
          {tab === "Behance" && width > breakpoint && <BehanceGall />}
        </Suspense>
      </Container>

      {/* ✅ Styled JSX for horizontal scroll */}
     <style jsx>{`
  .ButtonsTabP {
    display: flex;
    flex-direction: column; /* default for mobile */
    gap: 12px;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .ButtonsTabP :global(button) {
    width: 240px;
    height: 48px;
    font-size: 14px;
    padding: 0 16px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #003b80;
    color: white;
  }

  /* ✅ Tablet breakpoint (iPad mini and up) — horizontal layout */
  @media (min-width: 768px) {
    .ButtonsTabP {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap; /* allow wrap if needed */
    }

    .ButtonsTabP :global(button) {
      width: 180px;
    }
  }

  /* ✅ Optional: on large tablets like iPad Pro, increase width */
  @media (min-width: 1024px) {
    .ButtonsTabP :global(button) {
      width: 200px;
    }
  }

  /* ✅ Optional: on mobile devices (smaller than 480px) */
  @media (max-width: 480px) {
    .ButtonsTabP :global(button) {
      width: 60%;
    }
  }

  .protfoilo-tab {
    padding-bottom: 80px; /* Prevent floating icons overlap */
  }
`}</style>

    </section>
  );
};

export default ProtfoiloGalleryTab;
