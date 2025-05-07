import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import AddDoctorForm from "../../Doctors/AddDoctorForm";
function AddDoctors() {

  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Add Doctors",
      status: "active",
      link: "/manage-doctors/add-doctors",
    },
  ];

  
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb
            data={breadCrumpData}
          />
          <AddDoctorForm/>
        </div>
      </div>
      {/* <ToastMessage showToast={showToast} setShowToast={setShowToast} /> */}
    </Layout>
  );
}

export default AddDoctors;
