"use client";

import { useState } from "react";
import { submitContact } from "../../models/action";

const ContactForm = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await submitContact({
                fullname: formData.get("fullname"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                services: formData.get("services"),
                message: formData.get("message"),
            });
            if (response.status === 200) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <div className="form-dev">
                <div>
                    <h5>From Concept to Capture: We Do It All</h5>
                </div>
                <form onSubmit={handleSubmit} className="EnquiryForm">
                    <div className="form-div">
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
                        <label htmlFor="services">
                            <select id="services" name="services" className="form-control form-inputs" >
                                <option name="selectedOpti">Services</option>
                                <option>Websites Desing & Development</option>
                                <option>Social Media (SMO | SMM)</option>
                                <option>Perfomance Marketing </option>
                                <option>Influencer Marketing  </option>
                                <option> Brand Marketing</option>
                                <option>Content & SEO </option>
                                <option>Product Shoot</option>
                                <option>2D&3D Animation</option>
                                <option>Logo Design</option>
                                <option>Product Packaging</option>
                            </select>
                        </label>
                        <label htmlFor="message">
                            <textarea
                                className="form-control form-inputs"
                                id="message"
                                name="message"
                                placeholder="Type your message here..."
                                required
                            ></textarea>
                        </label>
                        <label htmlFor="submit">
                            <button className="btn btn-submit" type="submit">
                                Send
                            </button>
                        </label>
                    </div>
                </form>
                {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
                {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
            </div>
        </>
    );
};

export default ContactForm;
