import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import DoctorDetailsCard from "../../Doctors/DoctorDetailsCard";
import { useParams } from "react-router-dom";
import { useDoctorById } from "../../../hooks/doctors/useDoctorById";

function DoctorDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDoctorById(id);
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: data?.name,
      status: "active",
      link: `/manage-doctors/${id}`,
    },
  ];
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <DoctorDetailsCard data={data} isLoading={isLoading}/>
        </div>
      </div>
    </Layout>
  );
}

export default DoctorDetails;
