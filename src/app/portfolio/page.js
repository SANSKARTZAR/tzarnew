import React from "react";
import ProtfoiloGalleryTab from "../componants/PortfolioPG/ProtfoiloGalleryTab";
import PageHeaderportfolio from "../componants/PortfolioPG/PageHeaderportfolio";

export const metadata = {
  title: "Portfolio | Tzar Digital Marketing Agency in Mumbai",
  description: "Tzar Digital Marketing Agency",
}

const Page = () => {
  return (
    <>
      <PageHeaderportfolio page="Portfolio" title="Portfolio" />
      <ProtfoiloGalleryTab />
    </>
  );
};
export default Page;
