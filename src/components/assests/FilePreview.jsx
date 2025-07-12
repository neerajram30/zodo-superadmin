import PropTypes from "prop-types";

function FilePreview({ fileURL }) {
  return (
    <div>
      <iframe
        src={fileURL}
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

// props validation
FilePreview.propTypes = {
  fileURL: PropTypes.string,
};

export default FilePreview;
