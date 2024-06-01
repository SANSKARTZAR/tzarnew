"use client";

import { useState } from "react";
import { submitContact } from "../../models/action";

const ContactForm = () => {

    const [status, setStatus] = useState();

    const handleSubmit = async (formData) => {
        try {
            const response = await submitContact({
                fullname: formData.get("fullname"),
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
            {/* <div className="form-dev"> */}
                    {/* <form
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
                    </form> */}

                    <div className="form-dev">
                <div>
                    <h5>From Concept to Capture: We Do It All</h5>
                </div>
                <form className="EnquiryForm" action={handleSubmit}>
                    <div className="form-div">
                        <label htmlFor="fullname" className="col-12">
                            <input type="text"
                                id="fullname"
                                name="fullname" placeholder="Enter your name" className="form-control form-inputs"
                                autoComplete="off" required
                            />
                        </label>
                        <label htmlFor="phone" className="col-12">
                            <input type="tel"
                                name="phone" id="phoneno" placeholder="Phone no." className="form-control form-inputs"
                                autoComplete="off" required pattern="[0-9]{10}"
                            />
                        </label>
                        <label htmlFor="email" className="col-12">
                            <input type="email"
                                name="email" id="email" placeholder="example@gmail.com" className="form-control form-inputs"
                                autoComplete="off" required
                            />
                        </label>
                        <label htmlFor="services" className="col-12">
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
                        </label>
                        {/* <label htmlFor="checkbox" className="col-12 checkbox-div">
                            <input type="checkbox" required
                                id="termscondition" name="termscondition" value="By Proceeding, I agree to T&C" className="form-checkbox" />
                            <label htmlFor="Termscondition"> By Proceeding, I agree to <Link href="/" className="tclink">T&C</Link>  and <Link href="/" className="tclink">Privacy Policy</Link>
                                <br /> Yes, I would like to receive updates viaWhatsApp.</label>
                        </label> */}
                        <label htmlFor="submit" className="col-12">
                            <button type="submit" value="Submit" className="btn btn-submit" >Submit</button>
                        </label>
                    </div>
                </form>
            </div>
            {/* </div> */}
        </>
    );
}
export default ContactForm;