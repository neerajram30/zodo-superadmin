import React from "react";
import { useRequestedHospitals } from "../../hooks/hospitals/useRequestedHospital";
import { Table } from "antd";
import { useDoctorsList } from "../../hooks/doctors/useDoctorsList";
import { Link } from "react-router-dom";

function DashboardTable() {
  const { data: requestedHospitals, isLoading: requestedLoading } =
    useRequestedHospitals("pending");
  const query = "status=pending";
  const { data: doctorList, isLoading: doctorLoading } = useDoctorsList(query);
  console.log(requestedHospitals);
  console.log(requestedLoading);
  const hospitals = requestedHospitals?.slice(0, 3);
  const doctors = doctorList?.slice(0, 3);
  const hospitalColumns = [
    { title: "Hospital Info Name", dataIndex: "name" },
    { title: "Contact Info", dataIndex: "", render:(item, record)=><div>{record?.contact_details?.mobile}</div> },
    { title: "Action", dataIndex: "", render:(item, record)=> <Link to={`/manage-hospitals/${record.id}`}>View</Link> },
  ];
  const doctorColumns = [
    { title: "Hospital Info Name", dataIndex: "name" },
    { title: "Date of Request", dataIndex: "phone_number" },
    { title: "Action", dataIndex: "", render:(item, record)=> <Link to={`/manage-doctors/${record.id}`}>View</Link> },
  ];
  // const hospitalData = {
  //   title: "Recent Hospital Request",
  //   rows: [
  //     {
  //       name: "KIMS",
  //       email: "james@gmail.com",
  //       contact: "9497677914",
  //       action: "See More",
  //     },
  //     {
  //       name: "KIMS",
  //       email: "james@gmail.com",
  //       contact: "9497677914",
  //       action: "See More",
  //     },
  //     {
  //       name: "KIMS",
  //       email: "james@gmail.com",
  //       contact: "9497677914",
  //       action: "See More",
  //     },
  //   ],
  // };

  // const doctorRequestData = {
  //   title: "Recent Doctor Request",
  //   columns: ["Doctor Name", "Date Of Request", "Action"],
  //   rows: [
  //     {
  //       name: "J James",
  //       email: "james@gmail.com",
  //       contact: "9497677914",
  //       action: "See More",
  //     },
  //     {
  //       name: "J James",
  //       email: "james@gmail.com",
  //       contact: "9497677914",
  //       action: "See More",
  //     },
  //     {
  //       name: "J James",
  //       email: "james@gmail.com",
  //       contact: "9497677914",
  //       action: "See More",
  //     },
  //   ],
  // };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <p>Recent Hospital Request</p>
          <Table
            columns={hospitalColumns}
            dataSource={hospitals}
            pagination={false}
            loading={requestedLoading}
          />
        </div>
        <div className="col-md-6">
          <p>Recent Doctor Request</p>
          <Table
            columns={doctorColumns}
            dataSource={doctors}
            loading={doctorLoading}
            pagination={false}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardTable;
