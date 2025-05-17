import { cross_icon, eye_icon, pdf_icon } from "../../imagepath";
import { useParams } from "react-router-dom";
import ConfirmDelete from "../../modals/ConfirmDelete";
import { useDeleteDocument } from "../../../hooks/useDeleteDocument";
import { useState } from "react";
import ComponentLoader from "../../loadings/ComponentLoader";
import { useHospitalDocuments } from "../../../hooks/hospitals/useHospitalDocuments";

function HospitalDocuments() {
  const { id } = useParams();
  const [showDocumentDelete, setShowDocumentdelete] = useState(false);
  const [documentId, setDocumentId] = useState("");

  const { data: hospitalDocuments, isLoading: documentLoading } =
    useHospitalDocuments(id);

  const handelDeleteDocumentClick = (e,id) => {
    e.preventDefault();
    setShowDocumentdelete(true);
    setDocumentId(id);
  };

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
                              className="m-1"
                              href={`${item?.file}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={eye_icon} alt="" />
                            </a>
                            <a
                              href=""
                              className="m-1"
                              onClick={(e) => handelDeleteDocumentClick(e,item.id)}
                            >
                              <img src={cross_icon} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <ComponentLoader/>
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
    </div>
  );
}

export default HospitalDocuments;
