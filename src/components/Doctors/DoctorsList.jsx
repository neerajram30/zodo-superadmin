import React, { useState } from "react";
// import {
//   blogimg2
// } from "../imagepath";
import { Link } from "react-router-dom";
import DataTable from "../DataTables/DataTable";
import ConfirmDelete from "../modals/ConfirmDelete";
import DoctorListHero from "../heros/DoctorListHero";
import { useDoctorsList } from "../../hooks/doctors/useDoctorsList";
import { reduceArraytoString } from "../configs/reduceArraytoString";

function DoctorsList() {
  const [show, setShow] = useState(false);
  const { data: doctorList, isLoading } = useDoctorsList();
  console.log("Doctors list", doctorList);
  console.log(isLoading);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <>
          <h2 className="profile-image">
            {/* <Link
              to={`/manage-doctors/${record.id}`}
              className="avatar avatar-sm me-2"
            >
              <img
                className="avatar-img rounded-circle"
                src={blogimg12}
                alt="User Image"
              />
            {text}
            </Link> */}
            <Link to>{text}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    // {
    //   title: "Department",
    //   dataIndex: "Department",
    //   // sorter: (a, b) => a.Department.length - b.Department.length,
    // },
    {
      title: "Specialisation",
      dataIndex: "Specialization",
      // sorter: (a, b) => a.Specialization.length - b.Specialization.length,
      render: (item, record) => {
        const specialisations = reduceArraytoString(
          record?.specialisations ?? []
        );
        return <div>{specialisations}</div>;
      },
    },
    {
      title: "Type",
      dataIndex: "hospital_id",
      render: (item) => (item ? "ofline" : "online"),

      // sorter: (a, b) => a.Degree.length - b.Degree.length,
    },
    {
      title: "Mobile",
      dataIndex: "phone_number",
      sorter: (a, b) => a.phone_number.length - b.phone_number.length,
      render: (text) => (
        <>
          <Link to="#">{text}</Link>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "JoiningDate",
      dataIndex: "work_start_date",
      render: (item) => (
        <div className="d-flex justify-content-center">
          {item ? item : "N/A"}
        </div>
      ),
      // sorter: (a, b) => a.JoiningDate.length - b.JoiningDate.length,
    },
    {
      title: "",
      dataIndex: "FIELD8",
      render: (item, record) => (
        <>
          <div className="text-end">
            <div className="dropdown dropdown-action">
              <Link
                to="#"
                className="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link
                  className="dropdown-item"
                  to={`/manage-doctors/${record.id}`}
                >
                  <i className="far fa-eye me-2" />
                  View
                </Link>
                <Link
                  className="dropdown-item"
                  to={`/manage-doctors/${record.id}/edit`}
                  aria-disabled="true"
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                {/* <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setShow(true)}
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                </Link> */}
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-table show-entire">
          <div className="card-body">
            {/* Table Header */}
            <DoctorListHero />
            <div className="doctor-list">
              <DataTable data={doctorList ?? []} columns={columns} />
            </div>
          </div>
        </div>
      </div>
      <ConfirmDelete show={show} setShow={setShow} title="Doctor" />
    </div>
  );
}

export default DoctorsList;
