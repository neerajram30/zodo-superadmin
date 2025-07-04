import React, { useState } from 'react'
import DoctorRequestHero from '../heros/DoctorRequestHero';
import DataTable from '../DataTables/DataTable';
import { useDoctorsList } from '../../hooks/doctors/useDoctorsList';
import CircularImage from '../assests/CircularImage';
import { reduceArraytoString } from '../configs/reduceArraytoString';
import { Link } from 'react-router-dom';
import { user_profile } from '../imagepath';

function RejectedDoctors() {
      const [searchTerm, setSearchterm] = useState("");
      const query = searchTerm
        ? `status=rejected&name=${searchTerm}`
        : "status=rejected";
      // const { data: doctorRequestList, isLoading } = useDoctorsList(query);
    
      const handelSearchTerm = (term) => {
        setSearchterm(term);
      };
      const { data: doctorList, isLoading } = useDoctorsList(query);
      const rejectedDoctors = doctorList?.filter((item)=> !item?.hospital_id)
    
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
                  record.status === "rejected"
                    ? `/manage-doctors/request/${record.id}`
                    : `/manage-doctors/${record.id}`
                }
                className="hospital-draft-btn rounded-pill text-primary ps-3 pe-3"
              >
                {record.status === "rejected" ? "Review" : "View"}
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
                  <DataTable data={rejectedDoctors ?? []} columns={columns} isLoading={isLoading}/>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default RejectedDoctors