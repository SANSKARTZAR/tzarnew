"use client";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';
import Link from "next/link";

import atpshopweb from "@/assets/images/icons/atpshopweb.gif";
import aplloweb from "@/assets/images/icons/aplloweb.gif";
import cabiloweb from "@/assets/images/icons/cabiloweb.gif";
import mahaaraja from "@/assets/images/icons/mahaarajaweb.gif";
function WebsiteShow() {
    return (
        <>
            <section className="website-show">
                <div className="container-fluid">
                    <h1 className="section-title__title">Build in Shopify</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <Link href="https://allthingspriti.com/">
                                <Image src={atpshopweb.src} alt="allthingspriti" width="350" />
                                <h3 className="web-titleshow">AllThingsPriti</h3>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <Link href="https://www.apolloindia.co/">
                                <Image src={aplloweb.src} alt="allthingspriti" width="350" />
                                <h3  className="web-titleshow" >Apollo India</h3>
                            </Link> 
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <Link href="https://cabelochave.com/">
                                <Image src={cabiloweb.src} alt="allthingspriti" width="350" />
                                <h3  className="web-titleshow" >Cabelo Chave</h3>
                            </Link> 

                        </div>
                        <div className="col-lg-3 col-md-12">
                            <Link href="https://mahaarajaa.life/">
                                <Image src={mahaaraja.src} alt="allthingspriti" width="350" />
                                <h3  className="web-titleshow" >Mahaarajaa</h3>
                            </Link> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WebsiteShow;
