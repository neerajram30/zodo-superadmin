import React, { useState } from "react";
import {
  blogimg10,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8
} from "../imagepath";
import { Link } from "react-router-dom";
import DataTable from "../DataTables/DataTable";
import ConfirmDelete from "../modals/ConfirmDelete";
import DoctorListHero from "../heros/DoctorListHero";

function DoctorsList() {
  const [show, setShow] = useState(false);

  const datasource = [
    {
      id: 1,
      Img: blogimg2,
      Name: "Andrea Lalema",
      Department: "Otolaryngology",
      Specialization: "Infertility",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 2,
      Img: blogimg4,
      Name: "Dr.Smith Bruklin",
      Department: "Urology",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 3,
      Img: blogimg6,
      Name: "Dr.William Stephin",
      Department: "Radiology",
      Specialization: "Cancer",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 4,
      Img: blogimg12,
      Name: "Bernardo James",
      Department: "Dentist",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 5,
      Img: blogimg10,
      Name: "Cristina Groves",
      Department: "Gynocolgy",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 6,
      Img: blogimg8,
      Name: "Mark Hay Smith",
      Department: "Gynocolgy",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 7,
      Img: blogimg2,
      Name: "Andrea Lalema",
      Department: "Otolaryngology",
      Specialization: "Infertility",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
    {
      id: 8,
      Img: blogimg4,
      Name: "Dr.Smith Bruklin",
      Department: "Urology",
      Specialization: "Prostate",
      Degree: "MBBS, MS",
      Mobile: "+1 23 456890",
      Email: "example@email.com",
      JoiningDate: "01.10.2022",
      FIELD9: "",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link
              to={`/manage-doctors/${record.id}`}
              className="avatar avatar-sm me-2"
            >
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to={`/manage-doctors/${record.id}`}>{record.Name}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Department",
      dataIndex: "Department",
      sorter: (a, b) => a.Department.length - b.Department.length,
    },
    {
      title: "Specialisation",
      dataIndex: "Specialization",
      sorter: (a, b) => a.Specialization.length - b.Specialization.length,
    },
    {
      title: "Degree",
      dataIndex: "Degree",
      sorter: (a, b) => a.Degree.length - b.Degree.length,
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
      render: (text, record) => (
        <>
          <Link to="#">{record.Mobile}</Link>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "JoiningDate",
      dataIndex: "JoiningDate",
      sorter: (a, b) => a.JoiningDate.length - b.JoiningDate.length,
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
                  to={`/manage-doctors/edit-doctor/${record.id}`}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setShow(true)}
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                </Link>
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
            <DoctorListHero/>
            <div className="doctor-list">
              <DataTable data={datasource} columns={columns} />
            </div>
          </div>
        </div>
      </div>
      <ConfirmDelete show={show} setShow={setShow} title="Doctor" />
    </div>
  );
}

export default DoctorsList;
