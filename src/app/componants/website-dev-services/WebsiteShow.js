"use client";
import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';

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
                            <Image src={atpshopweb.src} alt="allthingspriti" width="350" />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <Image src={aplloweb.src} alt="allthingspriti" width="350" />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <Image src={cabiloweb.src} alt="allthingspriti" width="350" />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <Image src={mahaaraja.src} alt="allthingspriti" width="350" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WebsiteShow;
