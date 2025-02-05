import React from "react";
import DepartmentHero from "../../heros/DepartmentHero";
import DepartmentCard from "./DepartmentCard";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import PropTypes from "prop-types";

function Department(props) {
  const { hospitalId } = props;
  const {
    data: departmentList,
    isLoading,
    isError,
  } = useDepartmentList(hospitalId);

  const depatments = [
    {
      id: 1,
      department: "Surgical Department",
      peopleCount: 8,
    },
    {
      id: 2,
      department: "Radiology Department",
      peopleCount: 8,
    },
    {
      id: 3,
      department: "Maternal & Child Health Services",
      peopleCount: 8,
    },
    {
      id: 4,
      department: "Cardiology",
      peopleCount: 8,
    },
  ];

  console.log("data", departmentList);
  console.log("is loading", isLoading);
  console.log("is error ", isError);
  return (
    <div>
      <DepartmentHero />
      <div className="row mt-3">
        {depatments.map((item) => {
          return (
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xl-3"
              key={item.id + item.department}
            >
              <DepartmentCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Department.propTypes = {
  hospitalId: PropTypes.node,
};

export default Department;
