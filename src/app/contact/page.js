import Location from "../componants/contact/Location";
import PageHeaderContact from "../componants/contact/PageHeaderContact";
import ContactFormSection from "../componants/home/ContactForm";


export default function about() {
    return (
        <>
            <PageHeaderContact title="Contact Us"  />
            <Location/>
            <ContactFormSection/>
        </>
    )
}