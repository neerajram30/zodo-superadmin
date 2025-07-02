import React from "react";
import { Link } from "react-router-dom";
import HospitalList from "./HospitalList";
import RequestedHospitals from "./RequestedHospitals";
import { useGetHospitals } from "../../hooks/hospitals/useGetHospitals";
import { useRequestedHospitals } from "../../hooks/hospitals/useRequestedHospital";
// fasttag
function FasttagDetails() {
  const { data, isLoading } = useGetHospitals();
  const hospitalList =
    data?.pages.flatMap((page) => page?.data?.data || []) || [];
  // console.log("Data",hospitalList?.data);
  // console.log(isLoading);
  console.log("Hospital list ",hospitalList);
  
  const { data: requestedHospitals, isLoading: requestedLoading } =
    useRequestedHospitals("pending");
  console.log(requestedLoading);
  const tabData = [
    {
      id: "all-hospitals",
      title: `All Hospitals (${hospitalList?.length || 0})`,
      content: <HospitalList data={hospitalList || []} isLoading={isLoading} />,
    },
    {
      id: "requested-hospitals",
      title: `Requested Hospitals (${requestedHospitals?.length || 0})`,
      content: (
        <RequestedHospitals
          data={requestedHospitals || []}
          isLoading={requestedLoading}
        />
      ),
    },
  ];
  return (
    <div className="card-box profile-header">
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom">
          {tabData.map((tabItem, i) => (
            <li key={tabItem.id + i}>
              <Link
                className={`nav-link ${i == 0 ? "active" : ""}`}
                to={`#${tabItem.id}`}
                data-bs-toggle="tab"
              >
                {tabItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabData.map((tabItem, i) => (
          <div
            className={`tab-pane ${i == 0 ? "show active" : ""}`}
            id={tabItem.id}
            key={tabItem.id + i}
          >
            {tabItem.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FasttagDetails;
