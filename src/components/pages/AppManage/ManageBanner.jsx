import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HeaderTabs from "../../AppManage/HeaderTabs";
import BannerListing from "../../AppManage/BannerListing";
import BasicButtonHero from "../../heros/BasicButtonHero";
import { useState } from "react";
import CenteredModal from "../../modals/CenteredModal";
import BannerForm from "../../AppManage/BannerForm";

function ManageBanner() {
  const [show, setShow] = useState(false);
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Manage Banner",
      status: "active",
      link: "/app-manage",
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
          <BasicButtonHero title="Banner" handleButtonClick={handleShowModal} buttonTitle="Add Banner"/>
          <BannerListing />
          {/* <BannerForm/>  */}
          {/* <BannerTable/> */}
          <CenteredModal show={show} handleClose={handleClose} title="Create Banner">
            <BannerForm handleClose={handleClose}/>
          </CenteredModal>
        </div>
      </div>

    </Layout>
  );
}

export default ManageBanner;
