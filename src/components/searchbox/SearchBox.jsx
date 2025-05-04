import PropTypes from "prop-types";
import React from "react";

function SearchBox(props) {
  const { onChangeHandler } = props;
  const handleSearchTerm = (e)=>{
    const searchTerm = e.target.value;
    onChangeHandler(searchTerm)
  }
  return (
    <div className="hero-search-container">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className="form-control" placeholder="Search" onChange={handleSearchTerm}/>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  onChangeHandler: PropTypes.node,
};

export default SearchBox;
