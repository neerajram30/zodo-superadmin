import React from "react";
import SettlementCard from "./SettlementCard";
import { apollo_logo } from "../imagepath";

function SettlementList() {
    const settlementData = [
        {
            id:1,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },
        {
            id:2,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },

    ];

    const settlementData1 = [
        {
            id:1,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },
        {
            id:2,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },
        {
            id:3,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },
        {
            id:4,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },
        {
            id:5,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },
        {
            id:6,
            name:"Apollo",
            icon:apollo_logo,
            status:'Active',
            requestedAmount: 30,
            requestedDate: "24-11-2024",
        },


    ]
  return (
      <div className="row">
        {settlementData.map((item) => (
          <div className="col-sm-6 col-lg-4 col-xl-6 d-flex" key={item}>
            <SettlementCard data={item}/>
          </div>
        ))}
        {settlementData1.map((item) => (
          <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item}>
            <SettlementCard data={item}/>
          </div>
        ))}
        
      </div>
  );
}

export default SettlementList;
