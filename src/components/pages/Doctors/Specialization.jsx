import React, { useState } from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import SpecializationList from "../../Doctors/Specialization/SpecializationList";
import { useSpecialisationList } from "../../../hooks/specialisation/useSpecialisationList";
import ButtonSerchHero from "../../heros/ButtonSerchHero copy";
import AddSpecialization from "../../modals/AddSpecialization";

function Specialization() {
  const [searchTerm, setSearchterm] = useState("");
  const query = searchTerm ? `name=${searchTerm}` : "";
  const [show, setShow] = useState(false);
  const { data: specialisationList, isLoading } = useSpecialisationList(query);
  console.log(specialisationList, isLoading);

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

  const handleShow = () => {
    setShow(true);
  };
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="mt-3">
            <ButtonSerchHero
              handleShow={handleShow}
              title="Specialisation"
              handleSearchterm={handleSearchterm}
              buttonTitle="Add Specialisation"
            />
          </div>
          {/* <ServicesList servicesData={servicesList} /> */}
          <SpecializationList
            specialisationList={specialisationList}
            isLoading={isLoading}
          />
        </div>
        <AddSpecialization show={show} setShow={setShow} />
      </div>
    </Layout>
  );
}

export default Specialization;
