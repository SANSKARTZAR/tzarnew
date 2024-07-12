import React from "react";
import PageHeaderTeam from "../componants/team/PageHeaderTeam";
import TeamR from "../componants/team/TeamR";
import CTAOne from "../componants/home/CTAOne";

const Page = () => {
  return (
    <>
      <PageHeaderTeam page="Team" title="Our Team" />
      <TeamR />
      <CTAOne />
    </>
  );
};
export default Page;
