import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
// import useSelectedHospital from "../../../store/useSelectedHospital";
import HospitalEditForm from "../../Hospitals/HospitalEditForm";
import { useParams } from "react-router-dom";
import { useViewHospital } from "../../../hooks/hospitals/useViewHospital";
function EditHospital() {
  const { id } = useParams();
  const { data: hospitalDetails } = useViewHospital(id);

  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: hospitalDetails?.name,
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
          <HospitalEditForm hospitalDetails={hospitalDetails}/>
        </div>
      </div>
    </Layout>
  );
}

export default EditHospital;
