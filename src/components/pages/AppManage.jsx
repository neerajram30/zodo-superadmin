import React from "react";
import Layout from "../layout/Layout";
import Breadcrumb from "../breadcrump/Breadcrumb";

function AppManage() {
  const breadCrumpData = [
    {
      name: "App Manage",
      status: "active",
      link: "/app-manage",
    },
  ];

  return (
    <Layout
      activeClassName="appmanage"
    //   id="menu-item5"
      //   id1="menu-items2"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <ButtonTabs tabData={financeTab} /> */}
        </div>
      </div>
    </Layout>
  );
}

export default AppManage;
