import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";
import ManageAccess from './ManageAccess'
function RequestedHospitals(props) {
  const { data } = props;
  const columns = [
    { title: "Hospital Name", dataIndex: "name" },
    { title: "Requested Fast Tags/day", dataIndex: "requestedTagsPerday", render:(item,record)=> <div>{record?.fastTag?.count}</div> },
    { title: "Requested On", dataIndex: "requestedOn" },
    { title: "Access", dataIndex: "access", render:(item, record)=> <ManageAccess record={record}/> },
  ];
  

  return <Table columns={columns} dataSource={data} />;
}

RequestedHospitals.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default RequestedHospitals;
