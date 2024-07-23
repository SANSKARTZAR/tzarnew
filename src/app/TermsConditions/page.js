

import React from "react";
import PageHeaderPrivacyPolicy from "@/app/componants/TermsConditions/PageHeaderPrivacyPolicy";
import Privacypolicy from "@/app/componants/TermsConditions/Terms_Conditions";


export const metadata = {
  title: "Social media marketing services | Tzar Digital Marketing Agency in Mumbai",
  description: "Tzar Digital Marketing Agency",
}



const Page = () => {
  return (
    <>
      <PageHeaderPrivacyPolicy page="Terms & Conditions" title="Terms & Conditions" />
      <Privacypolicy />
    </>
  );
};

export default Page;
