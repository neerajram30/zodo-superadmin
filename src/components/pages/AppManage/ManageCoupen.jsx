import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import BasicButtonHero from "../../heros/BasicButtonHero";
import HeaderTabs from "../../AppManage/HeaderTabs";
import CenteredModal from "../../modals/CenteredModal";
import AddCoupen from "../../AppManage/AddCoupen";
import { useQuery } from "@tanstack/react-query";
import { getCoupens } from "../../../apis/appmanage";
import ComponentLoader from "../../loadings/ComponentLoader";
import CoupenCard from "../../AppManage/CoupenCard";

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
  const handleClose = () => {
    setShow(false);
  };

  const coupens = useQuery({
    queryKey: ["coupens"], // Unique query key
    queryFn: () => getCoupens(),
  });

  const loading = coupens?.isLoading;

  

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
          {!loading ? (
            <>
              {coupens?.data?.length === 0 ? (
                <div className="no-content-box">No Coupens Available</div>
              ) : (
                <>
                <div className="row">

                  {coupens?.data?.map((item) => 
                    <div
                    className="col-sm-6 col-lg-4 col-xl-4 d-flex"
                    key={item.id}
                    >
                      <CoupenCard coupen={item} />
                      
                      {/* <HospitalCard hospitalData={item} hospitalId={item?.id} /> */}
                    </div>
                  )}
                  </div>
                </>
              )}
            </>
          ) : (
            <div>
              <ComponentLoader />
            </div>
          )}

          <CenteredModal
            show={show}
            handleClose={handleClose}
            title="Create Coupen"
          >
            <AddCoupen handleClose={handleClose} />
          </CenteredModal>
        </div>
      </div>
    </Layout>
  );
}

export default ManageCoupen;
