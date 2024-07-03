"use client";

import { useState } from "react";

export default function SectionEnquiry() {
    return (
        <>
            <section className="SectionEnquiry">
                <div className="container herocontent">
                    <div>
                        <h1 className="title-head">Let's build an e-commerce masterpiece together! Drop us a line for Shopify website development.</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <h2 className="hero-form-head">SUBMIT DETAILS BELOW TO GET A CALL BACK</h2>
                            <div>
                                <form>
                                    <label htmlFor="fullname" className="col-6">
                                        <input type="text"
                                            id="fullname"
                                            name="fullname" placeholder="Enter your name" className="form-control "
                                            autoComplete="off" required
                                        />
                                    </label>
                                    <label htmlFor="phone" className="col-6">
                                        <input type="tel"
                                            name="phone" id="phoneno" placeholder="Phone no." className="form-control "
                                            autoComplete="off" required pattern="[0-9]{10}"
                                        />
                                    </label>
                                    <label htmlFor="email" className="col-12">
                                        <input type="email"
                                            name="email" id="email" placeholder="example@gmail.com" className="form-control "
                                            autoComplete="off" required
                                        />
                                    </label>

                                    <label htmlFor="message" className="col-12">
                                        <textarea type="message"
                                            name="message" id="message" placeholder="Give us a small brief about your project*" className="form-control "
                                            autoComplete="off" required
                                        />
                                    </label>

                                    <label htmlFor="submit" className="col-12">
                                        <button type="submit" value="Submit" className="btn btn-submit" >GET A CALL BACK</button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}