"use client";

import Link from "next/link";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // Combine extra fields into one message for Google Sheets
    const message = `
Service: ${formData.get("services")}
City: ${formData.get("city")}
Country: ${formData.get("country")}
Agreement: ${formData.get("checkbox")}
`.trim();

    const payload = {
      name: formData.get("fullname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message,
    };

    try {
      console.log("Sending payload:", payload);
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Form successfully submitted!");
        setStatus("success");
        router.push("/thank-you");
      } else {
        console.error("Submission error:", data.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-dev">
      <h5>From Concept to Capture: We Do It All</h5>
      <form onSubmit={handleSubmit} className="EnquiryForm">
        <div className="form-div">
          <label>
            <input type="text" name="fullname" placeholder="John Doe" className="form-control form-inputs" required />
          </label>
          <label>
            <input type="tel" name="phone" placeholder="Add phone no." className="form-control form-inputs" required />
          </label>
          <label>
            <input type="email" name="email" placeholder="john@gmail.com" className="form-control form-inputs" required />
          </label>
          <label>
            <select name="services" className="form-control form-inputs" required>
              <option value="">Services</option>
              <option>Websites Design & Development</option>
              <option>Social Media (SMO | SMM)</option>
              <option>Performance Marketing</option>
              <option>Influencer Marketing</option>
              <option>Brand Marketing</option>
              <option>Search Engine Optimization (SEO)</option>
              <option>Product Shoot</option>
              <option>2D&3D Animation</option>
              <option>Logo Design</option>
              <option>Product Packaging</option>
            </select>
          </label>
          <Row>
            <Col xl={6}>
              <label>
                <input type="text" name="city" placeholder="Your City" className="form-control form-inputs" required />
              </label>
            </Col>
            <Col xl={6}>
              <label>
                <input type="text" name="country" placeholder="Your Country" className="form-control form-inputs" required />
              </label>
            </Col>
          </Row>

          <div className="form-group formlefttxt">
            <label className="checkbox">
              <div className="form-studiocheck">
                <input type="checkbox" name="checkbox" value="I agree to T&C and Privacy Policy" required />
                <h6 className="homeformtext">
                  By Proceeding, I agree to <Link href="/TermsConditions" className="studioformlink">T&C</Link> and <Link href="/privacy-policy" className="studioformlink">Privacy Policy</Link>. Yes, I would like to receive updates via WhatsApp.
                </h6>
              </div>
            </label>
          </div>

          <button className="btn btn-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>

      {status === "success" && <div className="alert alert-success mt-3">Form submitted successfully!</div>}
      {status === "error" && <div className="alert alert-danger mt-3">There was an error submitting the form.</div>}
    </div>
  );
};

export default ContactForm;


// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { submitContact } from "../../models/action";
// import { Col, Container, Row } from "react-bootstrap";
// import { useRouter } from 'next/navigation';


// const ContactForm = () => {

//     const router = useRouter();
//     const [status, setStatus] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false); // State for loader

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true); // Show loader when form is submitted
//         const formData = new FormData(e.target);
//         try {
//             const response = await submitContact({
//                 fullname: formData.get("fullname"),
//                 phone: formData.get("phone"),
//                 email: formData.get("email"),
//                 services: formData.get("services"),
//                 city: formData.get("city"),
//                 country: formData.get("country"),
//                 checkbox: formData.get("checkbox"),
//             });
//             if (response.status === 200) {
//                 setStatus("success");
//                 router.push('/thank-you');
//             } else {
//                 setStatus("error");
//                 router.push('/thank-you');
//             }
//         } catch (e) {
//             setStatus("error");
//             console.log(e);
//         } finally {
//             setIsSubmitting(false); // Hide loader after form submission
//         }
//     };

//     return (
//         <>
//             <div className="form-dev">
//                 <div>
//                     <h5>From Concept to Capture: We Do It All</h5>
//                 </div>
//                 <form onSubmit={handleSubmit} className="EnquiryForm">
//                     <div className="form-div">
//                         <label htmlFor="fullname">
//                             <input
//                                 type="text"
//                                 id="fullname"
//                                 name="fullname"
//                                 placeholder="John Doe"
//                                 className="form-control form-inputs"
//                                 required
//                             />
//                         </label>
//                         <label htmlFor="phone">
//                             <input
//                                 type="tel"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="Add phone no."
//                                 className="form-control form-inputs"
//                                 required
//                             />
//                         </label>
//                         <label htmlFor="email">
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 placeholder="john@gmail.com"
//                                 className="form-control form-inputs"
//                                 required
//                             />
//                         </label>
//                         <label htmlFor="services">
//                             <select id="services" name="services" className="form-control form-inputs" required >
//                                 <option value="">Services</option>
//                                 <option>Websites Desing & Development</option>
//                                 <option>Social Media (SMO | SMM)</option>
//                                 <option>Perfomance Marketing </option>
//                                 <option>Influencer Marketing  </option>
//                                 <option> Brand Marketing</option>
//                                 <option>Search Engine Optimization (SEO)</option>
//                                 <option>Product Shoot</option>
//                                 <option>2D&3D Animation</option>
//                                 <option>Logo Design</option>
//                                 <option>Product Packaging</option>
//                             </select>
//                         </label>
//                         <Row>
//                             <Col xl={6}>
//                                 <label htmlFor="city">
//                                     <input
//                                         type="text"
//                                         id="city"
//                                         name="city"
//                                         placeholder="Your City"
//                                         className="form-control form-inputs"
//                                         required
//                                     />
//                                 </label>
//                             </Col>
//                             <Col xl={6}>
//                                 <label htmlFor="country">
//                                     <input
//                                         type="text"
//                                         id="country"
//                                         name="country"
//                                         placeholder="Your Country"
//                                         className="form-control form-inputs"
//                                         required
//                                     />
//                                 </label>
//                             </Col>
//                         </Row>

//                         <div className="form-group formlefttxt">
//                             <label className="checkbox">
//                                 <div className="form-studiocheck">
//                                     <input type="checkbox" name="checkbox" required value="I agree to T&C and Privacy Policy" />
//                                     <h6 className="homeformtext">By Proceeding, I agree to <Link href="/TermsConditions" className="studioformlink"> T&C </Link>and <Link href="/privacy-policy" className="studioformlink">Privacy Policy</Link>. Yes, I would like to receive updates via WhatsApp.</h6>
//                                 </div>
//                             </label>
//                         </div>
//                         <label htmlFor="submit">
//                             <button className="btn btn-submit" type="submit" disabled={isSubmitting}>
//                                 {isSubmitting ? (
//                                     <div className="btn-loader">
//                                         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                                         Loading...
//                                     </div>
//                                 ) : (
//                                     "Submit"
//                                 )}
//                             </button>
//                         </label>
//                     </div>
//                 </form>
//                 {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
//                 {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
//             </div>
//         </>
//     );
// };

// export default ContactForm;
