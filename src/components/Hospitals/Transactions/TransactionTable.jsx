import { Table } from "antd";
import React, { useState } from "react";
// import { hospitalTransactions } from "../../configs/hospitalTransactions";
import { itemRender, onShowSizeChange } from "../../Pagination";
import PropTypes from "prop-types";
import { formatDate } from "../../configs/formatDate";
function TransactionTable(props) {
  const { settlements, handleSelection } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    handleSelection(newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns = [
    {
      title: "DATE ISSUED",
      dataIndex: "created_at",
      render: (item) => <div>{formatDate(item)}</div>,
      // sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "INVOICE#",
      dataIndex: "invoiceNumber",
      // sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
    },
    {
      title: "TRANSACTION NAME",
      dataIndex: "transactionName",
      // sorter: (a, b) => a.transactionName.length - b.transactionName.length,
    },
    {
      title: "DUE DATE",
      dataIndex: "dueDate",
      // sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`${
            (item === "failed" && "delete-badge status-red") ||
            (item === "requested" && "delete-badge status-orange") ||
            (item === "completed" && "delete-badge status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: "TOTAL",
      dataIndex: "amount",
      render:(item)=><div>₹ {item}</div>
      // sorter: (a, b) => a.total.length - b.total.length,
    },
    {
      title: "BALANCE",
      dataIndex: "balance",
      // sorter: (a, b) => a.balance.length - b.balance.length,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="table-responsive">
      <Table
        pagination={{
          total: settlements?.length,
          showSizeChanger: true,
          // showTotal: (total, range) =>
          //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          onShowSizeChange: onShowSizeChange,
          itemRender: itemRender,
        }}
        columns={columns}
        dataSource={settlements ?? []}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
      />
    </div>
  );
}

TransactionTable.propTypes = {
  settlements: PropTypes.array,
  handleSelection:PropTypes.func
};

export default TransactionTable;
