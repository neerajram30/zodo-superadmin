import Layout from "../../layout/Layout";
import Hero from "../../Dashboard/hero";
import InfoCards from "../../Dashboard/Info_cards";
import { fasttag, profile_hospitals, doctors } from "../../imagepath";
import RevenueInfo from "../../Dashboard/RevenueInfo";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Analytics from "../../Dashboard/Analytics";
import DashboardTables from "../../Dashboard/DashboardTables";
import { useDashboardData } from "../../../hooks/useDashboardData";
import FullscreenLoader from "../../loadings/FullscreenLoader";

function Dashboard() {
  // const { data } = useGetHospitals();
  // const hospitalCount = data?.data?.length;

  const { data: dashboardData, isLoading } = useDashboardData();

  const basicInformation = [
    {
      id: 1,
      title: "Total hospitals",
      icon: profile_hospitals,
      count: dashboardData?.activeHospitalsCount ?? 0,
      percentageUp: 0,
      link: "/manage-hospitals",
    },
    {
      id: 2,
      title: "Total Doctors ( online )",
      icon: doctors,
      count: dashboardData?.activeDoctorsCount ?? 0,
      percentageUp: 0,
      link: "/manage-doctors",
    },
    {
      id: 3,
      title: "Fast tag Issued",
      icon: fasttag,
      count: dashboardData?.fast_tag?.count ?? 0,
      percentageUp: 0,
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
  console.log("Dashboard data ",dashboardData);
  
  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <Hero />
          <InfoCards info={basicInformation} />
          <RevenueInfo dashboardData={dashboardData}/>
          <Analytics />
          <DashboardTables />
        </div>
      </div>
      {isLoading && <FullscreenLoader/>}
    </Layout>
  );
}

export default Dashboard;
