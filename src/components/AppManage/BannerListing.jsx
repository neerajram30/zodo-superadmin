import { Link } from "react-router-dom";
import { useGetBanner } from "../../hooks/appmanage/useGetBanner";
import CenteredModal from "../modals/CenteredModal";
import { useState } from "react";
import BannerEditForm from "./BannerEditForm";
import ConfirmDelete from "../modals/ConfirmDelete";
import { useDeleteBanner } from "../../hooks/appmanage/useDeleteBanner";
function BannerListing() {
  const { data, isLoading } = useGetBanner();
  const [showEdit, setShowedit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [bannerId, setBannerId] = useState("");
  console.log(isLoading);
  const handleClose = () => {
    setShowedit(false);
  };
  const handelEditClick = (id) => {
    setShowedit(true);
    setBannerId(id);
  };
  const { mutate, isLoading: deleteLoading } = useDeleteBanner();
  const handleDeleteClick = (id) => {
    setShowDelete(true);
    setBannerId(id);
  };
  const handelDelete = async () => {
    await mutate(bannerId, {
      onSuccess: () => {
        setShowDelete(false);
      },
    });
  };
  return (
    <div className="row mt-2">
      {data?.map((item) => (
        <div className="col-sm-6 col-md-6 col-xl-4" key={item.id}>
          <div className="blog grid-blog">
            <div className="blog-image">
              <Link to>
                <img className="img-fluid" src={item.image} alt="#" />
              </Link>
              {/* <ul className="nav view-blog-list blog-views">
                <li>
                  <i className="feather-message-square me-1" />
                  <FeatherIcon icon="message-square" />
                  58
                </li>
                <li>
                  <i className="feather-eye me-1" />
                  <FeatherIcon icon="eye" />
                  500
                </li>
              </ul> */}
            </div>
            <div className="blog-content">
              {/* <div className="blog-grp-blk">
                <div className="blog-img-blk">
                  <Link to="/blog">
                    <img className="img-fluid" src={blogimg2} alt="#" />
                  </Link>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <Link to="profile.html">Jenifer Robinson</Link>
                    </h4>
                    <h5>M.B.B.S, Diabetologist</h5>
                  </div>
                </div>
                <span>
                  <i className="feather-calendar me-1" />
                  05 Sep 2022
                </span>
              </div> */}
              <div className="d-flex">
                <h3 className="blog-title pe-2">
                  <Link to="/blog">{item.title}</Link>
                </h3>
                <div>
                  <div className="dropdown dropdown-action">
                    <Link
                      to="#"
                      className="action-icon dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link
                        className="dropdown-item"
                        onClick={() => handelEditClick(item?.id)}
                      >
                        <i className="fa-solid fa-pen-to-square m-r-5" /> Edit
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        // data-bs-toggle="modal"
                        data-bs-target="#delete_patient"
                        onClick={() => handleDeleteClick(item?.id)}
                      >
                        <i className="fa fa-trash-alt m-r-5"></i> Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <p>{item.description}</p>
              {/* <Link to="/blog" className="read-more d-flex">
                {" "}
                Read more in 8 Minutes
                <i className="fa fa-long-arrow-right ms-2" />
              </Link> */}
            </div>
          </div>
        </div>
      ))}
      <ConfirmDelete
        show={showDelete}
        setShow={setShowDelete}
        title="Delete banner"
        isLoading={deleteLoading}
        handleDelete={handelDelete}
      />

      <CenteredModal
        show={showEdit}
        handleClose={handleClose}
        title="Edit banner"
      >
        <BannerEditForm bannerId={bannerId} handleClose={handleClose} />
      </CenteredModal>
    </div>
  );
}

export default BannerListing;
