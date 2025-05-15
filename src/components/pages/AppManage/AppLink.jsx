import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HeaderTabs from "../../AppManage/HeaderTabs";
import LinksForm from "../../AppManage/LinksForm";

function AppLink() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Links",
      status: "active",
      link: "/app-link",
    },
  ];
  return (
    <Layout activeClassName="appmanage">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HeaderTabs/>
          <LinksForm/>
        </div>
      </div>
    </Layout>
  );
}

export default AppLink;
