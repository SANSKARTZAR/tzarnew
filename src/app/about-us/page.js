import AboutPage from "../componants/aboutus/AboutMain";
import PageHeaderAbout from "../componants/aboutus/PageHeaderAbout";
import TeamRA from "../componants/aboutus/TeamRA";
import ContactForm from "../componants/home/ContactForm";


export default function about() {
    return (
        <>
             <PageHeaderAbout title="About Us"/>
             <AboutPage/>
             <TeamRA/>
             <ContactForm/>
        </>
    )
}