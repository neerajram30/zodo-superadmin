import PropTypes from "prop-types";
import { user_profile } from "../imagepath";
import CircularImage from "../assests/CircularImage";
import StatusBadge from "../assests/StatusBadge";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useUserBookings } from "../../hooks/users/useUserBookings";
import UserAppointmentTable from "./UserAppointmentTable";
import { useState } from "react";

function UserDetails(props) {
  const { userDetails } = props;
  const [date,setDate] = useState(null)
  const userId = userDetails?.id;
  const query = date ? `date=${date?.startDate},${date?.endDate}` : ""
  const { data: appointments, isLoading } = useUserBookings(userId, query);
  const handleDate = (date)=>{
    setDate(date)
  }  
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center ms-2 me-2">
          <div className="d-flex align-items-center">
            <div className="schedule-profile">
              <CircularImage
                src={userDetails?.profile_picture ?? user_profile}
                alt="user"
                size={80}
                fallback={user_profile}
              />
            </div>
            <div className="schedule-modal">
              <div className="d-flex">
                <h5>{userDetails?.first_name}</h5>
                {/* <div
                className={`delete-badge ms-5 ${
                  requestDetails?.isFasttag ? "status-green" : "status-grey"
                }`}
              >
                Fasttag
              </div> */}
              </div>
              <small>
                {userDetails?.age && (
                  <span>
                    {userDetails?.age}
                    {" yrs "}
                  </span>
                )}
                {userDetails?.gender}{" "}
              </small>
            </div>
          </div>
          <div>
            {userDetails?.phone && (
              <div className="d-flex align-items-center">
                <i className="feather-facebook text-primary">
                  <FeatherIcon icon="phone" />
                </i>
                <h6 className="user-details ms-3 pt-2">{userDetails?.phone}</h6>
              </div>
            )}

            {userDetails?.email && (
              <div className="d-flex align-items-center">
                <i className="feather-facebook text-primary">
                  <FeatherIcon icon="mail" />
                </i>
                <h6 className="user-details ms-3 pt-2">{userDetails?.email}</h6>
              </div>
            )}
          </div>

          <div>
            <StatusBadge
              status={userDetails?.is_active ? "active" : "blocked"}
            />
          </div>
        </div>
      </div>
      <div className="ms-2 me-2 mt-4">
        <h4>Appointments</h4>
        <UserAppointmentTable
          appointmentList={appointments}
          loading={isLoading}
          handleDate={handleDate}
        />
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  userDetails: PropTypes.object,
};

export default UserDetails;
