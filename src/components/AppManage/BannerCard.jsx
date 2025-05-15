import PropTypes from "prop-types";
import React from "react";

function BannerCard(props) {
  const { data } = props;
  return (
    <div className="card invoices-grid-card w-100" key={data.id}>
        <div className="card-body p-1">
            <div className="banner-image">
                <img src={data.image} className="img-fluid"/>
            </div>
            <div>
                {data?.title}
            </div> 
        </div>
    </div>
  );
}

BannerCard.propTypes = {
  data: PropTypes.node,
};

export default BannerCard;
