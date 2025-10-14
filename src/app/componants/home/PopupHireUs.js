import React from 'react';
import CounterOne from "./CounterOne";

const PopupHireUs = () => {
  return (
    <div style={styles.wrapper}>
      {/* Main content container */}
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.logo}>
            <span style={styles.logoText}>Tzar Digital Venture</span>
          </div>
        </header>

        {/* Main Marketing Section */}
        <section style={styles.mainMarketing}>
          <div style={styles.marketingContent}>
            <h1 style={styles.mainHeading}>
             Accelerate Your Brand with Data-Driven Marketing
            </h1>
            <p style={styles.paragraph}>
              Leverage 360° marketing strategies to scale 
              faster and smarter. With over 10 years of 
              experience and 100+ successful campaigns, 
              we combine creativity, analytics, and 
              strategy to deliver measurable growth, 
              stronger engagement, and lasting brand impact
            </p>
          </div>

          {/* Consultation Form */}
          <div style={styles.consultationForm}>
            <h2 style={styles.formHeading}>Fill This Form</h2>
            <form style={styles.form}>
              <label style={styles.label}>Full Name</label>
              <input type="text" placeholder="Enter your full name" style={styles.input} />

              <label style={styles.label}>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" style={styles.input} />

              <label style={styles.label}>Select Service</label>
              <select style={styles.select}>
                <option style={styles.option}>Select a service</option>
                <option style={styles.option}>Digital Marketing</option>
                <option style={styles.option}>Website Development</option>
                <option style={styles.option}>Brand Strategy</option>
                <option style={styles.option}>Social Media Management</option>
              </select>

              <label style={styles.label}>Company Email ID</label>
              <input type="email" placeholder="Enter your company email" style={styles.input} />

              <label style={styles.label}>Your Query</label>
              <textarea placeholder="Write your message..." style={styles.textarea}></textarea>

              <button type="submit" style={styles.submitButton}>Submit</button>
            </form>
          </div>
        </section>
      </div>

      {/* Counter Section (full width) */}
      <section style={styles.counterSection}>
  <div style={styles.counterWrapper}>
    <CounterOne />
  </div>
</section>

      {/* Background Animation and Textures */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes moveShapes {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
            100% { transform: translateY(0) rotate(360deg); opacity: 0.5; }
          }

          /* Hide scrollbar */
          ::-webkit-scrollbar { display: none; }
          * { scrollbar-width: none; -ms-overflow-style: none; }

          /* Dropdown options */
          select option {
            color: #000;
            background-color: rgba(255, 255, 255, 0.9);
          }

          /* Animated textures */
          .wrapper::before, .wrapper::after {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            background: rgba(255,255,255,0.05);
            border-radius: 50%;
            filter: blur(60px);
            animation: moveShapes 10s ease-in-out infinite alternate;
          }

          .wrapper::before { top: 10%; left: 5%; }
          .wrapper::after { bottom: 15%; right: 10%; animation-delay: 5s; }
        `}
      </style>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    background: 'linear-gradient(-45deg, #fff, #a1c4fd, #c2e9fb, #0D2C6B)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '30px 0',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    width: '85%',
    maxWidth: '1200px',
    position: 'relative',
    zIndex: 1,
  },
  header: { padding: '15px', textAlign: 'center' },
  logo: { display: 'inline-block' },
  logoText: {
    fontSize: '22px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #000, #0D2C6B)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
  mainMarketing: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center', // vertically center content
  padding: '20px 0',
  flexWrap: 'wrap',
  gap: '20px',
},

  marketingContent: { width: '50%', minWidth: '300px', color: '#222' },
  mainHeading: { fontSize: '60px', fontWeight: 'bold', marginBottom: '10px' },
  highlight: { color: '#ff4d4d' },
  paragraph: { fontSize: '15px', color: '#333', lineHeight: '1.5' },
  consultationForm: {
    width: '38%',
    minWidth: '300px',
    padding: '18px 22px',
    border: '2px solid #fff',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  formHeading: { fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', textAlign: 'center', color: '#000' },
  form: { display: 'flex', flexDirection: 'column' },
  label: { marginBottom: '4px', fontWeight: '600', color: '#000', fontSize: '14px' },
  input: { marginBottom: '10px', padding: '10px', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '5px', fontSize: '14px', backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' },
  select: { marginBottom: '10px', padding: '10px', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '5px', fontSize: '14px', backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' },
  option: { color: '#0D2C6B' },
  textarea: { marginBottom: '10px', padding: '10px', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '5px', fontSize: '14px', minHeight: '70px', backgroundColor: 'rgba(255,255,255,0.2)', color: '#000' },
  submitButton: { backgroundColor: '#0D2C6B', color: 'white', border: 'none', padding: '12px', cursor: 'pointer', borderRadius: '5px', fontSize: '15px', transition: 'background 0.3s ease' },

  counterSection: {
  width: '100vw', // full viewport width
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 0',
  position: 'relative',
  zIndex: 1,
  backgroundColor: 'rgba(255,255,255,0.05)', // optional subtle overlay
  overflow: 'hidden',
},

counterWrapper: {
  width: '100%', // ensures CounterOne stretches fully
  maxWidth: '100%', // remove any max-width restriction
},

};

export default PopupHireUs;











// /* eslint-disable @next/next/no-img-element */
// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { submitContact } from "../../models/actionhire";
// import contactForm from "@/app/data/contactForm";
// import { useRouter } from 'next/navigation';

// const { poptitle, popdec } = contactForm;


// function PopupHireUs() {

//   const router = useRouter();
//   const [status, setStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const formData = new FormData(e.target);
//     try {
//       const response = await submitContact({
//         email: formData.get("email"),
//         firstname: formData.get("firstname"),
//         phone: formData.get("phone"),
//         lastname: formData.get("lastname"),
//         websiteurl: formData.get("websiteurl"),
//         industry: formData.get("industry"),
//         budget: formData.get("budget"),
//         checkbox: formData.get("checkbox"),
//       });
//       if (response.status === 200) {
//         setStatus("success");
//         router.push('/thank-you');
//       } else {
//         setStatus("error");
//         router.push('/thank-you');
//       }
//     } catch (e) {
//       console.log(e)
//     } finally {
//       setIsSubmitting(false); // Hide loader after form submission
//     }
//   };



//   return (
//     <>
//       <section id="Contactform" className="popup-form-hireus">
//         <Container>
//           <div className="hireus-form">

//             <div className="boxFormhireus">
//               <form onSubmit={handleSubmit} target="_blank" className="comment-one__form contact-form-validated">

//                 <div className="pophead">
//                   {/* <img src="TzarLogo-09.png" alt='logo' width="80" /> */}
//                   <h2 className="poptitle">{poptitle}</h2>
//                   <p>{popdec}</p>
//                 </div>

//                 <div className="comment-form__input-boxpop" autoComplete="On" >
//                   <div className="FormContainer">
//                     <Row>
//                       <Col xl={12}>
//                         <Row>
//                           <Col xl={6} md={6}>
//                             <label htmlFor="email">
//                               <input type="email" id="email" name="email" placeholder="Company Email" className=""
//                                 required />
//                             </label>
//                             <input type='text' id="firstname" name="firstname" placeholder="First Name" className="" required />
//                           </Col>
//                           <Col xl={6} md={6}>
//                             <input type="tel" id="phone" name="phone" placeholder="Your Mobile Number" required />

//                             <input type='text' id="lastname" name="lastname" placeholder="Last Name" className="" required />
//                           </Col>
//                         </Row>
//                       </Col>
//                       <Col xl={12}>
//                         <input type="text" id="websiteurl" name="websiteurl" placeholder="Website URL?" />
//                       </Col>
//                       <Col xl={12}>
//                         <div className="formleftpop">
//                           <select id="industry" className="form-controlnone" name='industry' required data-error="Please specify your need.">
//                             <option value="" >Industry</option>
//                             <option value="Animal &amp; Pet">Animal &amp; Pet</option>
//                             <option value="Apparel, Fashion &amp; Jewelry">Apparel, Fashion &amp; Jewelry</option>
//                             <option value="Attorneys, Law &amp; Legal">Attorneys, Law &amp; Legal</option>
//                             <option value="Arts &amp; Entertainment">Arts &amp; Entertainment</option>
//                             <option value="Automotive (Sales &amp; Rental)">Automotive (Sales &amp; Rental)</option>
//                             <option value="Beauty, Cosmetics &amp; Personal Care">Beauty, Cosmetics &amp; Personal Care</option>
//                             <option value="Career &amp; Employment">Career &amp; Employment</option>
//                             <option value="E-commerce">E-commerce</option>
//                             <option value="Education, Coaching &amp; Instruction">Education, Coaching &amp; Instruction</option>
//                             <option value="Farming, Agriculture &amp; Sustainability">Farming, Agriculture &amp; Sustainability</option>
//                             <option value="Finance, Banks, Investments &amp; Accounting">Finance, Banks, Investments &amp; Accounting</option>
//                             <option value="Fitness, Supplements &amp; Vitamins">Fitness, Supplements &amp; Vitamins</option>
//                             <option value="Health-Related, Wellness &amp; Medical">Health-Related, Wellness &amp; Medical</option>
//                             <option value="Healthcare">Healthcare</option>
//                             <option value="House Decor, Furniture, Home Improvement">House Decor, Furniture, Home Improvement</option>
//                             <option value="Heavy Industry, Energy &amp; Manufacturing">Heavy Industry, Energy &amp; Manufacturing</option>
//                             <option value="Insurance">Insurance</option>
//                             <option value="Logistics &amp; Transportation">Logistics &amp; Transportation</option>
//                             <option value="Marketing, Advertising, PR &amp; Digital Services">Marketing, Advertising, PR &amp; Digital Services</option>
//                             <option value="Pharma">Pharma</option>
//                             <option value="Professional Services &amp; Contractors (Cleaners, HVAC, Plumbers, etc.)">Professional Services &amp; Contractors (Cleaners, HVAC, Plumbers, etc.)</option>
//                             <option value="Real Estate">Real Estate</option>
//                             <option value="Restaurants, Foods &amp; Beverages">Restaurants, Foods &amp; Beverages</option>
//                             <option value="SaaS, IT &amp; Software">SaaS, IT &amp; Software</option>
//                             <option value="Travel, Hotel &amp; Tourism">Travel, Hotel &amp; Tourism</option>
//                             <option value="B2B">B2B</option>
//                             <option value="B2C">B2C</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="formleftpop">
//                           <select id="budget" name="budget" className="form-controlnone" required data-error="Please specify your need.">
//                             <option value="" > Monthly Marketing Budget</option>
//                             <option value="0 to 5 Lakh"> 0 to 5 Lakh</option>
//                             <option value="5 Lakh to 10 Lakh" > 5 Lakh to 10 Lakh</option>
//                             <option value="10 Lakh to 15 Lakh"> 10 Lakh to 15 Lakh</option>
//                             <option value="15 Lakh to 20 Lakh">15 Lakh to 20 Lakh</option>
//                             <option value="20 Lakh to 25 Lakh">20 Lakh to 25 Lakh</option>
//                             <option value="25 Lakh to 50 Lakh">25 Lakh to 50 Lakh</option>
//                             <option value="50 Lakh to 1Cr">50 Lakh to 1Cr</option>
//                             <option value="1Cr An above">1Cr An above</option>
//                           </select>
//                         </div>

//                         <div className="formlefttxtpop">
//                           <input type="checkbox" id="checkbox" name="checkbox" className='checkedbox' value="I agree to T&C and Privacy Policy" required />
//                           <label className="form-dec">By clicking the button below, you consent for Tzar Digital and partners to use automated technology, including pre-recorded messages,
//                             cell phones and texts, and email to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase. Privacy Policy.</label>
//                         </div>
//                       </Col>
//                     </Row>
//                     <div>
//                       <button className="button-50 comment-form__btn" type="submit"  disabled={isSubmitting}>
//                       {isSubmitting ? (
//                                     <div className="btn-loader">
//                                         <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                                         Loading...
//                                     </div>
//                                 ) : (
//                                     "Submit Form"
//                                 )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               {status === "success" && <div className="alert alert-success">Form submitted successfully!</div>}
//               {status === "error" && <div className="alert alert-success">Form submitted successfully!</div>}
//             </div>
//           </div>
//         </Container>
//       </section>

//     </>
//   )
// }

// export default PopupHireUs;