import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../DataTables/DataTable";
import ConfirmDelete from "../modals/ConfirmDelete";
import DoctorRequestHero from "../heros/DoctorRequestHero";
import { useDoctorsList } from "../../hooks/doctors/useDoctorsList";
import { reduceArraytoString } from "../configs/reduceArraytoString";
function DoctorRequests() {
  const [show, setShow] = useState(false);
  const query = "status=pending";
  const { data: doctorList, isLoading } = useDoctorsList(query);
  console.log(doctorList);
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
      dataIndex: "type",
      render:(item, record) =>(
        <div>{record.hospital_id ? "ofline" : "online"}</div>
      )
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
      title: "Action",
      dataIndex: "FIELD8",
      render: (item, record) => (
        <div className="d-flex justify-content-center">
          <Link
            to={record?.hospital_id ? `/manage-doctors/${record.id}` :`/manage-doctors/request/${record.id}`}
            className="hospital-draft-btn rounded-pill text-primary ps-3 pe-3"
          >
            {record.hospital_id ? "View" : "Review"}
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-table show-entire rounded-0">
          <div className="card-body">
            <DoctorRequestHero />
            <div className="doctor-list">
              <DataTable data={doctorList ?? []} columns={columns} />
            </div>
          </div>
        </div>
      </div>
      <ConfirmDelete show={show} setShow={setShow} title="Doctor request" />
    </div>
  );
}

export default DoctorRequests;
