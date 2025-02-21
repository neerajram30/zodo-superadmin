{
  /* /Page Header */
}
import React from "react";
import { useAuth } from "../../hooks/auth/useAuth";
// import { morning_img_01 } from "../imagepath";
function Hero() {
  const { user } = useAuth();
  const username = user?.first_name + user?.last_name || "User";
  return (
    <div className="good-morning-blk mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="morning-user">
            <h2>
              Good Morning, <span>{username}</span>
            </h2>
            <p>Have a nice day</p>
          </div>
        </div>
        {/* <div className="col-md-6 position-blk">
          <div className="morning-img">
            <img src={morning_img_01} alt="#" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
