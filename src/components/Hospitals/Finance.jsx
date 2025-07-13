import { right_chevron } from "../imagepath";
import { useParams } from "react-router-dom";
import { useHospitalSettlements } from "../../hooks/settlements/useHospitalSettlements";
import SearchDateTable from "../Tables/SearchDateTable";
import { formatDate } from "fullcalendar/index.js";
import PropTypes from "prop-types";
import StatusBadge from "../assests/StatusBadge";
import { useFetchWallet } from "../../hooks/settlements/useFetchWallet";
import { message, Tooltip } from "antd";
import { Clipboard } from "react-feather";
import { formatToDate } from "../configs/formatToDate";
import { generateDateQuery } from "../configs/generateDateQuery";
import { useState } from "react";
function Finance(props) {
  const { analytics } = props;
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const handleDate = (date) => {
    const dateQuery = generateDateQuery(date);
    setQuery(dateQuery);
  };

  const { data: settlements, isLoading } = useHospitalSettlements(
    id,
    `?${query}`
  );

  const { data: walletDetails } = useFetchWallet(id);
  const requestedDate = walletDetails?.latest_settlement?.created_at;
  console.log("Wallet Details ", walletDetails);

  const status = walletDetails?.latest_settlement?.status;
  const columns = [
    {
      title: "Order ID",
      dataIndex: "order_id",
      // sorter: (a, b) => a.bookingid.length - b.bookingid.length,
      render: (text) => (
        <div className="d-flex align-items-center gap-2">
          <span
            style={{
              maxWidth: 120,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={text}
          >
            {text.slice(0, 16)}...
          </span>
          <Tooltip title="Copy Transaction ID">
            <Clipboard
              size={16}
              style={{ cursor: "pointer", color: "#347D73" }}
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Copied to clipboard");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: "Initiated by",
      dataIndex: "",
      render: (item, record) => (
        <div className="d-flex align-items-center">
          {record?.user?.first_name || "N/A"}
        </div>
      ),
    },
    {
      title: "Initiated Date",
      dataIndex: "created_at",
      render: (item) => <div>{formatToDate(item)}</div>,
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (item) => <div>{item || "N/A"}</div>,
    },
    {
      title: <div className="text-center">Payment mode</div>,
      dataIndex: "payment_type",
      render: (item) => (
        <div className="text-center">{item ? item : "unknown"}</div>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (item) => <div>₹{item}</div>,
    },

    {
      title: "Settlement Date",
      dataIndex: "updated_at",
      render: (item) => <div>{formatToDate(item)}</div>,
      sorter: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: <div className="text-center">Status</div>,
      dataIndex: "status",
      render: (item) => (
        <div className="d-flex justify-content-center">
          <StatusBadge status={item} />
        </div>
      ),
    },
  ];
  return (
    <div className="pb-3 mt-2">
      <div className="row pt-2">
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {walletDetails?.data?.requested_amount || 0}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Requested Amount</span>
                  </p>
                </div>
              </div>
              <div className="row">
                {requestedDate ? (
                  <p className="col">
                    Requested On {formatDate(requestedDate)}
                  </p>
                ) : (
                  <p className="col">Settlement not initiated</p>
                )}
              </div>
              {status && (
                <div className="mt-2">
                  <StatusBadge status={status} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.pending || 0}</h6>
              <p>
                <span className="text-danger custom-badge status-red">
                  NO DUES
                </span>
              </p>
            </div>
          </div>
        </div> */}

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.pending ?? 0}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Pending Settlement</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {walletDetails?.data?.withdrawal_amount}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">withdrawable Amount</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.total ?? 0}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Total Balance</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finance details */}
      <SearchDateTable
        data={settlements}
        isLoading={isLoading}
        handleDate={handleDate}
        columns={columns}
        title="Transactions"
        query={query}
        type="settlement"
      />
    </div>
  );
}

// props validation
Finance.propTypes = {
  analytics: PropTypes.object.isRequired,
};

export default Finance;
