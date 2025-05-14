import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import { useParams } from "react-router-dom";
import SettlementDetailsCard from "../../settlements/SettlementDetailsCard";
import SettlementOperations from "../../Dashboard/Settlement/SettlementOperations";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import { useViewSettlements } from "../../../hooks/settlements/useViewSettlements";
import ApproveRequestModal from "../../modals/ApproveRequestModal";
import { useState } from "react";
import { useChangeSettlementStatus } from "../../../hooks/settlements/useChageSettlementStatus";

function SettlementDetails() {
  const { id } = useParams();
  const { data, isLoading } = useViewSettlements(id);

  const [showApprovemodal, setShowApprovemodal] = useState(false);
  const [showDeclineModal, setShowDeclineMoadl] = useState(false);
  const { mutate, isLoading: approveLoading } = useChangeSettlementStatus();
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: id,
      status: "active",
      link: `/manage-hospitals/${id}`,
    },
  ];
  const handleDeclineModal = () => {
    setShowDeclineMoadl(true);
  };
  const handleApproveModal = () => {
    setShowApprovemodal(true);
  };
  const approveSettlement = async () => {
    const statusUpdate = { status: "approved" };
    await mutate(
      { id: id, data: statusUpdate },
      {
        onSuccess: () => {
          setShowApprovemodal(false);
        },
      }
    );
  };

  const declineSettlement = async () => {
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
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <SettlementDetailsCard data={data} />
          <div className="mt-5">
            <SettlementOperations
              status={data?.status}
              approveRequest={handleApproveModal}
              // isLoading={approveLoading}
              declineRequest={handleDeclineModal}
            />
            <ApproveRequestModal
              show={showApprovemodal}
              setShow={setShowApprovemodal}
              title={`approve settlement`}
              handleRequest={approveSettlement}
              isLoading={approveLoading}
            />
            <ApproveRequestModal
              show={showDeclineModal}
              setShow={setShowDeclineMoadl}
              title={`decline settlement`}
              handleRequest={declineSettlement}
              isLoading={approveLoading}
            />
          </div>
        </div>
      </div>
      {isLoading && <FullscreenLoader />}
    </Layout>
  );
}

export default SettlementDetails;
