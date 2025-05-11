import { useState } from "react";
import DepartmentCard from "./DepartmentCard";
import { useDepartmentList } from "../../../hooks/departments/useDepartmentList";
import PropTypes from "prop-types";
import ButtonSerchHero from "../../heros/ButtonSerchHero";
import CenteredModal from "../../modals/CenteredModal";
import AddDepartmentForm from "./AddDepartmentForm";
import ComponentLoader from "../../loadings/ComponentLoader";

function Department(props) {
  const { hospitalId } = props;
  const [searchTerm, setSearchterm] = useState("");
  const [show, setShow] = useState(false);
  const query = searchTerm ? `name=${searchTerm}` : "";
  const { data: departmentList, isLoading } = useDepartmentList(
    hospitalId,
    query
  );

  const handleShow = () => {
    setShow(true);
  };
  const handelSearchTerm = (search) => {
    setSearchterm(search);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <ButtonSerchHero
        title="All Departments"
        handleSearchterm={handelSearchTerm}
        handleShow={handleShow}
        buttonTitle="Add Department"
      />
      <div className="tab-list">
        {!isLoading ? (
          departmentList.length > 0 ? (
            <div className="row mt-3 mb-5">
              {departmentList?.map((item) => {
                return (
                  <div
                    className="col-md-3 col-sm-6 col-lg-3 col-xl-3"
                    key={item.id}
                  >
                    <DepartmentCard data={item} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center pt-5 pb-5 text-secondary">
              <small>No reviews found</small>
            </div>
          )
        ) : (
          <ComponentLoader />
        )}
      </div>

      <CenteredModal
        show={show}
        handleClose={handleClose}
        title="Add Department"
      >
        <AddDepartmentForm handleClose={handleClose} />
      </CenteredModal>
    </div>
  );
}

Department.propTypes = {
  hospitalId: PropTypes.node,
};

export default Department;
