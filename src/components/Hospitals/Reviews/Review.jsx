import { bin_icon_red, three_dots_menu, user_profile_1 } from "../../imagepath";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ComponentLoader from "../../loadings/ComponentLoader";
import ConfirmDelete from "../../modals/ConfirmDelete";
import { useState } from "react";
import { useDeleteReview } from "../../../hooks/review/useDeleteReview";

function Review(props) {
  const { reviews, isLoading } = props;
  console.log("Reviews", reviews);

  const [show, setShow] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const { mutate, isLoading: deleteLoading } = useDeleteReview(selectedReview);
  const handleDeleteClick = (review) => {
    setSelectedReview(review);
    setShow(true);
  };

  const handleDelete = async () => {
    if (selectedReview) {
      await mutate(selectedReview, {
        onSuccess: () => {
          setShow(false);
        },
      });
    }
  };

  return (
    <div className="row mt-3 tab-list">
      {!isLoading ? (
        <>
          {reviews.length > 0 ? (
            <div className="row">
              {reviews.map((review) => {
                return (
                  <div
                    className="col-md-6 col-sm-6 col-lg-4 col-xl-4"
                    key={review.id}
                  >
                    <div className="dash-widget review-card">
                      <div className="dash-content dash-count flex-grow-1">
                        <div className="row">
                          <div className="col-2 mt-1">
                            <img src={user_profile_1} alt="profile_picture" />
                          </div>
                          <div className="col-9 mt-2">
                            <p>
                              {review?.user?.first_name +
                                " " +
                                (review?.user?.last_name ?? "")}
                            </p>
                            <div>
                              {[...Array(5)].map((_, index) => (
                                <i
                                  key={index}
                                  className={`fa fa-star ${
                                    index < parseInt(review.rating) ? "active" : ""
                                  }`}
                                ></i>
                              ))}
                            </div>
                          </div>
                          <div className="col mt-2">
                            <div className="dropdown position-relative">
                              <Link
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                id="customdropdown"
                              >
                                <img src={three_dots_menu} alt="" />
                              </Link>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="customdropdown"
                                style={{ zIndex: 1050 }}
                              >
                                <Link
                                  className="dropdown-item d-flex"
                                  to=""
                                  style={{ zIndex: 1050 }}
                                  onClick={() => handleDeleteClick(review.id)}
                                >
                                  <img
                                    src={bin_icon_red}
                                    alt="delete"
                                    className="me-2 ms-1"
                                    width={16}
                                    height={16}
                                  />
                                  <span className="text-danger ps-1">
                                    Delete
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-description pt-3 pb-3">
                          <p>{review.review_note}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center pt-5 pb-5 text-secondary">
              <small>No reviews found</small>
            </div>
          )}
        </>
      ) : (
        <ComponentLoader />
      )}
      <ConfirmDelete
        show={show}
        setShow={setShow}
        title="Review"
        handleDelete={handleDelete}
        isLoading={deleteLoading}
      />
    </div>
  );
}

Review.propTypes = {
  reviews: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Review;
