import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../DataTables/DataTable";
import ConfirmDelete from "../modals/ConfirmDelete";
import DoctorRequestHero from "../heros/DoctorRequestHero";
import { useDoctorsList } from "../../hooks/doctors/useDoctorsList";
import { reduceArraytoString } from "../configs/reduceArraytoString";
import CircularImage from "../assests/CircularImage";
import { user_profile } from "../imagepath";
function DoctorRequests() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchterm] = useState("");
  const query = searchTerm
    ? `status=pending&name=${searchTerm}`
    : "status=pending";
  // const { data: doctorRequestList, isLoading } = useDoctorsList(query);

  const handelSearchTerm = (term) => {
    setSearchterm(term);
  };
  // const query = "status=pending";
  const { data: doctorList, isLoading } = useDoctorsList(query);
  const requestedDoctors = doctorList?.filter((item)=> !item?.hospital_id)

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <>
          <div className="d-flex">
            <div>
              <CircularImage
                src={record?.profile_pic ?? user_profile}
                alt={record.name}
                size={40}
                fallback={user_profile}
              />
            </div>
            <div className="ms-2 table-profile">
              <h6>{record.name}</h6>
              <p className="text-muted mb-0">{record.email}</p>
            </div>
          </div>
        </>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
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
      render: (item, record) => (
        <div>{record.hospital_id ? "ofline" : "online"}</div>
      ),
      // sorter: (a, b) => a.Degree.length - b.Degree.length,
    },
    {
      title: "Mobile",
      dataIndex: "phone_number",
      // sorter: (a, b) => a.phone_number.length - b.phone_number.length,
      render: (text) => (
        <>
          <Link to="#">{text}</Link>
        </>
      ),
    },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   sorter: (a, b) => a.email.localeCompare(b.email),
    // },
    {
      title: <div className="text-center">Action</div>,
      dataIndex: "FIELD8",
      render: (item, record) => (
        <div className="d-flex justify-content-center">
          <Link
            to={
              record.status === "pending"
                ? `/manage-doctors/request/${record.id}`
                : `/manage-doctors/${record.id}`
            }
            className="hospital-draft-btn rounded-pill text-primary ps-3 pe-3"
          >
            {record.status === "pending" ? "Review" : "View"}
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
            <DoctorRequestHero handelSearchTerm={handelSearchTerm} />
            <div className="doctor-list">
              <DataTable data={requestedDoctors ?? []} columns={columns} isLoading={isLoading}/>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDelete show={show} setShow={setShow} title="Doctor request" />
    </div>
  );
}

export default DoctorRequests;
