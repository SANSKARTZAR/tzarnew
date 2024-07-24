import React from "react";
import PageHeaderGraphicD from "../componants/graphicdesign/PageHeaderGraphicD";
import GraphicDesigning from "../componants/graphicdesign/GraphicDesigning";
import LogoDesigningR from "../componants/graphicdesign/LogoDesigningR";
import WebDesignR from "../componants/graphicdesign/WebDesignR";
import PrintDesignR from "../componants/graphicdesign/PrintDesignR";
import GraphicDesigR from "../componants/graphicdesign/GraphicDesigR";
import ProductMerchandiseDesignR from "../componants/graphicdesign/ProductMerchandiseDesignR";
import ArtIllustrationR from "../componants/graphicdesign/ArtIllustrationR";
import TestimonialThree from "../componants/home/Testimonial/TestimonialThree";
import ContactForm from "../componants/home/ContactForm";
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
  title: "Graphic Design Services - Creative Banners, Logo Design, Custom Design Online services | Agency in Indian - Tzar Venture",
  description: "Online Graphic Design Services - Print Design Services · Flyer Design · Postcard Design · Brochure Design · Poster Design · Advertisement Design · Catalogue Design · Envelope Design · Magazine Design Online - Tzar Venture."
}

const Page = () => {
  return (
    <>
      <PageHeaderGraphicD parent="Services"
        title="Graphic Designing"
        page="Graphic Designing" />
      <GraphicDesigning />
      <LogoDesigningR />
      <WebDesignR />
      <PrintDesignR />
      <GraphicDesigR />
      <ProductMerchandiseDesignR />
      <ArtIllustrationR />
      <TestimonialThree />
      <ContactForm />
    </>
  );
};
export default Page;
