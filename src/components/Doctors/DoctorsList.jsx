import { Table } from "antd";
import React, { useState } from "react";
import { blogimg10, blogimg12, blogimg2, blogimg4, blogimg6, blogimg8, pdficon, pdficon3, pdficon4, plusicon, refreshicon, searchnormal } from "../imagepath";
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from "../Pagination";

function DoctorsList() {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
//   const onChange = (date, dateString) => {
//     // console.log(date, dateString);
//   };

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
                <Link to="#" className="avatar avatar-sm me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src={record.Img}
                    alt="User Image"
                  />
                </Link>
                <Link to="#">{record.Name}</Link>
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
          title: "Specialization",
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
          render: () => (
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
                    <Link className="dropdown-item" to="/editdoctor">
                      <i className="far fa-edit me-2" />
                      Edit
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_patient"
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
            <div className="page-table-header mb-2">
              <div className="row align-items-center">
                <div className="col">
                  <div className="doctor-table-blk">
                    <h3>Doctors List</h3>
                    <div className="doctor-search-blk">
                      <div className="top-nav-search table-search-blk">
                        <form>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search here"
                          />
                          <Link className="btn">
                            <img src={searchnormal} alt="#" />
                          </Link>
                        </form>
                      </div>
                      
                      <div className="add-group">
                        <Link
                          to="/add-doctor"
                          className="btn btn-primary add-pluss ms-2"
                        >
                          <img src={plusicon} alt="#" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-primary doctor-refresh ms-2"
                        >
                          <img src={refreshicon} alt="#" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-auto text-end float-end ms-auto download-grp">


                <div className="invoices-create-btn">
            {/* <Link
              className="invoices-preview-link"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#invoices_preview"
            >
              <i className="fa fa-eye" /> Preview
            </Link> */}
            {/* <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_invoices_details"
              className="btn hospital-draft-btn rounded-pill text-primary"
            >
              My Draft
            </Link> */}
            <Link
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#save_invocies_details"
              className="btn hospital-add-btn rounded-pill ms-1"
            >
              Add Hospital
            </Link>
          </div>

                  <Link to="#" className=" me-2">
                    <img src={pdficon} alt="#" />
                  </Link>
                  <Link to="#" className=" me-2"></Link>
                  <Link to="#" className=" me-2">
                    <img src={pdficon3} alt="#" />
                  </Link>
                  <Link to="#">
                    <img src={pdficon4} alt="#" />
                  </Link>
                </div>
              </div>
            </div>
            {/* /Table Header */}
            <div className="table-responsive doctor-list">
              <Table
                pagination={{
                  total: datasource.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  // showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                columns={columns}
                dataSource={datasource}
                rowSelection={rowSelection}
                rowKey={(record) => record.id}
                style={{
                  backgroundColor: "#f2f2f2", // Replace with your desired background color for the table
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
