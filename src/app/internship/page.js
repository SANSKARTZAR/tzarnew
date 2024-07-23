
import JobTzar from "../componants/Career/JobTzar";
import PageHeaderInternship from "../componants/Internship/PageHeaderInternship";
import ContactForm from "../componants/home/ContactForm";
import Internship from "../componants/Internship/Internship";

export default function about() {
    return (
        <>
            <PageHeaderInternship title="Internship"/>
            <Internship/>
            <ContactForm />
        </>
    )
}