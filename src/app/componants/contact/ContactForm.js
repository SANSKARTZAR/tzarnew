"use client";

import { useState } from "react";
import { submitContact } from "../../models/action";

const ContactForm = () => {

    const [status, setStatus] = useState();

    const handleSubmit = async (formData) => {
        try {
            const response = await submitContact({
                fullname: formData.get("fullname"),
                address: formData.get("address"),
                email: formData.get("email"),
                message: formData.get("message")
            })
            if (response.status === 200) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="form-dev">
                <div>
                    <h5>From Concept to Capture: We Do It All</h5>
                </div>
                <form
                    action={handleSubmit}
                    className="EnquiryForm"
                >
                    <div className="form-div">
                        <label htmlFor="fullname" >
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="John Doe"
                                className="form-control form-inputs"
                            />
                        </label>
                        <label htmlFor="address" >
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="your address"
                                className="form-control form-inputs"
                            />
                        </label>
                        {/* <label htmlFor="phone" >
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Add phone no."
                                className="form-control form-inputs"
                            />
                        </label> */}
                        <label htmlFor="email" >
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="john@gmail.com"
                                className="form-control form-inputs"
                            />
                        </label>
                       
                        <label htmlFor="message" >
                            <textarea
                                className="form-control form-inputs"
                                id="message"
                                name="message"
                                placeholder="Type your message here..."

                            ></textarea>
                        </label>
                        <label htmlFor="submit" >
                            <button className="btn btn-submit" type="submit">Send </button>
                        </label>
                    </div>
                </form>

            </div>
        </>
    );
}
export default ContactForm; 
{/* <label htmlFor="services" className="col-12">
                            <select type="select"
                                name="services" id="services" placeholder="Select Services" className="form-control form-inputs"
                                autoComplete="off" required>
                                <option name="selectedOpti" value="">Services</option>
                                <option value="Websites Desing &amp; Development">Websites Desing &amp; Development</option>
                                <option value="Social Media (SMO | SMM)">Social Media (SMO | SMM)</option>
                                <option value="Perfomance Marketing">Perfomance Marketing </option>
                                <option value="Influencer Marketing">Influencer Marketing  </option>
                                <option value="Brand Marketing"> Brand Marketing</option>
                                <option value="Content &amp; SEO ">Content &amp; SEO </option>
                                <option value="Product Shoot">Product Shoot</option>
                                <option value="2D&3D Animation">2D&amp;3D&nbsp;Animation</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Product Packaging">Product Packaging</option>
                            </select>
                        </label> */}