import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Link from "next/link";
import icon1 from "@/assets/images/icons/sale-report.png";
import icon2 from "@/assets/images/icons/analytics.png";
import icon3 from "@/assets/images/icons/keyword-analysis.png";
import icon4 from "@/assets/images/icons/competitors.png";
import icon5 from "@/assets/images/icons/seo-1.png";
import icon6 from "@/assets/images/icons/link-building.png";
import icon7 from "@/assets/images/icons/content-writing.png";
import icon8 from "@/assets/images/icons/statistics.png";
import arrow from "@/assets/images/icons/arrow1.png";


function SeoJournery() {
    return (
        <>
            <section className="Seo-Journery">
                <div className='container'>
                    <div className='seo-heading'>
                        <h1>Optimizing for Search Engines: The Journey Unveiled</h1>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 01</span>
                                <div className='image-setdiv'>

                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon1.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Website Audit</h3>
                                    <p> Unlock your competitive edge and enhance your online presence with our thorough website audit services.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 02</span>
                                <div className='image-setdiv'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon2.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Competitor Analysis</h3>
                                    <p>Discover insights into your competitors' online strategies and potential opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 03</span>
                                <div className='image-setdiv'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon3.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Keyword Research </h3>
                                    <p>Our skilled team performs thorough analysis to find the most relevant and high-performing keywords.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 04</span>
                                <div className='image-setdiv2'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon4.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Competitor Benchmarking  </h3>
                                    <p>Boost your business to new levels with our custom competitor benchmarking solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 05</span>
                                <div className='image-setdiv'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon5.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>On-Page Optimisation</h3>
                                    <p>Boost your site's visibility and attract targeted traffic with our on-page optimization services, ensuring efficient Google crawling.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 06</span>
                                <div className='image-setdiv'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon6.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Link Building</h3>
                                    <p>Our skilled team uses proven methods to gain high-quality backlinks from top websites in your niche.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 07</span>
                                <div className='image-setdiv'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon7.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Content Writing</h3>
                                    <p>Top-notch content crafted and published online to create quality backlinks.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-12'>
                            <div className='bdt-step-flow'>
                                <span className="bdt-badge">Step 08</span>
                                <div className='image-setdiv2'>
                                    <div className='bdt-icon-wrapper'>
                                        <Image src={icon8.src} width="100%" height="auto" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Performance Reports</h3>
                                    <p>Get actionable insights into your digital performance and monitor key metrics with our detailed performance reports.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeoJournery;
