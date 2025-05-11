import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import SettlementOperations from "../../Dashboard/Settlement/SettlementOperations";
import { useParams } from "react-router-dom";
import HospitalRequestDetails from "../../Hospitals/Request/HospitalRequestDetails";
import { useChangeHospitalStatus } from "../../../hooks/hospitals/useChangeHospitalStatus";
import { useViewHospital } from "../../../hooks/hospitals/useViewHospital";
import ApproveRequestModal from "../../modals/ApproveRequestModal";

function ReviewHospital() {
  const { id } = useParams();
  const [showApprovemodal, setShowApprovemodal] = useState(false);
  const [showDeclineModal, setShowDeclineMoadl] = useState(false);
  const {
    data: hospitalDetails,
    isLoading,
    // isError,
  } = useViewHospital(id);
  const { mutate, isLoading: approveLoading } = useChangeHospitalStatus();
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
      name: id,
      status: "active",
      link: `/manage-hospitals/manage-request/${id}`,
    },
  ];
  const handleDeclineModal = () => {
    setShowDeclineMoadl(true);
  };
  const handleApproveModal = () => {
    setShowApprovemodal(true);
  };
  const approveHospital = async () => {
    const statusUpdate = { status: "active" };
    await mutate(
      { id: id, data: statusUpdate },
      {
        onSuccess: () => {
          setShowApprovemodal(false);
        },
      }
    );
  };

  const declineHospital = async () => {
    const statusUpdate = { status: "rejected" };
    await mutate(
      { id: id, data: statusUpdate },
      {
        onSuccess: () => {
          setShowDeclineMoadl(false);
        },
      }
    );
  };

  
  const status = hospitalDetails?.status;
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HospitalRequestDetails
            hospitalDetails={hospitalDetails}
            isLoading={isLoading}
          />
          <SettlementOperations
            approveRequest={handleApproveModal}
            // isLoading={approveLoading}
            status={status}
            declineRequest={handleDeclineModal}
          />
          <ApproveRequestModal
            show={showApprovemodal}
            setShow={setShowApprovemodal}
            title={`approve ${hospitalDetails?.name}`}
            handleRequest={approveHospital}
            isLoading={approveLoading}
          />
          <ApproveRequestModal
            show={showDeclineModal}
            setShow={setShowDeclineMoadl}
            title={`decline ${hospitalDetails?.name}`}
            handleRequest={declineHospital}
            isLoading={approveLoading}
          />
        </div>
      </div>
    </Layout>
  );
}

export default ReviewHospital;
