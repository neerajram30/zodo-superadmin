import DataTable from "../DataTables/DataTable";
import CircularImage from "../assests/CircularImage";
import { user_profile } from "../imagepath";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatDate } from "fullcalendar/index.js";
import StatusBadge from "../assests/StatusBadge";
import { useUserStatusToggle } from "../../hooks/users/useUserStatusToggle";
import ToggleUser from "../modals/ToggleUser";
import { useState } from "react";

function UserTable({ usersList, isLoading }) {
  const { mutate } = useUserStatusToggle();
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const handleBlockUser = (id) => {
    mutate(id);
  };
  const handelBlockClick = (record) => {
    setUserDetails(record);
    setShow(true);
  };
  const columns = [
    {
      title: "User Name",
      dataIndex: "",
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
            <h6>{record?.first_name}</h6>
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
      title: <div className="text-center">Age</div>,
      dataIndex: "age",
      render: (item) => <div className="text-center">{item}</div>,
      // sorter: (a, b) => a.empid.length - b.empid.length,
    },
    {
      title: <div className="text-center">Departments</div>,
      dataIndex: "",
      render: (item, record) => {
        const departmentLen = record?.departments?.length;
        const departments =
          departmentLen !== 0 &&
          record?.departments?.reduce((acc, current) => {
            return acc + current.name + " ";
          }, "");
        return <div className="text-center">{departments}</div>;
      },
    },
    {
      title: <div className="text-center">status</div>,
      dataIndex: "is_active",
      render: (item) => (
        <div className="d-flex justify-content-center">
          <StatusBadge status={item ? "active" : "blocked"} />
        </div>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: <div className="text-center">Joining Date</div>,
      dataIndex: "created_at",
      render: (item) => <div className="text-center">{formatDate(item)}</div>,
    },
    {
      title: "",
      dataIndex: "",
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
                  <i className="fa fa-eye m-r-5"></i>
                  <span className="ps-1">View</span>
                </Link>
                <Link
                  className="dropdown-item"
                  to
                  onClick={() => handelBlockClick(record)}
                >
                  {record?.is_active ? (
                    <span>
                      <i className="fa fa-user-slash m-r-5"></i> Block
                    </span>
                  ) : (
                    <span>
                      <i className="fa fa-user-check m-r-5"></i> Activate
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="mt-3 table-responsive">
      <DataTable columns={columns} data={usersList} loading={isLoading} />
      <ToggleUser
        show={show}
        setShow={setShow}
        title={userDetails?.name}
        status={userDetails?.is_active}
        handleStatusChange={handleBlockUser}
        userId={userDetails?.id}
      />
    </div>
  );
}

UserTable.propTypes = {
  usersList: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default UserTable;
