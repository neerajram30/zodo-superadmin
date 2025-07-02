import { useDashboardData } from "../../hooks/useDashboardData";
import Analytics from "../Dashboard/Analytics";
import { doctors, fasttag, profile_hospitals } from "../imagepath";
import SettlementCard from "./SettlementCard";
import SettlementTable from "./SettlementTable";
function Payout() {
  const { data: dashboardAnalytics, isLoading } = useDashboardData();
  console.log("Dashboard", dashboardAnalytics, isLoading);

  const basicInformation = [
    {
      id: 1,
      title: "Total Payout Requests",
      icon: profile_hospitals,
      count: dashboardAnalytics?.settlement?.total ?? 0,
      percentageUp: 20,
      link: "",
      type: "normal",
    },
    {
      id: 2,
      title: "Pending Settlement",
      icon: doctors,
      count: dashboardAnalytics?.settlement?.requested ?? 0,
      percentageUp: 40,
      link: "",
      type: "normal",
    },
    {
      id: 3,
      title: "Approved Settlements",
      icon: fasttag,
      count: dashboardAnalytics?.settlement?.approved ?? 0,
      percentageUp: 40,
      link: "",
      type: "normal",
    },
    {
      id: 4,
      title: "Normal Booking Revenue",
      icon: fasttag,
      count: dashboardAnalytics?.consultation?.revenue ?? 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 5,
      title: "Fast Tag Revenue",
      icon: fasttag,
      count: dashboardAnalytics?.fast_tag?.revenue ?? 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 6,
      title: "Service Revenue",
      icon: fasttag,
      count: dashboardAnalytics?.service?.revenue ?? 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
  ];
  const bookingType = [
    { value: 1, label: "Fasttag Booking" },
    { value: 2, label: "Normal Booking" },
  ];
  return (
    <div>
      <div className="row mt-3">
        <SettlementCard info={basicInformation} />
      </div>
      <Analytics bookingType={bookingType} id="appointment-chart" />
      <SettlementTable />
    </div>
  );
}

export default Payout;
