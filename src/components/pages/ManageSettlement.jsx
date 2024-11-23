import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../breadcrump/Breadcrumb";
import Layout from "../layout/Layout";
import SettlementRequest from "../Dashboard/Settlement/SettlementRequest";
import ReviewFasttag from "../Dashboard/Settlement/ReviewFasttag";
import ReviewBank from "../Dashboard/Settlement/ReviewBank";
import UploadedDocuments from "../Dashboard/Settlement/UploadedDocuments";
import SettlementOperations from "../Dashboard/Settlement/SettlementOperations";

function ManageSettlement() {
  const { id } = useParams();
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
    },
    {
      name: "Settlement Requests",
      status: "inactive",
    },
    {
      name: id,
      status: "active",
    },
  ];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <SettlementRequest/>
          <ReviewFasttag/>
          <ReviewBank/>
          <UploadedDocuments/>
          <SettlementOperations/>
        </div>
      </div>
    </Layout>
  );
}

export default ManageSettlement;
