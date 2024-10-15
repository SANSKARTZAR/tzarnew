/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { submitContact } from "../../models/actionhire";
import contactForm from "@/app/data/contactForm";
import { useRouter } from 'next/navigation';

const { poptitle, popdec } = contactForm;


function PopupHireUs() {

  const router = useRouter();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    try {
      const response = await submitContact({
        email: formData.get("email"),
        firstname: formData.get("firstname"),
        phone: formData.get("phone"),
        lastname: formData.get("lastname"),
        websiteurl: formData.get("websiteurl"),
        industry: formData.get("industry"),
        budget: formData.get("budget"),
        checkbox: formData.get("checkbox"),
      });
      if (response.status === 200) {
        setStatus("success");
        router.push('/thank-you');
      } else {
        setStatus("error");
        router.push('/thank-you');
      }
    } catch (e) {
      console.log(e)
    } finally {
      setIsSubmitting(false); // Hide loader after form submission
    }
  };



  return (
    <>
      <section id="Contactform" className="popup-form-hireus">
        <Container>
          <div className="hireus-form">

            <div className="boxFormhireus">
              <form onSubmit={handleSubmit} target="_blank" className="comment-one__form contact-form-validated">

                <div className="pophead">
                  {/* <img src="TzarLogo-09.png" alt='logo' width="80" /> */}
                  <h2 className="poptitle">{poptitle}</h2>
                  <p>{popdec}</p>
                </div>

                <div className="comment-form__input-boxpop" autoComplete="On" >
                  <div className="FormContainer">
                    <Row>
                      <Col xl={12}>
                        <Row>
                          <Col xl={6} md={6}>
                            <label htmlFor="email">
                              <input type="email" id="email" name="email" placeholder="Company Email" className=""
                                required />
                            </label>
                            <input type='text' id="firstname" name="firstname" placeholder="First Name" className="" required />
                          </Col>
                          <Col xl={6} md={6}>
                            <input type="tel" id="phone" name="phone" placeholder="Your Mobile Number" required />

                            <input type='text' id="lastname" name="lastname" placeholder="Last Name" className="" required />
                          </Col>
                        </Row>
                      </Col>
                      <Col xl={12}>
                        <input type="text" id="websiteurl" name="websiteurl" placeholder="Website URL?" />
                      </Col>
                      <Col xl={12}>
                        <div className="formleftpop">
                          <select id="industry" className="form-controlnone" name='industry' required data-error="Please specify your need.">
                            <option value="" >Industry</option>
                            <option value="Animal &amp; Pet">Animal &amp; Pet</option>
                            <option value="Apparel, Fashion &amp; Jewelry">Apparel, Fashion &amp; Jewelry</option>
                            <option value="Attorneys, Law &amp; Legal">Attorneys, Law &amp; Legal</option>
                            <option value="Arts &amp; Entertainment">Arts &amp; Entertainment</option>
                            <option value="Automotive (Sales &amp; Rental)">Automotive (Sales &amp; Rental)</option>
                            <option value="Beauty, Cosmetics &amp; Personal Care">Beauty, Cosmetics &amp; Personal Care</option>
                            <option value="Career &amp; Employment">Career &amp; Employment</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Education, Coaching &amp; Instruction">Education, Coaching &amp; Instruction</option>
                            <option value="Farming, Agriculture &amp; Sustainability">Farming, Agriculture &amp; Sustainability</option>
                            <option value="Finance, Banks, Investments &amp; Accounting">Finance, Banks, Investments &amp; Accounting</option>
                            <option value="Fitness, Supplements &amp; Vitamins">Fitness, Supplements &amp; Vitamins</option>
                            <option value="Health-Related, Wellness &amp; Medical">Health-Related, Wellness &amp; Medical</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="House Decor, Furniture, Home Improvement">House Decor, Furniture, Home Improvement</option>
                            <option value="Heavy Industry, Energy &amp; Manufacturing">Heavy Industry, Energy &amp; Manufacturing</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Logistics &amp; Transportation">Logistics &amp; Transportation</option>
                            <option value="Marketing, Advertising, PR &amp; Digital Services">Marketing, Advertising, PR &amp; Digital Services</option>
                            <option value="Pharma">Pharma</option>
                            <option value="Professional Services &amp; Contractors (Cleaners, HVAC, Plumbers, etc.)">Professional Services &amp; Contractors (Cleaners, HVAC, Plumbers, etc.)</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Restaurants, Foods &amp; Beverages">Restaurants, Foods &amp; Beverages</option>
                            <option value="SaaS, IT &amp; Software">SaaS, IT &amp; Software</option>
                            <option value="Travel, Hotel &amp; Tourism">Travel, Hotel &amp; Tourism</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="formleftpop">
                          <select id="budget" name="budget" className="form-controlnone" required data-error="Please specify your need.">
                            <option value="" > Monthly Marketing Budget</option>
                            <option value="0 to 5 Lakh"> 0 to 5 Lakh</option>
                            <option value="5 Lakh to 10 Lakh" > 5 Lakh to 10 Lakh</option>
                            <option value="10 Lakh to 15 Lakh"> 10 Lakh to 15 Lakh</option>
                            <option value="15 Lakh to 20 Lakh">15 Lakh to 20 Lakh</option>
                            <option value="20 Lakh to 25 Lakh">20 Lakh to 25 Lakh</option>
                            <option value="25 Lakh to 50 Lakh">25 Lakh to 50 Lakh</option>
                            <option value="50 Lakh to 1Cr">50 Lakh to 1Cr</option>
                            <option value="1Cr An above">1Cr An above</option>
                          </select>
                        </div>

                        <div className="formlefttxtpop">
                          <input type="checkbox" id="checkbox" name="checkbox" className='checkedbox' value="I agree to T&C and Privacy Policy" required />
                          <label className="form-dec">By clicking the button below, you consent for Tzar Digital and partners to use automated technology, including pre-recorded messages,
                            cell phones and texts, and email to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase. Privacy Policy.</label>
                        </div>
                      </Col>
                    </Row>
                    <div>
                      <button className="button-50 comment-form__btn" type="submit"  disabled={isSubmitting}>
                      {isSubmitting ? (
                                    <div className="btn-loader">
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </div>
                                ) : (
                                    "Submit Form"
                                )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
              {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
            </div>
          </div>
        </Container>
      </section>

    </>
  )
}

export default PopupHireUs;