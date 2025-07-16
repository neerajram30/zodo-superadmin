import OverViewCard from "./OverViewCard";
import PropTypes from "prop-types";

function Overview(props) {
  const { analytics } = props;
  
  const revenueOverview = [
    {
      id: 1,
      amount: `₹ ${analytics?.settlement?.total || 0}`,
      status: "No Dues",
      operation: "Total Settlement",
    },
    {
      id: 2,
      amount: `₹ ${analytics?.settlement?.requested || 0}`,
      status: "No Dues",
      operation: "Requested Settlements",
    },
    {
      id: 3,
      amount: `₹ ${analytics?.settlement?.pending || 0}`,
      status: "No Dues",
      operation: "Pending Settlements",
    },
  ];

  const tagDetails = [
    {
      id: 1,
      amount: analytics?.fast_tag?.count || 0,
      status: "No Dues",
      operation: "Total Fast Tag Issued",
    },
    {
      id: 2,
      amount: `₹ ${analytics?.fast_tag?.revenue || 0}`,
      status: "No Dues",
      operation: "Fast Tag Revenue",
    },
  ];
  return (
    <div className="mt-2">
      <div className="row">
        {revenueOverview.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4"
            data={item}
            key={item.id}
          />
        ))}
      </div>
      <div className="mt-3 row">
        {tagDetails.map((item) => (
          <OverViewCard
            varient="col-md-6 col-sm-6 col-lg-6 col-xl-6 overview-card"
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
// props validation
Overview.propTypes = {
  analytics: PropTypes.object.isRequired,
};

export default Overview;
