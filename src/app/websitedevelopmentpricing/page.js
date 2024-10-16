import React from "react";
import ContactFormWeb from "../componants/home/ContactFormWeb";
import WebPricing from "../componants/WebsitePricing/WebPricing";

export const metadata = {
    title: "TZAR VENTURE- Digital Marketing Agency Website Development Services  - Custom Website Development Services Online @ Tzar venture",
    description: "Website Development Services  -  Responsive custom website development service provider at Tzar venture."
}

const Page = () => {
    return (
        <>
            <WebPricing />
            <ContactFormWeb />
        </>
    );
};
export default Page;
