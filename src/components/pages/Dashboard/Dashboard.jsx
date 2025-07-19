import Layout from "../../layout/Layout";
import Hero from "../../Dashboard/hero";
import InfoCards from "../../Dashboard/Info_cards";
import { dep_icon1, tag, menuicon13 } from "../../imagepath";
import RevenueInfo from "../../Dashboard/RevenueInfo";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import { useDashboardData } from "../../../hooks/useDashboardData";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import Analytics from "../../Dashboard/Analytics";
import DashboardTable from "../../Dashboard/DashboardTables";
function Dashboard() {
  const { data: dashboardData, isLoading } = useDashboardData();
  const basicInformation = [
    {
      id: 1,
      title: "Total hospitals",
      icon: menuicon13,
      count: dashboardData?.activeHospitalsCount ?? 0,
      percentageUp: 0,
      link: "/manage-hospitals",
    },
    {
      id: 2,
      title: "Total Doctors ( online )",
      icon: dep_icon1,
      count: dashboardData?.activeDoctorsCount ?? 0,
      percentageUp: 0,
      link: "/manage-doctors",
    },
    {
      id: 3,
      title: "Fast tag Issued",
      icon: tag,
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

  return (
    <Layout activeClassName="dashboard">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <Hero />
          <InfoCards info={basicInformation} />
          <RevenueInfo dashboardData={dashboardData} />
          <Analytics />
          <DashboardTable />
        </div>
      </div>
      {isLoading && <FullscreenLoader />}
    </Layout>
  );
}

export default Dashboard;
