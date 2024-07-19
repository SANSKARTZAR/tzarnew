"use client";
import React from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import adsDevServices from '@/app/data/adsDevServices';


const { HeadTitle, title1, subtitle1, title2, subtitle2, title3, subtitle3, title4, subtitle4,
    title5, subtitle5, title6, title7, title8, title9, title10, title11, title12, subtitle6, subtitle7, subtitle8,
    subtitle9, subtitle10, tagline, ppcmgmt, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, } = adsDevServices;

function AdsServices({ className = "" }) {
    return (
        <>
            <section className="ads-page">
                <Container>
                    <h1 className='ads-heading'>{HeadTitle}</h1>

                    <ul className="cardsWDv-ads">
                        <li className="CardWDs">
                            <Image src={a1.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title1}</h6>
                        </li>
                        <li className="CardWDs">
                            <Image src={a2.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title2}</h6>
                        </li>

                        <li className="CardWDs">
                            <Image src={a3.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title3}</h6>
                        </li>

                        <li className="CardWDs">
                            <Image src={a4.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title4}</h6>
                        </li>

                        <li className="CardWDs">
                            <Image src={a5.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title5}</h6>
                        </li>
                        <li className="CardWDs">
                            <Image src={a6.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title6}</h6>

                        </li>
                        <li className="CardWDs">
                            <Image src={a7.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title7}</h6>

                        </li>
                        <li className="CardWDs">
                            <Image src={a8.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title8}</h6>
                        </li>
                        <li className="CardWDs">
                           <Image src={a9.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title9}</h6>
                        </li>
                        <li className="CardWDs">
                            <Image src={a10.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title10}</h6>
                        </li>
                        <li className="CardWDs">
                            <Image src={a11.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title11}</h6>
                        </li>
                        <li className="CardWDs">
                            <Image src={a12.src} width="120px" alt="services-icon" />
                            <h6 className="WDGoals__text">{title12}</h6>
                        </li>
                    </ul>
                </Container>
            </section>

        </>
    )
}

export default AdsServices;
