import { Table } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { itemRender, onShowSizeChange } from "../Pagination";

function DataTable(props) {
  const { columns, data } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="table-responsive">
      <Table
        pagination={{
          total: data.length,
          showSizeChanger: true,
          // showTotal: (total, range) =>
          //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          onShowSizeChange: onShowSizeChange,
          itemRender: itemRender,
        }}
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
      />
    </div>
  );
}

DataTable.propTypes = {
    columns: PropTypes.node,
    data: PropTypes.node,
  };
  

export default DataTable;
