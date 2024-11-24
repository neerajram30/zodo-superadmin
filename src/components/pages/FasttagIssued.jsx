import React from "react";
import Layout from "../layout/Layout";
import Breadcrumb from "../breadcrump/Breadcrumb";
import BasicHero from "../heros/BasicHero";

function FasttagIssued() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
    },
    {
      name: "Fasttag Issued",
      status: "active",
    },
  ];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <FasttagRevenueHeader/> */}
          <BasicHero title="Fast Tag Issued" />
        </div>
      </div>
    </Layout>
  );
}

export default FasttagIssued;
