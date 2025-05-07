import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
// import useSelectedHospital from "../../../store/useSelectedHospital";
import HospitalEditForm from "../../Hospitals/HospitalEditForm";
import { useParams } from "react-router-dom";
function EditHospital() {
  const { id } = useParams();

  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-hospitals/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-hospitals/${id}/edit`,
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
          <HospitalEditForm />
        </div>
      </div>
    </Layout>
  );
}

export default EditHospital;
