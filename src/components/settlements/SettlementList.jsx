import React from "react";
import SettlementCard from "./SettlementCard";
import PropTypes from "prop-types";
import FullscreenLoader from "../loadings/FullscreenLoader";
// import { apollo_logo } from "../imagepath";

function SettlementList(props) {
  const { data, loading } = props;
  // const settlementData = [
  //   {
  //     id: 1,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  //   {
  //     id: 2,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "OVER DUE",
  //   },
  //   {
  //     id: 3,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  //   {
  //     id: 4,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  //   {
  //     id: 5,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "OVER DUE",
  //   },
  //   {
  //     id: 6,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  //   {
  //     id: 7,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  //   {
  //     id: 8,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  //   {
  //     id: 9,
  //     name: "Apollo",
  //     icon: apollo_logo,
  //     status: "Active",
  //     requestedAmount: 30,
  //     requestedDate: "24-11-2024",
  //     dueStatus: "REQUESTED AMOUNT",
  //   },
  // ];
  if (loading) {
    return <FullscreenLoader />;
  }
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
          <SettlementCard data={item} />
        </div>
      ))}
    </div>
  );
}

SettlementList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export default SettlementList;
