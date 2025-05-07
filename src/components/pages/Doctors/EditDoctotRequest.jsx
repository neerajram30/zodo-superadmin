import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import EditDoctorForm from "../../Doctors/EditDoctorForm";
import { useParams } from "react-router-dom";

function EditDoctotRequest() {
  const { id } = useParams();
  const editBreadcrump = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: id,
      status: "inactive",
      link: `/manage-doctors/request/${id}`,
    },
    {
      name: "Edit",
      status: "active",
      link: `/manage-doctors/request/${id}/edit`,
    },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={editBreadcrump} />
          <EditDoctorForm />
        </div>
      </div>
    </Layout>
  );
}

export default EditDoctotRequest;
