import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import { useParams } from "react-router-dom";
import EditDoctorForm from "../../Doctors/EditDoctorForm";
import { useDoctorById } from "../../../hooks/doctors/useDoctorById";

function EditDoctor() {
  const { id } = useParams();
    const { data: doctorDetails, isLoading: doctorLoading } = useDoctorById(id);
  const editBreadcrump = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: doctorDetails?.name,
      status: "inactive",
      link: `/manage-doctors/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-doctors/${id}/edit`,
    },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={editBreadcrump} />
          <EditDoctorForm doctorDetails={doctorDetails} doctorLoading={doctorLoading}/>  
        </div>
      </div>
    </Layout>
  );
}

export default EditDoctor;
