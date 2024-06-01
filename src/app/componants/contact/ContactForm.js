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
            {/* <h1>changes/ new form</h1> */}
            <div className="form-dev">
                <div>
                    <h5>From Concept to Capture: We Do It All</h5>
                </div>
                {/* <div className="home-boxForm"> */}
                    <form
                        action={handleSubmit}
                        className="EnquiryForm"
                    >
                        <div className="form-div">
                            <label htmlFor="fullname" className="col-12">
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="John Doe"
                                    className="form-control form-inputs"
                                />
                            </label>
                            <label htmlFor="email" className="col-12">
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="john@gmail.com"
                                    className="form-control form-inputs"
                                />
                            </label>
                            <label htmlFor="message" className="col-12">
                                <textarea
                                    className="h-32 form-control form-inputs"
                                    id="message"
                                    name="message"
                                    placeholder="Type your message here..."

                                ></textarea>
                            </label>
                            <label htmlFor="submit" className="col-12">
                                <button className="btn btn-submit" type="submit">
                                    Send
                                </button>
                            </label>
                        </div>
                    </form>
                {/* </div> */}
            </div>
        </>
    );
}
export default ContactForm;