import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HospitalsList from "../../Hospitals/HospitalsList";
// import LoadMore from "../../Hospitals/LoadMore";
import HospitalHero from "../../heros/HospitalHero";
import AllHospitals from "../../Hospitals/AllHospitals";
import HospitalRequest from "../../Hospitals/HospitalRequest";
import { useGetHospitals } from "../../../hooks/hospitals/useGetHospitals";

function Hospitals() {
  const { data, isLoading, isError } = useGetHospitals();
  // console.log("Data",hospitalList?.data);
  console.log("is loading", isLoading);
  console.log("is error ", isError);
  const hospitalList = data?.data;

  
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "active",
      link: "/manage-hospitals",
    },
  ];
  const tabData = [
    { id: "allhospitals", title: "All Hosptitals", content: <AllHospitals hospitalList={hospitalList}/> },
    {
      id: "requested",
      title: "Requested Hospitals",
      content: <HospitalRequest />,
    },
  ];

  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HospitalHero tabData={tabData} />
          <HospitalsList tabData={tabData} />
          {/* <LoadMore/> */}
        </div>
      </div>
    </Layout>
  );
}

export default Hospitals;
