import React from "react";
import DepartmentHero from "../../heros/DepartmentHero";
import DepartmentCard from "./DepartmentCard";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import PropTypes from "prop-types";
import FullscreenLoader from "../../loadings/FullscreenLoader";

function Department(props) {
  const { hospitalId } = props;
  const { data: departmentList, isLoading } = useDepartmentList(hospitalId);
  return (
    <div>
      <DepartmentHero />
      <div className="row mt-3 mb-5">
        {departmentList?.map((item) => {
          return (
            <div className="col-md-3 col-sm-6 col-lg-3 col-xl-3" key={item.id}>
              <DepartmentCard data={item} />
            </div>
          );
        })}
      </div>
      {isLoading && <FullscreenLoader/>}
    </div>
  );
}

Department.propTypes = {
  hospitalId: PropTypes.node,
};

export default Department;
