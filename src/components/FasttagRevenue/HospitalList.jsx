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
      title: "No. Fast Tags/day",
      dataIndex: "fastTagsPerday",
      render: (item, record) => <div>{record?.fastTag?.count}</div>,
    },
    { title: "Monthly Sales", dataIndex: "monthlySales" },
    { title: "Revenue/Month", dataIndex: "revenuePerMonth" },
    {
      title: "Fast Tag",
      dataIndex: "fastTag",
      render: (item, record) => (
        <FasttagToggle toggleFasttag={record.fastTag?.enabled} />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (item, record) => (
        <Link to={`/manage-hospitals/${record.id}`}>view</Link>
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
