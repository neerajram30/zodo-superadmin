import React from "react";
import FasttagToggle from "./FasttagToggle";
import { Table } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HospitalList(props) {
  const { data, isLoading } = props;
  const columns = [
    { title: "Hospital Name", dataIndex: "name" },
    {
      title:<div className="text-center">No. Fast Tags/day</div>,
      dataIndex: "fastTagsPerday",
      render: (item, record) => <div className="text-center">{record?.fastTag?.count}</div>,
    },
    // { title: "Monthly Sales", dataIndex: "monthlySales" },
    { title: <div className="text-center">Price</div>, dataIndex: "", render:(item, record)=><div className="text-center">₹{record?.fastTag?.price}</div> },
    {
      title: <div className="text-center">Fast Tag</div>,
      dataIndex: "fastTag",
      render: (item, record) => (
        <div className="d-flex justify-content-center">

        <FasttagToggle toggleFasttag={record.fastTag?.enabled} />
        </div>
      ),
    },
    {
      title: <div className="text-center">Action</div>,
      dataIndex: "action",
      render: (item, record) => (
        <Link to={`/manage-hospitals/${record.id}`} className="d-flex justify-content-center">view</Link>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} loading={isLoading} />;
}
HospitalList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
export default HospitalList;
