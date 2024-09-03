"use client";
import Link from "next/link";
import { useState } from "react";
import { submitContact } from "../../models/action";
import { Col, Container, Row, Image } from "react-bootstrap";

import googlepartner from "@/assets/images/icons/googlepartner.png";

const WebdevContact = () => {
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show loader when form is submitted
        const formData = new FormData(e.target);
        try {
            const response = await submitContact({
                fullname: formData.get("fullname"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                services: formData.get("services"),
                city: formData.get("city"),
                country: formData.get("country"),
                checkbox: formData.get("checkbox"),
            });
            if (response.status === 200) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (e) {
            setStatus("error");
            console.log(e);
        } finally {
            setIsSubmitting(false); // Hide loader after form submission
        }
    };

    return (
        <>
            <section className="website-enquiryform">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 col-md-6 col-12'>
                            <div className="webform-dev">
                                <form onSubmit={handleSubmit} className="EnquiryForm">
                                    <div className="form-div">
                                        <Row>
                                            <Col xl={6}>
                                                <h4>Your eCommerce Project Details</h4>
                                                <h3>Services Needed:</h3>
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="WebsitesDevelopment" required value="Websites Desing & Development" />
                                                    <label for="WebsitesDevelopment">Websites Desing & Development</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Social Media (SMO | SMM)" required value="Social Media (SMO | SMM)" />
                                                    <label for="Social Media (SMO | SMM)">Social Media (SMO | SMM)</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Perfomance Marketing" required value="Perfomance Marketing" />
                                                    <label for="Perfomance Marketing">Perfomance Marketing</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Influencer Marketing" required value="Influencer Marketing" />
                                                    <label for="Influencer Marketing">Influencer Marketing</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Brand Marketing" required value="Brand Marketing" />
                                                    <label for="Brand Marketing">Brand Marketing</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Search Engine Optimization (SEO)" required value="Search Engine Optimization (SEO)" />
                                                    <label for="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Product Shoot" required value="Product Shoot" />
                                                    <label for="Product Shoot">Product Shoot</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="2D&3D Animation" required value="2D&3D Animation" />
                                                    <label for="2D&3D Animation">2D&3D Animation</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Logo Design" required value="Logo Design" />
                                                    <label for="Logo Design">Logo Design</label>
                                                </div>
                                                {/* <br /> */}
                                                <div className="checkboxserviceform">
                                                    <input type="checkbox" name="checkbox" id="Product Packaging" required value="Product Packaging" />
                                                    <label for="Product Packaging">Product Packaging</label>
                                                </div>
                                                {/* <br /> */}

                                                <label htmlFor="fullname">Website Address / Domain:</label>
                                                <input
                                                    type="text"
                                                    id="fullname"
                                                    name="fullname"
                                                    placeholder="John Doe"
                                                    className="form-control form-inputs"
                                                    required
                                                />

                                                <label for="requirmentmsg">Describe Your eCommerce Website Needs & Goals:</label>
                                                <p>Please explain your eCommerce website needs, timeline, and goals.</p>
                                                <textarea id="requirmentmsg" name="requirmentmsg" rows="4" cols="50"></textarea>

                                            </Col>
                                            <Col xl={6}>
                                                <h4>Your Contact Information</h4>
                                                <label htmlFor="fullname">
                                                    <input
                                                        type="text"
                                                        id="fullname"
                                                        name="fullname"
                                                        placeholder="John Doe"
                                                        className="form-control form-inputs"
                                                        required
                                                    />
                                                </label>
                                                <label htmlFor="phone">
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Add phone no."
                                                        className="form-control form-inputs"
                                                        required
                                                    />
                                                </label>
                                                <label htmlFor="email">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="john@gmail.com"
                                                        className="form-control form-inputs"
                                                        required
                                                    />
                                                </label>
                                                {/* <label htmlFor="services">
                                            <select id="services" name="services" className="form-control form-inputs" required >
                                                <option value="">Services</option>
                                                <option>Websites Desing & Development</option>
                                                <option>Social Media (SMO | SMM)</option>
                                                <option>Perfomance Marketing </option>
                                                <option>Influencer Marketing  </option>
                                                <option> Brand Marketing</option>
                                                <option>Search Engine Optimization (SEO)</option>
                                                <option>Product Shoot</option>
                                                <option>2D&3D Animation</option>
                                                <option>Logo Design</option>
                                                <option>Product Packaging</option>
                                            </select>
                                        </label> */}
                                                <Row>
                                                    <Col xl={6}>
                                                        <label htmlFor="city">
                                                            <input
                                                                type="text"
                                                                id="city"
                                                                name="city"
                                                                placeholder="Your City"
                                                                className="form-control form-inputs"
                                                                required
                                                            />
                                                        </label>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label htmlFor="country">
                                                            <input
                                                                type="text"
                                                                id="country"
                                                                name="country"
                                                                placeholder="Your Country"
                                                                className="form-control form-inputs"
                                                                required
                                                            />
                                                        </label>
                                                    </Col>
                                                </Row>

                                                <div className="form-group formlefttxt">
                                                    <label className="checkbox">
                                                        <div className="form-studiocheck">
                                                            <input type="checkbox" name="checkbox" required value="I agree to T&C and Privacy Policy" />
                                                            <h6 className="homeformtext">By Proceeding, I agree to <Link href="/TermsConditions" className="studioformlink"> T&C </Link>and <Link href="/privacy-policy" className="studioformlink">Privacy Policy</Link>. Yes, I would like to receive updates via WhatsApp.</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <label htmlFor="submit">
                                                    <button className="btn btn-submit" type="submit" disabled={isSubmitting}>
                                                        {isSubmitting ? (
                                                            <div className="btn-loader">
                                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                Loading...
                                                            </div>
                                                        ) : (
                                                            "Submit"
                                                        )}
                                                    </button>
                                                </label>
                                            </Col>
                                        </Row>
                                    </div>
                                </form>
                                {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
                                {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <Image src={googlepartner.src} alt="googlepartnar" width="300" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default WebdevContact;
