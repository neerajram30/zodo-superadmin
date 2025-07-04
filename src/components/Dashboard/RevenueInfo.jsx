import { fasttag, fasttag_revenue } from "../imagepath";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RevenueInfo(props) {
  const { dashboardData } = props;
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
          <div className="dash-widget">
            <div className="d-flex justify-content-between">
              <div className="dash-boxs comman-flex-center">
                <img src={fasttag} alt="#" />
              </div>
            </div>
            <div className="dash-content dash-count flex-grow-1">
              <h4>Settlement Request</h4>
              <h2>
                {" "}
                <CountUp
                  delay={0.4}
                  end={dashboardData?.settlement?.requested ?? 0}
                  duration={0.6}
                />
              </h2>
              <p>
                <Link to="settlement-requests" className="passive-view">
                  See All Request
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6">
          <div className="dash-widget">
            <div className="dash-boxs comman-flex-center">
              <img src={fasttag_revenue} alt="#" />
            </div>
            <div className="dash-content dash-count flex-grow-1">
              <h4>Fast tag Revenue</h4>
              <h2>
                {" "}
                $
                <CountUp
                  delay={0.4}
                  end={dashboardData?.fast_tag?.revenue ?? 0}
                  duration={0.6}
                />
              </h2>

              <p>
                <Link to="fasttag-revenue" className="passive-view">
                  View Details
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

RevenueInfo.propTypes = {
  dashboardData: PropTypes.object,
};

export default RevenueInfo;
