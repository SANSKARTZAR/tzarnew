

import React from "react";
import PageHeaderPrivacyPolicy from "@/app/componants/TermsConditions/PageHeaderPrivacyPolicy";
import Privacypolicy from "@/app/componants/TermsConditions/Terms_Conditions";

const Page = () => {
  return (
    <>
      <PageHeaderPrivacyPolicy page="Terms & Conditions" title="Terms & Conditions" />
      <Privacypolicy />
    </>
  );
};

export default Page;
