import { useState } from "react";
import Dropzone from "react-dropzone";
import { useUploadFile } from "../../hooks/useUploadFile";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import ComponentLoader from "../loadings/ComponentLoader";
import { cross_icon, pdf_icon } from "../imagepath";
import { Link } from "react-router-dom";

function UploadFiles(props) {
  const { handleFileKey } = props;
  const [filename, setFilename] = useState(null);
  console.log(handleFileKey);

  // const [fileurl, setFileurl] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadMutation = useUploadFile();
  const handleFile = async (acceptedFiles) => {
    console.log("Accepted file ", acceptedFiles);
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const response = await uploadMutation.mutateAsync(formData, {
        onSuccess: () => {
          const message = "File uploaded successfully";
          toast.success(message);
          setLoading(false);
        },
      });
      setLoading(false);
      // setFilepreview(response?.data?.url);
      handleFileKey(response?.data?.key);
      setFilename(response?.data?.filename);
    } catch (error) {
      handleFileKey("");
      // setFilepreview(null);
      // setFile(null);
      setLoading(false);
      setFilename(null);
      const message = "File uploaded failed";
      toast.error(message);
    }
  };
  const clearFile = ()=>{
    setFilename(null);
    handleFileKey("");
  }
  return (
    <Dropzone onDrop={handleFile}>
      {({ getRootProps, getInputProps }) => (
        <section className="hospital-file-upload">
          {!loading ? (
            !filename ? (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="pt-2">
                  Drag and Drop to Upload or{" "}
                  <span className="text-primary">Browse </span>
                </p>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center w-100">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={pdf_icon} alt="pdf_icon" />
                    <div className="d-flex flex-column justify-content-center file-details ms-2 upload-document-name">
                      <h6>
                        {filename}
                      </h6>
                    </div>

                    <Link onClick={clearFile} className="ms-2">
                      <img src={cross_icon} alt="" />
                    </Link>
                  </div>
                </div>
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
  handleFileKey: PropTypes.func,
};
export default UploadFiles;
