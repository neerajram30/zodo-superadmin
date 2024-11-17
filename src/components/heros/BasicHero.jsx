import PropTypes from 'prop-types';
import React from 'react'
import { arrow_left } from '../imagepath';
import { useNavigate } from 'react-router-dom';

function BasicHero(props) {
    const { title } = props;
    const navigate = useNavigate();
  return (
    <div className="card-box profile-header mb-4 mt-3">
      <h5>
        <span onClick={() => navigate(-1)}>
          <img src={arrow_left} alt="" />
        </span>
        <span className="ms-2">{title}</span>
      </h5>
    </div>
  )
}

BasicHero.propTypes = {
    title: PropTypes.node,
  };

export default BasicHero