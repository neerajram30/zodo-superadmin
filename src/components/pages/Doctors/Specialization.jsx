import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import SpecializationHero from "../../heros/SpecializationHero";
import SpecializationList from "../../Doctors/Specialization/SpecializationList";
import { useSpecialisationList } from "../../../hooks/specialisation/useSpecialisationList";

function Specialization() {
  const [searchTerm, setSearchterm] = useState("");
  const query = searchTerm ? `name=${searchTerm}` : "";
  console.log("Query ",query);
  
  const { data: specialisationList, isLoading } = useSpecialisationList(query);

  const breadCrumpData = [
    {
      name: "Doctors",
      status: "inactive",
      link: "/manage-doctors",
    },
    {
      name: "Specialisation",
      status: "active",
      link: "/manage-doctors/specialization",
    },
  ];

  const handleSearchterm = (term) => {
    setSearchterm(term);
  };
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <SpecializationHero handelSearchTerm={handleSearchterm} />
          <SpecializationList specialisationList={specialisationList} isLoading={isLoading}/>
        </div>
      </div>
    </Layout>
  );
}

export default Specialization;
