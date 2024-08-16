import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Link from "next/link";
import ContactForm from '../contact/ContactForm';

function SeoHerrobanner() {
    return (
        <>
            <section className="Seo-herobanner">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-6 col-12'>
                            <div className="hero-seocontent">
                                <h1> Drive Increased Visibility and Traffic with Our Dynamic SEO Techniques.</h1>
                                <p>Drive Increased Visibility and Traffic with Our Dynamic SEO Techniques.</p>
                                <Link href="#" className='thm-btn'>Enquiry Now</Link>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <section className="Seo-breadcrumb">
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
            </section>
        </>
    )
}

export default SeoHerrobanner;
