import React from "react";
import Layout from "../../layout/Layout";
import Hero from "../../Dashboard/hero";
import InfoCards from "../../Dashboard/Info_cards";
import { fasttag, profile_hospitals, doctors } from "../../imagepath";
import RevenueInfo from "../../Dashboard/RevenueInfo";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Analytics from "../../Dashboard/Analytics";
import DashboardTables from "../../Dashboard/DashboardTables";
import { useGetHospitals } from "../../../hooks/hospitals/useGetHospitals";
import { useDoctorsList } from "../../../hooks/doctors/useDoctorsList";

function Dashboard() {
  const { data } = useGetHospitals();
  const { data:doctorList } = useDoctorsList();
  const hospitalCount = data?.data?.length;
  const doctorCount = doctorList?.data?.length;
  const basicInformation = [
    {
      id: 1,
      title: "Total hospitals",
      icon: profile_hospitals,
      count: hospitalCount,
      percentageUp: 20,
      link: "/manage-hospitals",
    },
    {
      id: 2,
      title: "Total Doctors ( online )",
      icon: doctors,
      count: doctorCount,
      percentageUp: 40,
      link: "/manage-doctors",
    },
    {
      id: 3,
      title: "Fast tag Issued",
      icon: fasttag,
      count: 121,
      percentageUp: 40,
      link: "/dashboard/fasttag-issued",
    },
  ];
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "active",
      link: "/dashboard",
    },
  ];

  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <Hero />
          <InfoCards info={basicInformation} />
          <RevenueInfo />
          <Analytics />
          <DashboardTables />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
