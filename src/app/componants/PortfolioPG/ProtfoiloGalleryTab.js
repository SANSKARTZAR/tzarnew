"use client";
/* eslint-disable @next/next/no-img-element */
import studioTabOne from "@/app/data/studioTabOne";
import React, { Suspense, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from "@react-hook/window-size/throttled";
import TabButton from "@/app/componants/PortfolioPG/TabButton";
import CreativeBanners from "@/app/componants/PortfolioPG/CreativeBanners";
import WebDesign from "@/app/componants/PortfolioPG/WebDesign";
import Reels from "@/app/componants/PortfolioPG/Reels";
import PrintPackaging from "@/app/componants/PortfolioPG/PrintPackaging";
import NightClubShoot from "@/app/componants/PortfolioPG/NightClubShoot";
import BehanceGall from "@/app/componants/PortfolioPG/BehanceGall";


const { bg, title, tagline, projects, filters } = studioTabOne;

const masonryOptions = {
    transitionDuration: 500,
};

const getFilteredProjects = (filterData) =>
    filterData === "filterData"
        ? projects
        : projects.filter((project) => project.filter.includes(filterData));

// const getCount = (filterData) => getFilteredProjects(filterData).length;

const ProtfoiloGalleryTab = ({ projectPage = true, filterData }) => {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 600;
    const [filter, setFilter] = useState('bra');
    const filteredProjects = getFilteredProjects(filter);

    const initialState = {
        filterData: "",
    };

    const [tab, setTab] = useState('WebDesign');


    if (width > breakpoint) {
        return (
            <section className="protfoilo-tab">
                <Container>
                    <Suspense fallback={<h1>🌀 Loading...</h1>}>
                        <div className="ButtonsTabP">
                            <TabButton
                                isActive={tab === 'WebDesign'}
                                onClick={() => setTab('WebDesign')}
                            >
                                WebDesign
                            </TabButton>
                            <TabButton
                                isActive={tab === 'CreativeBanners'}
                                onClick={() => setTab('CreativeBanners')}
                            >
                                Creative Banners
                            </TabButton>
                            <TabButton
                                isActive={tab === 'reels'}
                                onClick={() => setTab('reels')}
                            >
                                Reels
                            </TabButton>
                            <TabButton
                                isActive={tab === 'Print&Packaging'}
                                onClick={() => setTab('Print&Packaging')}
                            >
                                Print & Packaging
                            </TabButton>
                            <TabButton
                                isActive={tab === 'NightClubShoot'}
                                onClick={() => setTab('NightClubShoot')}
                            >
                                Night Club Shoot
                            </TabButton>
                            <TabButton
                                isActive={tab === 'Behance'}
                                onClick={() => setTab('Behance')}
                            >
                                Behance Gallery
                            </TabButton>
                        </div>

                        {tab === 'CreativeBanners' && <CreativeBanners />}
                        {tab === 'WebDesign' && <WebDesign />}
                        {tab === 'reels' && <Reels />}
                        {tab === 'Print&Packaging' && <PrintPackaging />}
                        {tab === 'NightClubShoot' && <NightClubShoot />}
                        {tab === 'Behance' && <BehanceGall />}

                    </Suspense>
                </Container>
            </section>

        )
    }
    return (
        <>
               <section className="protfoilo-tab">
                <Container>
                <Suspense fallback={<h1>🌀 Loading...</h1>}>
                        <div className="ButtonsTabP">
                            <TabButton
                                isActive={tab === 'WebDesign'}
                                onClick={() => setTab('WebDesign')}
                            >
                                WebDesign
                            </TabButton>
                            <TabButton
                                isActive={tab === 'CreativeBanners'}
                                onClick={() => setTab('CreativeBanners')}
                            >
                                Creative Banners
                            </TabButton>
                            <TabButton
                                isActive={tab === 'reels'}
                                onClick={() => setTab('reels')}
                            >
                                Reels
                            </TabButton>
                            <TabButton
                                isActive={tab === 'Print&Packaging'}
                                onClick={() => setTab('Print&Packaging')}
                            >
                                Print & Packaging
                            </TabButton>
                            <TabButton
                                isActive={tab === 'NightClubShoot'}
                                onClick={() => setTab('NightClubShoot')}
                            >
                                Night Club Shoot
                            </TabButton>
                        </div>

                        {tab === 'CreativeBanners' && <CreativeBanners />}
                        {tab === 'WebDesign' && <WebDesign />}
                        {tab === 'reels' && <Reels />}
                        {tab === 'Print&Packaging' && <PrintPackaging />}
                        {tab === 'NightClubShoot' && <NightClubShoot />}

                    </Suspense>
                </Container>
            </section>
        </>
    )
}

export default ProtfoiloGalleryTab;
