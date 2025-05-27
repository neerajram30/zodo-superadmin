import PropTypes from "prop-types";
import { right_chevron } from "../imagepath";
import ImageBox from "../assests/ImageBox";

function FasttagCard(props) {
  const { hospitalData, hospitalId } = props;
  return (
    <div className="card invoices-grid-card w-100" key={hospitalId}>
      <div>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <ImageBox
                src={hospitalData?.logo}
                alt="Hospital Logo"
                width="75px"
                height="75px"
              />

            </div>
            <div className="col-auto">
              <img src={right_chevron} alt="#" />
            </div>
            <div className="row mt-3">
              <div className="col">
                <h5>{hospitalData.name}</h5>
              </div>
              <div className="col-auto">
                <h5 className="text-primary">{hospitalData?.current}</h5>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col text-secondary align-middle">
                <p>TOTAL FAST TAG</p>
              </div>
              <div className="col-auto">
                <h5>{hospitalData?.fastTag?.count}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FasttagCard.propTypes = {
  hospitalData: PropTypes.node,
  hospitalId: PropTypes.node,
};

export default FasttagCard;
