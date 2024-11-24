import React from "react";
import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HospitalsList from "../../Hospitals/HospitalsList";
import { apollo_logo } from "../../imagepath";
import LoadMore from "../../Hospitals/LoadMore";
import HospitalHero from "../../heros/HospitalHero";

function Hospitals() {
  const hospitalDetails = [
    {
      id: 1,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 2,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 3,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 4,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 5,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 6,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 7,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 8,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
    {
      id: 9,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },{
      id: 10,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },{
      id:11,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },{
      id: 12,
      name: "Apollo",
      logo: apollo_logo,
      status: "Active",
      totalFasttags: 30,
      todayBookings: 221,
    },
  ];
  const breadCrumpData = [
    {
      name:"Hospitals",
      status:"active",
      link: "/manage-hospitals",
    }
  ]
  return (
    <Layout
      activeClassName="manage-hospitals"
      id="menu-item3"
      id1="menu-items3"
    >
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData}/>
          <HospitalHero/>
          <HospitalsList hospitalDetails={hospitalDetails}/>
          <LoadMore/>
        </div>
      </div>
    </Layout>
  );
}

export default Hospitals;
