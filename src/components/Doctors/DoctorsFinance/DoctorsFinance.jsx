import { useState } from "react";
import SearchDateTable from "../../Tables/SearchDateTable";
import { useParams } from "react-router-dom";
import StatusBadge from "../../assests/StatusBadge";
import { generateDateQuery } from "../../configs/generateDateQuery";
import { useDoctorTransactions } from "../../../hooks/settlements/useDoctorTransations";
import { message, Tooltip } from "antd";
import { Clipboard } from "react-feather";
import { formatToDate } from "../../configs/formatToDate";
function DoctorsFinance() {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const handleDate = (date) => {
    const dateQuery = generateDateQuery(date);
    setQuery(dateQuery);
  };

  const { data: transactions, isLoading } = useDoctorTransactions(
    id,
    `?${query}`
  );

  // const financeData = [
  //   {
  //     id: 1,
  //     amount: `$ ${analytics?.settlement?.requested || 0}`,
  //     status: "No Dues",
  //     operation: "Settlement",
  //   },
  //   {
  //     id: 2,
  //     amount: `$ 20,000`,
  //     status: "No Dues",
  //     operation: "Total Revenue In Month",
  //   },
  //   {
  //     id: 3,
  //     amount: `$ ${analytics?.settlement?.total || 0}`,
  //     status: "No Dues",
  //     operation: "Total Balance",
  //   },
  // ];

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
    <div>
      {/* <div className="row">
        {financeData.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4"
            data={item}
            key={item.id}
          />
        ))}
      </div> */}
      <div className="mt-2">
        <SearchDateTable
          data={transactions}
          isLoading={isLoading}
          // handelQuery={handelQuery}
          columns={columns}
          title="Transactions"
          query={query}
          type="doctor-transactions"
          handleDate={handleDate}
        />
      </div>
    </div>
  );
}

export default DoctorsFinance;
