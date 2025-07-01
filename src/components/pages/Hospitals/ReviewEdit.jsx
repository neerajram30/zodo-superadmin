import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HospitalEditForm from "../../Hospitals/HospitalEditForm";
import { useParams } from "react-router-dom";
import { useViewHospital } from "../../../hooks/hospitals/useViewHospital";

function ReviewEdit() {
  const { id } = useParams();
  const { data: hospitalDetails } = useViewHospital(id);

  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Hospital Requests",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: hospitalDetails?.name,
      status: "inactive",
      link: `/manage-hospitals/manage-request/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-hospitals/manage-request/${id}/edit`,
    },
  ];
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HospitalEditForm hospitalDetails={hospitalDetails}/>
        </div>
      </div>
    </Layout>
  );
}

export default ReviewEdit;
