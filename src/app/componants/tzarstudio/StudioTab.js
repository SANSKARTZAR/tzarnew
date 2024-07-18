/* eslint-disable @next/next/no-img-element */
"use client";
import studioTabOne from "@/app/data/studioTabOne";
import React, { Suspense, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import Title from "../Reuseable/Title";
// import SingleProject from "./SingleProject";
import Link from "next/link";
import { useWindowSize } from "@react-hook/window-size/throttled";
import MobileMock from "@/assets/images/MobileShowcase/studioframe.png"
import TabButton from "./TabButton";
import AdverTising from "./AdverTising";
import Food from "./Food";
import Reels from "./Reels";
import StudioProducts from "./StudioProducts";
import Slider from "react-slick";
import clapper from "@/assets/images/MobileShowcase/clapper.gif"
import MobileSlide1 from "@/assets/images/MobileShowcase/clapperslides1.png"
import MobileSlide2 from "@/assets/images/MobileShowcase/clapperslides2.png"
import MobileSlide3 from "@/assets/images/MobileShowcase/clapperslides3.png"
import MobileSlide4 from "@/assets/images/MobileShowcase/clapperslides4.png"
import MobileSlide5 from "@/assets/images/MobileShowcase/clapperslides5.png"
import MobileSlide6 from "@/assets/images/MobileShowcase/clapperslides6.png"
import MobileSlide7 from "@/assets/images/MobileShowcase/clapperslides7.png"
import MobileSlide8 from "@/assets/images/MobileShowcase/clapperslides8.png"
import MobileSlide9 from "@/assets/images/MobileShowcase/clapperslides9.png"
// import MobileSlide10 from "@/images/MobileShowcase/clapperslides10.png"
const { bg, title, tagline, projects, filters } = studioTabOne;

const masonryOptions = {
  transitionDuration: 500,
};

const getFilteredProjects = (filterData) =>
  filterData === "filterData"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

// const getCount = (filterData) => getFilteredProjects(filterData).length;

const StudioTabOne = ({ projectPage = true, filterData }) => {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  const [filter, setFilter] = useState('bra');
  const filteredProjects = getFilteredProjects(filter);

  const initialState = {
    filterData: "",
  };

  const [tab, setTab] = useState('studioproudcts');

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    autoplay: true,
    slidesToShow: 7,
    arrows: false,
    autoplaySpeed: 1000,
    speed: 500
  };

  if (width > breakpoint) {
    return (
      <section className="project-one-studio">
      <Container>
        <div className="slider-studioservice">
          <img src={clapper.src} alt="mkstudio" className="clapper" width="200px" />

          <Slider {...settings} className="ContainerWebclapperstudio">
            <div className="clapperSlidebox" >
              <img src={MobileSlide1.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide2.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide3.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide4.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide5.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide6.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide7.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide8.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide9.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            {/* <div className="clapperSlidebox" >
              <img src={MobileSlide10.src} alt="mkstudio" className="clapperservicetudio" />
            </div> */}
          </Slider>
        </div>
</Container>
        <Container>
          {!projectPage && (
            <Title title={title} tagline={tagline} className="text-center" />
          )}
          <div
            className="counter-one-pattern-studio"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>

          <Row>
            <Col xl={12} md={12} sm={12}>
              <Title title={title} tagline={tagline} className="text-center" />

              <Suspense fallback={<h1>🌀 Loading...</h1>}>
                <div className="studiotab-btn">
                  <TabButton
                    isActive={tab === 'studioproudcts'}
                    onClick={() => setTab('studioproudcts')}
                  >
                    PRODUCTS
                  </TabButton>

                  <TabButton
                    isActive={tab === 'food'}
                    onClick={() => setTab('food')}
                  >
                    FOOD
                  </TabButton>
                  <TabButton
                    isActive={tab === 'advertising'}
                    onClick={() => setTab('advertising')}
                  >
                    CREATIVE SHOOT
                  </TabButton>
                  <TabButton
                    isActive={tab === 'reels'}
                    onClick={() => setTab('reels')}
                  >
                    SOCIAL POST
                  </TabButton>
                  <Link
                    href="/portfolio"
                    className=""
                  >
                    CLUB SHOOT
                  </Link>
                </div>

                <img src={MobileMock.src} alt="frame" className="frameCont" />

                {tab === 'advertising' && <AdverTising />}
                {tab === 'food' && <Food />}
                {tab === 'reels' && <Reels />}
                {tab === 'studioproudcts' && <StudioProducts />}
              </Suspense>

            </Col>
          </Row>
        </Container>
      </section>

    )
  }
  return (
    <>
      {/* <FilterImagesSlider/> */}
      <section className="project-one-studio">
      <div className="slider-studioservice">
          <img src={clapper.src} alt="mkstudio" className="clapper" width="150px" />

          <Slider {...settings} className="ContainerWebclapperstudio">
            <div className="clapperSlidebox" >
              <img src={MobileSlide1.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide2.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide3.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide4.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide5.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide6.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide7.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide8.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            <div className="clapperSlidebox" >
              <img src={MobileSlide9.src} alt="mkstudio" className="clapperservicetudio" />
            </div>
            {/* <div className="clapperSlidebox" >
              <img src={MobileSlide10.src} alt="mkstudio" className="clapperservicetudio" />
            </div> */}
          </Slider>
        </div>
        <Container>
          {!projectPage && (
            <Title title={title} tagline={tagline} className="text-center" />
          )}
          <div
            className="counter-one-pattern-studio"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
          <Row>
            <Col xl={12} md={12} sm={12}>

              <Title title={title} tagline={tagline} className="text-center" />
              <div className="studiotab-btn">

                <Suspense fallback={<h1>🌀 Loading...</h1>}>
                  <div className="studiotab-btn">
                    <TabButton
                      isActive={tab === 'studioproudcts'}
                      onClick={() => setTab('studioproudcts')}
                    >
                      PRODUCTS
                    </TabButton>

                    <TabButton
                      isActive={tab === 'food'}
                      onClick={() => setTab('food')}
                    >
                      FOOD
                    </TabButton>
                    <TabButton
                      isActive={tab === 'advertising'}
                      onClick={() => setTab('advertising')}
                    >
                      CREATIVE SHOOT
                    </TabButton>
                    <TabButton
                      isActive={tab === 'reels'}
                      onClick={() => setTab('reels')}
                    >
                      SOCIAL POST
                    </TabButton>
                    <Link
                      href="/portfolio"
                      className=""
                    >
                      CLUB SHOOT
                    </Link>
                  </div>

                  <img src={MobileMock.src} alt="frame" className="frameCont" />

                  {tab === 'advertising' && <AdverTising />}
                  {tab === 'food' && <Food />}
                  {tab === 'reels' && <Reels />}
                  {tab === 'studioproudcts' && <StudioProducts />}
                </Suspense>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default StudioTabOne;
