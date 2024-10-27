import React from "react";
import Breadcrumb from "../../breadcrump/Breadcrumb";
// import { useParams } from "react-router-dom";
import HospitalDetailsCard from "../../Hospitals/HospitalDetailsCard";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";

function HospitalDetails() {
  const { id } = useParams();
  const breadCrumpData = [
    {
      name:"Manage",
      status:"inactive"
    },
    {
      name:"Hospitals",
      status:"inactive"
    },
    {
      name:id,
      status:"active"
    }
  ]
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData}/>
          <HospitalDetailsCard />
        </div>
      </div>
    </Layout>
  );
}

export default HospitalDetails;
