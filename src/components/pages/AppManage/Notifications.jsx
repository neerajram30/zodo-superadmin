import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HeaderTabs from "../../AppManage/HeaderTabs";
import NotificationForm from "../../AppManage/NotificationForm";

function Notifications() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Notifications",
      status: "active",
      link: "/notifications",
    },
  ];
  return (
    <Layout activeClassName="appmanage">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HeaderTabs />
          <NotificationForm/>
          {/* <LinksForm /> */}
        </div>
      </div>
    </Layout>
  );
}

export default Notifications;
