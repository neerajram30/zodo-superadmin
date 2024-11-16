import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import DoctorDetailsCard from "../../Doctors/DoctorDetailsCard";

function DoctorDetails() {
  const breadCrumpData = [
    {
      name: "Manage",
      status: "inactive",
    },
    {
      name: "Doctors",
      status: "active",
    },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <DoctorDetailsCard/>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorDetails;
