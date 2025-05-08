import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HospitalsList from "../../Hospitals/HospitalsList";
// import LoadMore from "../../Hospitals/LoadMore";
import HospitalHero from "../../heros/HospitalHero";
import AllHospitals from "../../Hospitals/AllHospitals";
import HospitalRequest from "../../Hospitals/HospitalRequest";
import useHospitalList from "../../../store/useHospitalList";
import { useRequestedHospitals } from "../../../hooks/hospitals/useRequestedHospital";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import { useGetHospitals } from "../../../hooks/hospitals/useGetHospitals";
function Hospitals() {
  const [searchTerm, setSearchterm] = useState("");
  const { data: hospitalList, isLoading } = useGetHospitals(searchTerm);
  // console.log("Data",hospitalList?.data);

  const setHospitalList = useHospitalList((state) => state.setHospitalList);
  setHospitalList(hospitalList);

  const { data: requestedHospitals, isLoading: requestedLoading } =
    useRequestedHospitals("pending");
  const { data: rejectedHospitals, isLoading: rejectedLoading } =
    useRequestedHospitals("rejected");
  console.log(requestedHospitals, requestedLoading);
  const requestHospitalCount = requestedHospitals?.length ?? 0;
  const rejectedHospitalCount = rejectedHospitals?.length ?? 0;
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "active",
      link: "/manage-hospitals",
    },
  ];
  const tabData = [
    {
      id: "allhospitals",
      title: "All Hosptitals",
      content: <AllHospitals hospitalList={hospitalList ?? []} />,
    },
    {
      id: "requested",
      title: `Requested Hospitals (${requestHospitalCount})`,
      content: <HospitalRequest hospitalList={requestedHospitals ?? []} />,
    },
    {
      id: "rejected",
      title: `Rejected Hospitals (${rejectedHospitalCount})`,
      content: <HospitalRequest hospitalList={rejectedHospitals ?? []} />,
    },
  ];

  const handleSearch = (searchTerm) => {
    setSearchterm(searchTerm);
  };

  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HospitalHero tabData={tabData} handleSearch={handleSearch} />
          <HospitalsList tabData={tabData} />
          {isLoading ||
            rejectedLoading ||
            (requestedLoading && <FullscreenLoader />)}
        </div>
      </div>
    </Layout>
  );
}

export default Hospitals;
