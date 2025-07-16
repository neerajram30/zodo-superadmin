import { message } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { Copy } from "react-feather";
import { Link } from "react-router-dom";
import CenteredModal from "../modals/CenteredModal";
import EditCoupen from "./EditCoupen";
import ConfirmDelete from "../modals/ConfirmDelete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCoupen } from "../../apis/appmanage";
import { toast } from "react-toastify";
function getCouponExpiryText(expiryDateISO) {
  const expiry = new Date(expiryDateISO);
  const now = new Date();

  const isToday =
    expiry.getDate() === now.getDate() &&
    expiry.getMonth() === now.getMonth() &&
    expiry.getFullYear() === now.getFullYear();

  const options = { hour: "numeric", minute: "2-digit", hour12: true };
  const timeStr = expiry.toLocaleTimeString(undefined, options); // local time

  if (isToday) {
    return `Coupon expires today at ${timeStr}`;
  }

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const dateStr = expiry.toLocaleDateString(undefined, dateOptions);

  return `Coupon expires on ${dateStr} at ${timeStr}`;
}

function CoupenCard({ coupen }) {
  const queryClient = useQueryClient();
  const [copied, setCopied] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(coupen.coupon_code).then(() => {
      setCopied(true);
      message.success("Coupon code copied!");
      setTimeout(() => setCopied(false), 1500);
    });
  };
  const discountTypeText =
    coupen?.discount_type === "flat" ? "Flat discount" : "Percentage discount";

  const couponMessage = `Get ${
    discountTypeText === "flat" ? "₹" : "%"
  } ${parseInt(
    coupen?.minimum_discount_allowed ?? 0
  )} off when you spend ₹${parseInt(
    coupen?.minimum_cart_amount ?? 0
  )} or more.`;
  const limitMessage = ` Coupon valid for ${parseInt(
    coupen?.usage_limit ?? 0
  )} redemptions. Individual limit is ${parseInt(
    coupen?.usage_limit_per_user ?? 0
  )} per user. Currently unused is ${parseInt(coupen?.usage_count ?? 0)}.`;
  //   Limit: ${coupen.usage_limit} total uses (${coupen.usage_limit_per_user
  // } per user).`;
  const expiryText = getCouponExpiryText(coupen?.valid_untill);
  const handleClose = () => {
    setShowEdit(false);
  };

  const mutation = useMutation({
    mutationFn: deleteCoupen, // API function to create
  });

  const handleDelete = () => {
    const coupenId = coupen?.id;
    mutation.mutateAsync(coupenId, {
      onSuccess: () => {
        setShowDelete(false);
        const message = "Coupen deleted successfully";
        toast.success(message);
        queryClient.invalidateQueries(["coupens"]);
      },
      onError: (error) => {
        setShowDelete(false);
        const errorMessage =
          error?.response?.data?.validationErrors ||
          error?.response?.data?.message ||
          "Failed to delete coupen";
        toast.error(errorMessage);
        queryClient.invalidateQueries(["coupens"]);
      },
    });
  };
  const loading = mutation.isIdle;
  return (
    <div className="card w-100 p-4" key={coupen.id}>
      {/* <div className='text-center'>{coupen.coupon_code}</div> */}
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
          <Link className="dropdown-item" onClick={() => setShowEdit(true)}>
            <i className="fa fa-edit me-1" /> Edit
            {/* <i className="fa fa-pencil-square" ></i> Edit */}
          </Link>
          <Link
            className="dropdown-item text-danger"
            to="#"
            // data-bs-toggle="modal"
            data-bs-target="#delete_patient"
            onClick={() => setShowDelete(true)}
          >
            <i className="fa fa-trash-alt m-r-5 text-danger"></i> Delete
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <span className="fw-bold me-2 coupen-code">{coupen?.coupon_code}</span>
        <Copy
          size={16}
          style={{ cursor: "pointer" }}
          onClick={handleCopy}
          color={copied ? "#52c41a" : "#333548"}
        />
      </div>

      <div className="mt-3">
        <p>{couponMessage}</p>
        <p
          className="fst-italic text-secondary"
          style={{ fontSize: "0.85rem" }}
        >
          {limitMessage}
        </p>

        <p
          className="fst-italic text-danger"
          style={{ fontSize: "0.85rem" }}
        >
          {expiryText}
        </p>
      </div>

      <CenteredModal
        show={showEdit}
        handleClose={handleClose}
        title="Edit Coupen"
      >
        <EditCoupen handleClose={handleClose} coupen={coupen} />
      </CenteredModal>

      <ConfirmDelete
        show={showDelete}
        setShow={setShowDelete}
        title="Coupen"
        handleDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  );
}

CoupenCard.propTypes = {
  coupen: PropTypes.object,
};

export default CoupenCard;
