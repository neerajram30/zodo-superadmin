import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";

import SettlementDetails from "../../settlements/SettlementDetails";
function ManageSettlement() {
  const { id } = useParams();
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Settlement Requests",
      status: "inactive",
      link: "/dashboard/settlement-requests",
    },
    {
      name: id,
      status: "active",
      link: `/dashboard/settlement-requests/${id}`,

    },
  ];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="mt-2">
          <SettlementDetails/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ManageSettlement;
