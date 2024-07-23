"use client"
import React from "react";
import Layout1 from "@/app/componants/Layout1/Layout1";
import { NextSeo } from 'next-seo';
import SingupHeader from "../componants/Singup-page/SingupHeader";
// import GrowthPartner from "@/components/SingupPage/GrowthPartner";
// import SingupBusiness from "@/components/SingupPage/SingupBusiness";
// import DigitalMarketing from "@/components/SingupPage/DigitalMarketing";
// import SingupFive from "@/components/SingupPage/Singup-Five";
// import SingupSix from "@/components/SingupPage/Singup-six";
const DMSMumbai = () => {
    return (
        <>
            <NextSeo
                title="Singup Services - Custom Logo Design. Business logos design by professionls online - Tzar venture"
                description="Custom Studio Services Online - Tzar Venture do not sell products we make ICONIC Brands. " />
                
            <Layout1 pageTitle="TZAR Singup || Service Details">
            <SingupHeader/>
                {/* 
                <GrowthPartner />
                <SingupBusiness />
                <DigitalMarketing />
                <SingupFive />
                <SingupSix /> */}
            </Layout1>
        </>
    );
};
export default DMSMumbai;