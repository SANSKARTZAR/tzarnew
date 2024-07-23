
import Jobs from "../componants/Career/Jobs";
import JobTzar from "../componants/Career/JobTzar";
import PageHeaderCareer from "../componants/Career/PageHeaderCareer";
import ContactForm from "../componants/home/ContactForm";

import Link from "next/link";

export default function about() {
    return (
        <>
            <PageHeaderCareer title="Career"/>
            <Jobs/>
            <JobTzar/>
            <ContactForm />
        </>
    )
}