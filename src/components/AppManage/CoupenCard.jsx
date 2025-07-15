import { message } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Copy } from "react-feather";

function CoupenCard({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.coupon_code).then(() => {
      setCopied(true);
      message.success("Coupon code copied!");
      setTimeout(() => setCopied(false), 1500);
    });
  };
  const discountTypeText =
    item.discount_type === "flat" ? "Flat discount" : "Percentage discount";

  const couponMessage = `Get ${discountTypeText ==="flat"? "₹" :"%"} ${parseInt (item.minimum_discount_allowed)} off when you spend ₹${parseInt(item.minimum_cart_amount)} or more.`
  const limitMessage = ` Coupon valid for ${parseInt(item?.usage_limit ?? 0)} redemptions. Individual limit is ${parseInt(item?.usage_limit_per_user ?? 0)} per user. Currently unused is ${parseInt(item?.usage_count)}.`
//   Limit: ${item.usage_limit} total uses (${item.usage_limit_per_user
// } per user).`;
  return (
    <div className="card w-100 p-4" key={item.id}>
      {/* <div className='text-center'>{item.coupon_code}</div> */}
      <div className="d-flex align-items-center justify-content-center">
        <span className="fw-bold me-2 coupen-code">{item.coupon_code}</span>
        <Copy
          size={16}
          style={{ cursor: "pointer" }}
          onClick={handleCopy}
          color={copied ? "#52c41a" : "#333548"}
        />
      </div>
      <div className="mt-3">

      <p>{couponMessage}</p>
      <p className="fst-italic text-secondary" style={{fontSize:'0.85rem'}}>{limitMessage}</p>
      </div>
    </div>
  );
}

CoupenCard.propTypes = {
  item: PropTypes.object,
};

export default CoupenCard;
