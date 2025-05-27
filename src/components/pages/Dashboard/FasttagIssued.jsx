import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";

import BasicSearchHero from "../../heros/BasicSearchHero";
import FasttagList from "../../fasttag/FasttagList";
import { useGetHospitals } from "../../../hooks/hospitals/useGetHospitals";
import { useState } from "react";

function FasttagIssued() {
  const [searchTerm, setSearchterm] = useState("");
  const { data: hospitalList, isLoading } = useGetHospitals(searchTerm);
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Fasttag Issued",
      status: "active",
      link: "/dashboard/fasttag-issued",
    },
  ];
  const handleSearch = (searchTerm) => {
    // Implement search functionality if needed
    setSearchterm(searchTerm);
  };
  const fasttagList =
    hospitalList?.filter((hospital) => hospital?.fastTag?.enabled) || [];
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="mt-3">
            <BasicSearchHero handleSearchterm={handleSearch} />
            <FasttagList hospitalList={fasttagList} loading={isLoading} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FasttagIssued;
