import { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../InputFields/InputField";
import { useUploadFile } from "../../hooks/useUploadFile";
import { toast } from "react-toastify";
import ComponentLoader from "../loadings/ComponentLoader";
import TextArea from "../InputFields/TextArea";
import PropTypes from "prop-types";
import { useViewBanner } from "../../hooks/appmanage/useViewBanner";
import { useUpdateBanner } from "../../hooks/appmanage/useUpdateBanner";
function BannerEditForm(props) {
  const { bannerId, handleClose } = props;
  console.log("Banner id ", bannerId);

  const { data: viewBanner, isLoading: vieBannerLoading } =
    useViewBanner(bannerId);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileurl, setFileUrl] = useState("");
  const [filekey, setFilekey] = useState("");
  const uploadMutation = useUploadFile();
  const { mutate, isLoading } = useUpdateBanner();
  const methods = useForm();
  useEffect(() => {
    if (viewBanner) {
      setFileUrl(viewBanner?.url);
      setFilekey(viewBanner?.image);
      methods.reset({
        title: viewBanner?.title,
        description: viewBanner?.description,
      });
    }
  }, [viewBanner]);

  const onCreateBanner = (data) => {
    const bannderData = {
      title: data?.title,
      description: data?.description,
      image: filekey,
      url: fileurl,
      // "hospital_id": ""
    };
    mutate({id:bannerId,data:bannderData }, {
      onSuccess: () => {
        methods.reset();
        handleClose();
      }
    });
    console.log(data);
  };
  const handleFile = async (e) => {
    const selecteFile = e.target.files[0];
    setFile(selecteFile);
    const formData = new FormData();
    formData.append("file", selecteFile);
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
      setFileUrl(response.data.url);
      setFilekey(response.data.key);
    } catch (error) {
      setFileUrl("");
      setFilekey("");
      setLoading(false);
      const message = "File uploaded failed";
      toast.error(message);
    }
  };
  const handleCloseFile = () => {
    setFileUrl("");
    setFile(null);
    setFilekey("");
  };
  return (
    <div>
      {!vieBannerLoading ? (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onCreateBanner)}>
            <div className="settings-form">
              <div className="form-group">
                <InputField
                  name="title"
                  label="Banner Title"
                  validation={{ required: "Banner title is required" }}
                  placeholder="Enter banner title"
                  type="text"
                />
              </div>
              <div className="form-group">
                <TextArea
                  name="description"
                  label="Description"
                  placeholder="Write here.."
                />

                {/* <InputField
                      name="link"
                      label="Banner Link"
                      validation={{ required: "Banner link is required" }}
                      placeholder="Enter banner link"
                      type="text"
                    /> */}
              </div>
              <div className="form-group">
                <p className="settings-label">
                  Upload Banner <span className="star-red">*</span>
                </p>
                <div className="settings-btn">
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="file"
                    onChange={handleFile}
                    className="hide-input"
                  />
                  <label htmlFor="file" className="upload">
                    <i className="feather-upload">
                      <FeatherIcon icon="upload" />
                    </i>
                  </label>
                </div>
                <h6 className="settings-size">
                  Recommended image size is <span>150px x 150px</span>
                </h6>

                <>
                  {file || filekey ? (
                    <div
                      className="upload-images upload-banner"
                      // style={{ display: show ? "none" : "" }}
                    >
                      {!loading ? (
                        <div>
                          <img src={fileurl} alt="Image" />
                          <Link to="#" className="btn-icon logo-hide-btn">
                            <i
                              className="feather-x-circle crossmark"
                              onClick={handleCloseFile}
                            >
                              <FeatherIcon icon="x-circle" />
                            </i>
                          </Link>
                        </div>
                      ) : (
                        <ComponentLoader />
                      )}
                    </div>
                  ) : (
                    <div>No file</div>
                  )}
                </>
              </div>
              <div className="form-group mb-0 d-flex justify-content-end">
                <div className="settings-btns">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2 ms-2"
                    disabled={loading}
                  >
                    {isLoading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                    )}
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
}

BannerEditForm.propTypes = {
  bannerId: PropTypes.string,
  handleClose: PropTypes.func
};

export default BannerEditForm;
