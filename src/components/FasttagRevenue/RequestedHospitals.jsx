import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";
import ManageAccess from './ManageAccess'
function RequestedHospitals(props) {
  const { data, isLoading } = props;
  console.log("Requested hospital ",data);
  
  const columns = [
    { title: "Hospital Name", dataIndex: "name" },
    { title: <div className="text-center">Requested Fast Tags/day</div>, dataIndex: "requestedTagsPerday", render:(item,record)=> <div className="text-center">{record?.fastTag?.count}</div> },
    { title: "Requested On", dataIndex: "requestedOn" },
    { title: "Access", dataIndex: "access", render:(item, record)=> <ManageAccess record={record}/> },
  ];
  

  return <Table columns={columns} dataSource={data} loading={isLoading}/>;
}

RequestedHospitals.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default RequestedHospitals;
