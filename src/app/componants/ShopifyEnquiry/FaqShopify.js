"use client";

import { useState } from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FaqShopify() {
    // const defaultContent =
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <section className="Shopifyfaq">
                <div className="container herocontent">

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div>
                                <p>SHOPIFY AGENCY</p>
                                <h2 className="hero-title-headg">Get Your Shopify Site in Shape with WebzPlot: Our Expertise, Your Success. Let's Flex our E-Commerce Muscles!</h2>
                                <p>WebzPlot is your go-to partner for creating a successful Shopify site. We specialize in providing expert solutions for businesses of all sizes, ensuring that your e-commerce store is designed, developed, and launched with the utmost care and attention. Our team of experienced professionals works closely with you to understand your needs and goals, delivering a Shopify store that’s tailored to your specific business needs. From user-friendly design to optimized functionality, our Shopify experts will ensure that your online store is ready to take on the competition. With WebzPlot, you can rest assured that your e-commerce site is in safe hands, ready to flex its muscles and achieve success.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <div>
                                {/* <Accordion>
                                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                        {defaultContent}
                                    </AccordionItem>
                                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                        {defaultContent}
                                    </AccordionItem>
                                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                        {defaultContent}
                                    </AccordionItem>
                                </Accordion> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}