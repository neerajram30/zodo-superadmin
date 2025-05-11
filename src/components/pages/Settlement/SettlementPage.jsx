import { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import { useAllSettlements } from "../../../hooks/settlements/useAllSettlements";
import { useSetSettlementStatusList } from "../../../hooks/settlements/useGetSettlementStatusList";
import TabSearchHero from "../../heros/TabSearchHero";
import SettlementList from "../../settlements/SettlementList";
import SettlementRequest from "../../settlements/SettlementRequest";

function SettlementPage() {
  const [searchTerm, setSearchterm] = useState("");
  const query = searchTerm ? `name=${searchTerm}` : ""
  const { data: settlementList, isLoading } = useAllSettlements(query);
  // console.log("Data",settlementList?.data);
  const { data: requestedSettlements, isLoading: requestedLoading } =
    useSetSettlementStatusList("requested");
  const { data: rejectedSettlements, isLoading: rejectedLoading } =
    useSetSettlementStatusList("rejected");
  const requestSettlementCount = requestedSettlements?.length ?? 0;
  const rejectedSettlementCount = rejectedSettlements?.length ?? 0;
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Settlement Requests",
      status: "active",
      link: "/dashboard/settlement-requests",
    },
  ];

  const tabData = [
    {
      id: "allhospitals",
      title: "All Settlements",
      content: <SettlementList data={settlementList ?? []} />,
      link:"all"
    },
    {
      id: "requested",
      title: `Requested Settlements (${requestSettlementCount})`,
      content: <SettlementRequest data={requestedSettlements ?? []} />,
      link:"requested"
    },
    {
      id: "rejected",
      title: `Rejected Settlements (${rejectedSettlementCount})`,
      content: <SettlementRequest hospitalList={rejectedSettlements ?? []} />,
      link:"rejected"
    },
  ];

  const handleSearch = (searchTerm) => {
    setSearchterm(searchTerm);
  };
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          {/* <BasicHero title="Settlement Requests" /> */}
          {/* <SettlementList /> */}
          <TabSearchHero tabData={tabData} handleSearch={handleSearch} />
          {/* <Settlements tabData={tabData} /> */}
          {isLoading ||
            rejectedLoading ||
            (requestedLoading && <FullscreenLoader />)}
        </div>
      </div>
    </Layout>
  );
}

export default SettlementPage;
