import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import BasicButtonHero from "../../heros/BasicButtonHero";
import HeaderTabs from "../../AppManage/HeaderTabs";
import CenteredModal from "../../modals/CenteredModal";
import AddCoupen from "../../AppManage/AddCoupen";

function ManageCoupen() {
      const [show, setShow] = useState(false);
    
  const breadCrumpData = [
    {
      name: "Manage Copen",
      status: "active",
      link: "/manage-coupen",
    },
  ];
   const handleShowModal = () => {
    setShow(true);
  };
  const handleClose = ()=>{
    setShow(false);
  }
  return (
    <Layout activeClassName="appmanage">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HeaderTabs />
          <BasicButtonHero
            title="Coupen"
              handleButtonClick={handleShowModal}
            buttonTitle="Add Coupen"
          />
          {/* <BannerForm/>  */}
          {/* <BannerTable/> */}
          <CenteredModal show={show} handleClose={handleClose} title="Create Coupen">
            {/* <BannerForm handleClose={handleClose}/> */}
            <AddCoupen handleClose={handleClose}/>
          </CenteredModal>
        </div>
      </div>
    </Layout>
  );
}

export default ManageCoupen;
