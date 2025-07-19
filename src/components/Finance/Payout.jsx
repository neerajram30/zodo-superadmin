import { useDashboardData } from "../../hooks/useDashboardData";
import Analytics from "../Dashboard/Analytics";
import { clock, emptyWallet, fasttag, tickCircle } from "../imagepath";
import FullscreenLoader from "../loadings/FullscreenLoader";
import SettlementCard from "./SettlementCard";
import SettlementTable from "./SettlementTable";
function Payout() {
  const { data: dashboardAnalytics, isLoading } = useDashboardData();

  const basicInformation = [
    {
      id: 1,
      title: "Total Payout Requests",
      icon: fasttag,
      count: dashboardAnalytics?.settlement?.total ?? 0,
      percentageUp: 20,
      link: "",
      type: "normal",
    },
    {
      id: 2,
      title: "Pending Settlement",
      icon: clock,
      count: dashboardAnalytics?.settlement?.requested ?? 0,
      percentageUp: 40,
      link: "",
      type: "normal",
    },
    {
      id: 3,
      title: "Approved Settlements",
      icon: tickCircle,
      count: dashboardAnalytics?.settlement?.approved ?? 0,
      percentageUp: 40,
      link: "",
      type: "normal",
    },
    {
      id: 4,
      title: "Normal Booking Revenue",
      icon: emptyWallet,
      count: dashboardAnalytics?.consultation?.revenue ?? 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 5,
      title: "Fast Tag Revenue",
      icon: emptyWallet,
      count: dashboardAnalytics?.fast_tag?.revenue ?? 0,
      percentageUp: 40,
      link: "",
      type: "currency",
    },
    {
      id: 6,
      title: "Service Revenue",
      icon: emptyWallet,
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

      {isLoading && <FullscreenLoader/>}
    </div>
  );
}

export default Payout;
