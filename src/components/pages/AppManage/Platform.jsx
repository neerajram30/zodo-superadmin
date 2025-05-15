import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HeaderTabs from "../../AppManage/HeaderTabs";
import PlatfromVersions from "../../AppManage/PlatfromVersions";

function Platform() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Platform",
      status: "active",
      link: "/platform",
    },
  ];
  return (
    <Layout activeClassName="appmanage">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HeaderTabs />
          <PlatfromVersions/>
          {/* <LinksForm /> */}
        </div>
      </div>
    </Layout>
  );
}

export default Platform;
