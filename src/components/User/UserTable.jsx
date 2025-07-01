import React from "react";
import DataTable from "../DataTables/DataTable";
import CircularImage from "../assests/CircularImage";
import { user_profile } from "../imagepath";
import { Link } from "feather-icons-react/build/IconComponents";
import PropTypes from "prop-types";

function UserTable({ usersList, isLoading }) {
  const columns = [
    {
      title: "Staff Name",
      dataIndex: "first_name",
      // sorter: (a, b) => a.name.length - b.name.length,
      render: (item, record) => (
        <div className="d-flex">
          <div>
            <CircularImage
              src={record?.profile_picture ?? user_profile}
              alt={item}
              size={40}
              fallback={user_profile}
            />
          </div>
          <div className="ms-2 table-profile">
            <h6>{item}</h6>
            <p className="text-muted mb-0">{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      // sorter: (a, b) => a.empid.length - b.empid.length,
    },
    {
      title: "Department",
      dataIndex: "",
      // sorter: (a, b) => a.department.length - b.department.length,
      render: (item, record) => {
        // const department = record?.departments[0]
        // console.log("Department ",record?.departments);
        const departmentLen = record?.departments?.length;
        const departments =
          departmentLen !== 0 &&
          record?.departments?.reduce((acc, current) => {
            return acc + current.name + " ";
          }, "");
        return <div>{departments}</div>;
      },
    },
    {
      title: "Type",
      dataIndex: "user_type",
      // sorter: (a, b) => a.pricing.length - b.pricing.length,
    },
    {
      title: "",
      dataIndex: "",
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
                {/* <Link
                  className="dropdown-item"
                  to={`/staff-manage/${record.id}`}
                >
                  <i className="far fa-eye me-2" />
                  View
                </Link> */}
                <Link
                  className="dropdown-item"
                  to
                  //   onClick={() => handleEditClick(record.id, record.user_type)}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  //   onClick={() => handleDeleteClick(record.id)}
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
    <div className="mt-3">
      <DataTable
        columns={columns}
        dataSource={usersList}
        loading={isLoading}
      />
    </div>
  );
}

UserTable.propTypes = {
  usersList: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default UserTable;
