import { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
// import LoadMore from "../../Hospitals/LoadMore";
import HospitalHero from "../../heros/HospitalHero";
import AllHospitals from "../../Hospitals/AllHospitals";
// import { useRequestedHospitals } from "../../../hooks/hospitals/useRequestedHospital";
import HospitalRequest from "../../Hospitals/HospitalRequest";
import { useGetHospitals } from "../../../hooks/hospitals/useGetHospitals";
function Hospitals() {
  const [searchTerm, setSearchterm] = useState("");

  // const setHospitalList = useHospitalList((state) => state.setHospitalList);
  // setHospitalList(hospitalList);

  // const { data: requestedHospitals, isLoading: requestedLoading } =
  //   useRequestedHospitals("pending");
  // const { data: rejectedHospitals, isLoading: rejectedLoading } =
  //   useRequestedHospitals("rejected");
  // console.log(requestedHospitals, requestedLoading);
  // const requestHospitalCount = requestedHospitals?.length ?? 0;
  // const rejectedHospitalCount = rejectedHospitals?.length ?? 0;
  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "active",
      link: "/manage-hospitals",
    },
  ];
  const { data, isLoading } =
      useGetHospitals(searchTerm);
    // const hospitalList = []
    const hospitalList =
      data?.pages.flatMap((page) => page?.data?.data || []) || [];
  const requestedHospitals = hospitalList?.filter((item)=> item.status === "pending");
  const rejectedHospitals = hospitalList?.filter((item)=> item.status === "rejected");
  const tabData = [
    {
      id: "allhospitals",
      title: `All Hosptitals (${hospitalList?.length ?? 0})`,
      content: <AllHospitals searchTerm={searchTerm} loading={isLoading}/>,
      link: "all",
    },
    {
      id: "requested",
      title: `Requested Hospitals (${requestedHospitals?.length ?? 0})`,
      content: <HospitalRequest searchTerm={searchTerm} status="pending" />,
      link: "requested",
    },
    {
      id: "rejected",
      title: `Rejected Hospitals (${rejectedHospitals?.length ?? 0})`,
      content: <HospitalRequest searchTerm={searchTerm} status="rejected" />,
      link: "rejected",
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
        </div>
      </div>
    </Layout>
  );
}

export default Hospitals;
