import React from "react";
import BookingsTable from "./BookingsTable";
import { totalBookings } from "../../configs/totalBookings";

function BookingsList() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "TRANSACTION NAME",
      dataIndex: "transactionName",
      sorter: (a, b) => a.transactionName.length - b.transactionName.length,
    },
    {
      title: "DUE ISSUE",
      dataIndex: "dueIssue",
      sorter: (a, b) => a.dueIssue.length - b.dueIssue.length,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      //   sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
    },
  ];
  return (
    <div>
      <BookingsTable columns={columns} data={totalBookings} />
    </div>
  );
}

export default BookingsList;
