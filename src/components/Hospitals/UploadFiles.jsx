import Dropzone from "react-dropzone";
import { useUploadFile } from "../../hooks/useUploadFile";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import ComponentLoader from "../loadings/ComponentLoader";
import { cross_icon, pdf_icon } from "../imagepath";
import { Link } from "react-router-dom";
import { useRemoveDocuments } from "../../hooks/useRemoveDocument";

function UploadFiles(props) {
  const { fileDetails, setFileDetails } = props;
  const { mutate: removeDocument, isLoading: removeLoading } =
    useRemoveDocuments();
  // const [fileurl, setFileurl] = useState("");
  // const [loading, setLoading] = useState(false);

  const { mutate: uploadDocument, isLoading: documentLoading } =
    useUploadFile();
  const handleFile = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    // setLoading(true);
    try {
      const response = await uploadDocument(formData, {
        onSuccess: () => {
          const message = "File uploaded successfully";
          toast.success(message);
          // setLoading(false);
        },
      });
      // setLoading(false);
      // setFilepreview(response?.data?.url);
      // console.log(response);

      // handleFileKey(response?.data?.key);
      setFileDetails({
        name: response?.data?.filename,
        file: response?.data?.key,
      });
    } catch (error) {
      // handleFileKey("");
      // setFilepreview(null);
      // setFile(null);
      // setLoading(false);
      setFileDetails(null);
      const message = "File uploaded failed";
      toast.error(message);
    }
  };
  const clearFile = (id) => {
    const data = { fileId: id };
    removeDocument(data, {
      onSuccess: () => {
        setFileDetails(null);
        // handleFileKey("");
      },
    });
  };
  console.log("File details", fileDetails);

  return (
    <Dropzone onDrop={handleFile}>
      {({ getRootProps, getInputProps }) => (
        <section className="hospital-file-upload">
          {!documentLoading || removeLoading ? (
            !fileDetails?.name ? (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="pt-2">
                  Drag and Drop to Upload or{" "}
                  <span className="text-primary">Browse </span>
                </p>
              </div>
            ) : (
              <div className="d-flex justify-content-center w-75">
                {/* <div className="d-flex align-items-center justify-content-center"> */}
                <div className="d-flex border border-success bg-white position-relative">
                  <div className="pdf-btn">
                    <img src={pdf_icon} alt="pdf_icon" />
                  </div>
                  <div className="preview-file-text">
                    <h6>{fileDetails?.name}</h6>
                  </div>
                  <Link
                    to="#"
                    className="btn-icon logo-hide-btn position-absolute upload-close-btn"
                  >
                    <i
                      className="feather-x-circle crossmark"
                      onClick={() => clearFile(fileDetails.file)}
                    >
                      <FeatherIcon icon="x-circle" />
                    </i>
                  </Link>
                </div>
                {/* </div> */}
                {/* <div className="d-flex align-items-center w-100">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={pdf_icon} alt="pdf_icon" />
                    <div className="d-flex flex-column justify-content-center file-details ms-2 upload-document-name">
                      <h6>{fileDetails?.name}</h6>
                    </div>

                    <Link
                      onClick={() => clearFile(fileDetails?.file)}
                      className="ms-2"
                    >
                      <img src={cross_icon} alt="" />
                    </Link>
                  </div>
                </div> */}
              </div>
            )
          ) : (
            <ComponentLoader />
          )}
        </section>
      )}
    </Dropzone>
  );
}
UploadFiles.propTypes = {
  // handleFileKey: PropTypes.func,
  fileDetails: PropTypes.string,
  setFileDetails: PropTypes.func,
};
export default UploadFiles;
