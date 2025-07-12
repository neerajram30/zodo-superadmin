import { pdf_icon } from "../../imagepath";
import { useParams } from "react-router-dom";
import ConfirmDelete from "../../modals/ConfirmDelete";
import { useDeleteDocument } from "../../../hooks/useDeleteDocument";
import { useState } from "react";
import ComponentLoader from "../../loadings/ComponentLoader";
import { useHospitalDocuments } from "../../../hooks/hospitals/useHospitalDocuments";
import CenteredModal from "../../modals/CenteredModal";
import FilePreview from "../../assests/FilePreview";

function HospitalDocuments() {
  const { id } = useParams();
  const [showDocumentDelete, setShowDocumentdelete] = useState(false);
  const [showDocumentPreview, setShowDocumentPreview] = useState(false);
  const [fileurl,setFileURL] = useState("");
  const [documentId, setDocumentId] = useState("");

  const { data: hospitalDocuments, isLoading: documentLoading } =
    useHospitalDocuments(id);

  const handelDeleteDocumentClick = (e, id) => {
    e.preventDefault();
    setShowDocumentdelete(true);
    setDocumentId(id);
  };

  // const handlePreview = (item)=>{
  //   setShowDocumentPreview(true)
  //   console.log("Document click ",item);
  //   setFileURL(item?.file);
    
  // }

  const { mutate: deleteDocument, isLoading: deleteLoading } =
    useDeleteDocument();

  const handelDeleteDocument = () => {
    // e.preventDefault();
    deleteDocument(documentId, {
      onSuccess: () => {
        setShowDocumentdelete(false);
      },
    });
  };

  const handleClose = ()=>{
    setShowDocumentPreview(false);
    setFileURL("");
  }
  return (
    <div className="row border border-secondary-subtle pt-3 pb-1 ms-1 me-1 mt-3 file-upload-card">
      <div className="row mb-1">
        <div className="col">
          <h5>Uploaded Documents</h5>
        </div>
      </div>
      <div className="mb-4">
        {hospitalDocuments?.length > 0 && (
          <div className="row">
            {!documentLoading ? (
              <div className="mb-4">
                {hospitalDocuments?.map((item, i) => {
                  return (
                    <div className="row mt-2" key={`row${item?.id}`}>
                      <div className="col-12 pt-2 col-md-2">
                        Document {i + 1}
                      </div>
                      <div className="col-12 col-md-10 md:mt-0 mt-1">
                        <div className="d-flex justify-content-between align-items-center file-upload-details ps-3 pe-3">
                          <div className="d-flex align-items-center">
                            <img src={pdf_icon} alt="pdf_icon" />
                            <div className="d-flex flex-column justify-content-center file-details ms-2">
                              <h6>{item.name}</h6>
                              {/* <p>24MB</p> */}
                            </div>
                          </div>
                          <div className="d-flex">
                            <a
                              to
                              className="m-1"
                              href={item.file}
                              target="_blank"
                              rel="noreferrer"
                              title="Preview"
                              // onClick={() => handlePreview(item)}
                            >
                              <i className="far fa-eye text-black me-2" />
                            </a>
                            <a
                              href=""
                              className="m-1"
                              onClick={(e) =>
                                handelDeleteDocumentClick(e, item.id)
                              }
                              title="Delete"
                            >
                              <i className="fa fa-trash-alt text-danger me-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <ComponentLoader />
            )}
          </div>
        )}
      </div>
      <ConfirmDelete
        show={showDocumentDelete}
        setShow={setShowDocumentdelete}
        title="Document"
        handleDelete={handelDeleteDocument}
        isLoading={deleteLoading}
      />
      <CenteredModal show={showDocumentPreview} handleClose={handleClose}>
        <FilePreview fileURL={fileurl} />
      </CenteredModal>
    </div>
  );
}

export default HospitalDocuments;
