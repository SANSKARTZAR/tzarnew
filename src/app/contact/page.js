"use client";
import "./contact.css";
import ContactForm from "..//componants/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <span className="contact-subtitle">CONTACT US</span>
        <h1>GET IN TOUCH</h1>
        <p>
         If you have any questions, require further details, or would like to discuss your requirements, we’d be happy to connect with you.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Tzar Digital Agency</h2>
            <p>We are a full-service digital marketing agency focused on helping businesses grow their online presence, generate quality leads, and increase revenue.</p>
             {/* <h4>Head Office</h4> */}
          <div className="contact-info">
  <div className="contact-item">
    <h4>Address</h4>
    <p>
      B, Ground Floor, Andheri E,
      Saki Vihar Rd, behind Finch Restaurant, <br />
      Ganesh Nagar, Marol, Andheri East,
      Mumbai, Maharashtra 400072
    </p>
  </div>

  <div className="contact-item">
    <h4>Email</h4>
    <p className="contact-link">
      corporate@tzar.co
    </p>
  </div>

  <div className="contact-item">
    <h4>Phone</h4>
    <p className="contact-link">
      +91 730-405-6607 | +91 776-077-5875 | +91 900-425-0252
    </p>
  </div>
</div>

          </div>

          {/* RIGHT FORM */}
           <ContactForm/>
        </div>
      </section>

      {/* JOIN TEAM */}
      <section className="join-team">
        <h2>JOIN OUR TEAM</h2>
        <p>
          Tzar is looking for enthusiastic individuals to join our team of
          company Co-Owners!
        </p>
        <p>
          We are inclusivity champions, and offer a supportive, collaborative culture where everyone can thrive. Send your CV or resume to our recruitment team if you think you’d be a great fit.
        </p>
        <button>corporate@tzar.co</button>
      </section>
    </>
  );
}




// import Location from "../componants/contact/Location";
// import PageHeaderContact from "../componants/contact/PageHeaderContact";
// import ContactFormSection from "../componants/home/ContactForm";

// export const metadata = {
//     title:"TZAR VENTURE- Digital Marketing Agency | Contact Us for Expert Digital Solutions",
//     description:"Connect with Tzar Digital Agency's skilled team. Reach out through our Contact Us page for tailored digital services. Let's elevate your online presence together."
//   }

// export default function about() {
//     return (
//         <>
//             <PageHeaderContact title="Contact Us"  />
//             <Location/>
//             <ContactFormSection/>
//         </>
//     )
// }