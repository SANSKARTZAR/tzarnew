import React from "react";
import Client from "../componants/ClientPG/Client";
import PageHeaderCli from "../componants/ClientPG/PageHeaderCli";

export const metadata = { 
  title:"Client | Tzar Digital Marketing Agency in Mumbai",
  description:"Tzar Digital Marketing Agency",
}

const Page = () => {
  return (
    <>
      <PageHeaderCli arent="Our Agency" title="Our Client" page="Our Client" />
      <Client />
    </>
  );
};
export default Page;
