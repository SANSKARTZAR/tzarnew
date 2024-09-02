"use client";
import { Container, Col, Row, Image } from 'react-bootstrap'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContactForm from '../contact/ContactForm';
import bg1 from "@/assets/images/backgrounds/seo-banner1.gif";
import { useWindowSize } from "@react-hook/window-size/throttled";

function WebdevHerrobanner() {
    const [width, height] = useWindowSize({ fps: 60 });
    const breakpoint = 683;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <section className="web-herobanner">
                
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-6 col-12'>
                            <div className="hero-seocontent">
                                <div>
                                    <ul className="thm-breadcrumb list-unstyledAuW">
                                        <li>
                                            <Link href="/"><i class="fa fa-home" aria-hidden="true"></i>/ &nbsp;</Link>
                                        </li>
                                        <li><Link href="/website-development-services">Website Development Services / &nbsp; </Link> </li>
                                        <li><h3> 100% Guaranteed Result</h3></li>
                                    </ul>
                                </div>
                                <h1> Boost Your Online Presence with Expert Website Development Services</h1>
                                <Link href="#" className='thm-btn'>Enquiry Now</Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="Seo-breadcrumb">
                <div className="container">
                    <div className="page-header__innerAuWs">
                        <h2>Search Engine Optimization</h2>
                        <ul className="thm-breadcrumb list-unstyledAuW">
                            <li>
                                <Link href="/">Home</Link>/
                            </li>
                            <li>Search Engine Optimization</li>
                        </ul>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default WebdevHerrobanner;
