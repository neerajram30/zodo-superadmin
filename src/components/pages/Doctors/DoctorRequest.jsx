import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../breadcrump/Breadcrumb"
import Layout from "../../layout/Layout";
import DoctorRequestCard from "../../Doctors/DoctorRequest/DoctorRequestCard";
import SettlementOperations from "../../Dashboard/Settlement/SettlementOperations";
import { useDoctorById } from "../../../hooks/doctors/useDoctorById";
import { useChangeDoctorStatus } from "../../../hooks/doctors/useChangeDoctorStatus";
import ApproveRequestModal from "../../modals/ApproveRequestModal";

function DoctorRequest() {
  const { id } = useParams();
  const { data: doctorDetails, isLoading } = useDoctorById(id);
  const [showApprovemodal, setShowApprovemodal] = useState(false);
  const [showDeclineModal, setShowDeclineMoadl] = useState(false);
  const { mutate, isLoading: approveLoading } = useChangeDoctorStatus();

  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: id,
      status: "active",
      link: `/manage-doctors/request/${id}`,
    },
  ];
  const handleDeclineModal = () => {
    setShowDeclineMoadl(true);
  };
  const handleApproveModal = () => {
    setShowApprovemodal(true);
  };
  const approveDoctor = async () => {
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

  const declineDoctor = async () => {
    const statusUpdate = { status: "rejected" };
    await mutate(
      { id: id, data: statusUpdate },
      {
        onSuccess: () => {
          setShowApprovemodal(false);
        },
      }
    );
  };
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <DoctorRequestCard
            doctorDetails={doctorDetails}
            isLoading={isLoading}
          />
          <SettlementOperations
            approveRequest={handleApproveModal}
            // isLoading={approveLoading}
            status={doctorDetails?.status}
            declineRequest={handleDeclineModal}
          />
          <ApproveRequestModal
            show={showApprovemodal}
            setShow={setShowApprovemodal}
            title={`approve ${doctorDetails?.name}`}
            handleRequest={approveDoctor}
            isLoading={approveLoading}
          />
          <ApproveRequestModal
            show={showDeclineModal}
            setShow={setShowDeclineMoadl}
            title={`decline ${doctorDetails?.name}`}
            handleRequest={declineDoctor}
            isLoading={approveLoading}
          />
        </div>
      </div>
    </Layout>
  );
}

export default DoctorRequest;
