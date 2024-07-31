import ContactForm from "./ContactForm";
import CounterOne from "./CounterOne";
import CTAOne from "./CTAOne";
import DesignStudio from "./DesignStudio";
import ExeculsiveCardsR from "./ExeculsiveCardsR";
import MainHerobanner from "./MainHerobanner";
import OurServices from "./OurServices";
import SeoOurWebsite from "./SeoOurWebsite";
import StudioSection from "./StudioSection";
import TestimonialThree from "./Testimonial/TestimonialThree";
import WebDesignMock from "./WebDesignMock";
import WelcomeOne from "./WelCome";
import WhyChoose from "./WhyChoose";


export default function about() {
    return (
        <>
            <MainHerobanner/>
            <OurServices/>
            <WelcomeOne/>
            {/* <DesignStudio/> */}
            <CounterOne/>
            <WebDesignMock/>
            <WhyChoose/>
            <StudioSection/>
            <ExeculsiveCardsR/>
            <TestimonialThree/>
            <CTAOne/>
            <ContactForm/>
            <SeoOurWebsite/>
        </>
    )
}