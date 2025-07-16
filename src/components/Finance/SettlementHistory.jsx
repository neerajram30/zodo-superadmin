import React, { useState } from 'react'
import {useAllSettlements} from '../../hooks/settlements/useAllSettlements' 
import DataTable from '../DataTables/DataTable';
import StatusBadge from '../assests/StatusBadge';
import { generateDateQuery } from '../configs/generateDateQuery';
import { formatToDate } from '../configs/formatToDate';
import DateSearchHero from '../heros/DateSearchHero'
function SettlementHistory() {

  const [dateQuery, setDatequery] = useState("");
  const {data:settlements, isLoading} = useAllSettlements(dateQuery);
  console.log("Settlements ",settlements);
    

    const columns = [
    // {
    //       title: "Order ID",
    //       dataIndex: "order_id",
    //       // sorter: (a, b) => a.bookingid.length - b.bookingid.length,
    //       render: (text) => (
    //         <div className="d-flex align-items-center gap-2">
    //           <span
    //             style={{
    //               maxWidth: 120,
    //               overflow: "hidden",
    //               textOverflow: "ellipsis",
    //             }}
    //             title={text}
    //           >
    //             {text.slice(0, 16)}...
    //           </span>
    //           <Tooltip title="Copy Order ID">
    //             <Clipboard
    //               size={16}
    //               style={{ cursor: "pointer", color: "#347D73" }}
    //               onClick={() => {
    //                 navigator.clipboard.writeText(text);
    //                 message.success("Copied to clipboard");
    //               }}
    //             />
    //           </Tooltip>
    //         </div>
    //       ),
    //     },
    {
      title: "Initiated by",
      dataIndex: "",
      render: (item, record) => (
        <div className="d-flex align-items-center">
          {record?.user?.first_name || "N/A"}
        </div>
      ),
      // sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (item) => <div>{item || "N/A"}</div>,
      // sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: <div className="text-center">Payment mode</div>,
      dataIndex: "payment_type",
      // sorter: (a, b) => a.type.length - b.type.length,
      render: (item) => (
        <div className="text-center">{item ? item : "unknown"}</div>
      ),
    },
    {
      title: "Request Date",
      dataIndex: "request_date",
      // sorter: (a, b) => a.time.length - b.time.length,
      render: (item) => <div>{formatToDate(item)}</div>,
      sorter: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: <div className="text-center">Status</div>,
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div className="d-flex justify-content-center">
          <StatusBadge status={item} />
        </div>
      ),
    },
  ];

   const handleDate = (date) => {
    const query = generateDateQuery(date);
    setDatequery(query);
    // setdate(date);
  };
    
  return (
    <div>
      <div>
        <DateSearchHero handleDate={handleDate} type="settlement-hostory" query={`?${dateQuery}`}/>
        <DataTable
          columns={columns}
          data={settlements ? settlements : []}
          loading={isLoading}
        />
      </div>
    </div>
  )
}

export default SettlementHistory