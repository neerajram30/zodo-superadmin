import Breadcrumb from "../../breadcrump/Breadcrumb";
// import { useParams } from "react-router-dom";
import HospitalDetailsCard from "../../Hospitals/HospitalDetailsCard";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { useViewHospital } from "../../../hooks/hospitals/useViewHospital";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import { useValidateId } from "../../../hooks/useValidateId";

function HospitalDetails() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  console.log("Valid id ",validId);
  
  const {
    data: hospitalDetails,
    isLoading,
    // isError,
    error,
  } = useViewHospital(id);
  
  const hospitalName = hospitalDetails?.name
  console.log("hospital details ",hospitalName);

  const breadCrumpData = [
    {
      name: "Hospitals",
      status: "inactive",
      link: "/manage-hospitals",
    },
    {
      name: hospitalName,
      status: "active",
      link: `/manage-hospitals/${id}`,
    },
  ];

  if (error) {
    return (
      <Layout
        activeClassName="manage-hospitals"
        id="menu-item3"
        id1="menu-items3"
      >
        <div className="page-wrapper">
          <div className="content">
            <Breadcrumb data={breadCrumpData} />
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HospitalDetailsCard hospitalDetails={hospitalDetails} />
          {isLoading && <FullscreenLoader />}
        </div>
      </div>
    </Layout>
  );
}

export default HospitalDetails;
