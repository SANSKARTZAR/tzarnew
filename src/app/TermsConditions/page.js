

import React from "react";
import PageHeaderPrivacyPolicy from "@/app/componants/TermsConditions/PageHeaderPrivacyPolicy";
import Privacypolicy from "@/app/componants/TermsConditions/Terms_Conditions";


export const metadata = {
  title:"Terms & Conditions - Tzar Venture Online Digital Marketing Services - Tzar Venture",
    description:"Terms & Conditions - End to End Digital Marketing Services Online."
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
