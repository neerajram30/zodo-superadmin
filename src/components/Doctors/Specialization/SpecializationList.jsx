import { useState } from "react";
import { three_dots_menu } from "../../imagepath";
import EditSpecialization from "../../modals/EditSpecialization";
import ConfirmDelete from "../../modals/ConfirmDelete";
import PropTypes from "prop-types";
import useDeleteSpecialisation from "../../../hooks/specialisation/useDeleteSpecialisation";
import { Link } from "react-router-dom";
import ImageBox from "../../assests/ImageBox";
import { formatToDate } from "../../configs/formatToDate";
import { formatDate } from "../../configs/formatDate";
function SpecializationList(props) {
  const { specialisationList, isLoading } = props;
  // State for selected table rows
  // State to control visibility of edit modal
  const [showEdit, setShowEdit] = useState(false);
  // State to control visibility of delete confirmation modal
  const [showDelete, setShowDelete] = useState(false);
  // State to store the ID of the specialisation being edited or deleted
  const [specialisationId, setSpecialisationId] = useState(null);
  // Fetch specialisation list data and loading state from custom hook
  // const { data, isLoading } = useSpecialisationList();

  // // Fetch delete mutation function and loading state from custom hook
  const { mutate, isLoading: deleteLoading } = useDeleteSpecialisation();
  console.log(isLoading);

  const [specialisation, setSpecialisation] = useState("");

  // Handler for edit button click
  const handleEdit = (specialisationId) => {
    console.log(specialisationId);

    // Find the selected specialisation by ID
    const selectedSpecialisation = specialisationList?.find(
      (item) => item.id === specialisationId
    );

    console.log("Selected Specialisation", selectedSpecialisation);

    setSpecialisation(selectedSpecialisation);
    setShowEdit(true);
  };

  // Handler for delete button click
  const handleDelete = (id) => {
    setSpecialisationId(id);
    setShowDelete(true);
  };

  // Handler for confirming deletion
  const onDelete = () => {
    if (specialisationId) {
      mutate(specialisationId);
      setShowDelete(false);
    }
  };
  return (
    <div>
      <div className="row mt-3">
        {Array.isArray(specialisationList) &&
          specialisationList.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
              <div className="card invoices-grid-card w-100">
                <Link to>
                  <div className="card-body">
                    <div className="row align-items-center hospital-card">
                      <div className="col-3">
                        <Link to="#">
                          <ImageBox
                            src={item?.image}
                            alt="Specialisation Image"
                            width="75px"
                            height="100%"
                          />
                        </Link>
                      </div>
                      <div className="col-9 d-flex justify-content-end pe-4">
                        <div className="dropdown">
                          <Link
                            // className="dropdown-toggle"
                            to="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src={three_dots_menu}
                              alt=""
                              width={15}
                              height={15}
                            />
                          </Link>
                          <div className="dropdown-menu">
          
                            <Link
                              className="dropdown-item"
                              to
                              onClick={() => handleEdit(item?.id)}
                            >
                              <i className="far fa-edit me-2" />
                              Edit
                            </Link>
                            <div className="dropdown-divider" />

                            <Link
                              className="dropdown-item"
                              to="#"
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="fa fa-trash-alt m-r-5"></i> Delete
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <h5 className="service-title">{item.name}</h5>
                        </div>
                      </div>

                      <div className="row mt-2">
                        <div className="col text-secondary align-middle">
                          <p>CREATED AT</p>
                        </div>
                        <div className="col-auto">
                          <h5>{formatToDate(item.createdAt)}</h5>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col text-secondary align-middle">
                          <p>LAST UPDATED</p>
                        </div>
                        <div className="col-auto">
                          <h5>{formatDate(item.updatedAt)}</h5>
                        </div>
                      </div>
                      {/* <div className="row mt-2">
                        <div className="col text-secondary align-middle">
                          <p>DISCOUNTED PRICE</p>
                        </div>
                        <div className="col-auto">
                          <h5>0</h5>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* Edit Specialization Modal */}
      <EditSpecialization
        show={showEdit}
        setShow={setShowEdit}
        specialisation={specialisation}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDelete
        show={showDelete}
        setShow={setShowDelete}
        title="Delete Specialisation"
        // deleteItem={onDelete}
        id={specialisationId}
        handleDelete={onDelete}
        isLoading={deleteLoading}
      />
    </div>
  );
}
SpecializationList.propTypes = {
  specialisationList: PropTypes.array,
  isLoading: PropTypes.bool,
};
// Export the SpecializationList component as default
export default SpecializationList;
