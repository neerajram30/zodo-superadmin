import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";
import ManageAccess from './ManageAccess'
import { formatDate } from "fullcalendar/index.js";
function RequestedHospitals(props) {
  const { data, isLoading } = props;
  console.log("Requested hospital ",data);
  console.log(data);
  
  const columns = [
    { title: "Hospital Name", dataIndex: "name" },
    { title: <div className="text-center">Requested Fast Tags/day</div>, dataIndex: "requestedTagsPerday", render:(item,record)=> <div className="text-center">{record?.fastTag?.count}</div> },
    { title: <div className="text-center">Requested On</div>, dataIndex: "created_at", render:(item)=><div className="text-center">{formatDate(item)}</div> },
    { title:<div className="ps-5">Access</div>, dataIndex: "access", render:(item, record)=> <ManageAccess record={record}/> },
  ];
  

  return <Table columns={columns} dataSource={data} loading={isLoading}/>;
}

RequestedHospitals.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default RequestedHospitals;
