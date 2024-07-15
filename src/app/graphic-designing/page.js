import React from "react";
import PageHeaderGraphicD from "../componants/graphicdesign/PageHeaderGraphicD";
import GraphicDesigning from "../componants/graphicdesign/GraphicDesigning";
// import PageHeaderGraphicD from "../components/PageHeader/PageHeaderGraphicD";
// import GraphicDesigning from "../components/ServicesPG/GraphicDesigning";
// import LogoDesigningR from "../components/ServicesPG/GraphicDesing/LogoDesigningR";
// import WebsiteDesignCardsR from "../components/ServicesPG/WebsiteDesignCardsR";
// import PrintDesignR from "../components/ServicesPG/GraphicDesing/PrintDesignR";
// import GraphicDesigR from "../components/ServicesPG/GraphicDesing/GraphicDesigR";
// import ProductMerchandiseDesignR from "../components/ServicesPG/GraphicDesing/ProductMerchandiseDesignR";
// import ArtIllustrationR from "../components/ServicesPG/GraphicDesing/ArtIllustrationR";
// import TestimonialThree from "../components/HomePG/Testimonial/TestimonialThree";
// import ContactForm from "../components/ContactForm/ContactForm";

export const metadata = { 
  title:"Graphic designing services | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}

const Page = () => {
  return (
    <>
   <PageHeaderGraphicD parent="Services"
        title="Graphic Designing"
        page="Graphic Designing" />
<GraphicDesigning/>
      {/* <LogoDesigningR/>
      <WebsiteDesignCardsR/>
      <PrintDesignR/>
      <GraphicDesigR/>
      <ProductMerchandiseDesignR/>
      <ArtIllustrationR/>
     <TestimonialThree/>
     <ContactForm/> */}
    </>
  );
};
export default Page;
