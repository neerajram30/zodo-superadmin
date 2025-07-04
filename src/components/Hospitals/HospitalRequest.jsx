import React, { useEffect } from "react";
import HospitalRequestCard from "./HospitalRequestCard";
import PropTypes from "prop-types";
import ComponentLoader from "../loadings/ComponentLoader";
import { useInView } from "react-intersection-observer";
import { useGetHospitals } from "../../hooks/hospitals/useGetHospitals";

function HospitalRequest(props) {
  const { searchTerm, status } = props;

  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetHospitals(searchTerm, status);
  // const hospitalList = []
  const hospitalList =
    data?.pages.flatMap((page) => page?.data?.data || []) || [];

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div className="row mt-2">
      {!isLoading ? (
        hospitalList?.length > 0 ? (
          <>
            {hospitalList?.map((item) => (
              <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
                <HospitalRequestCard hospitalData={item} />
              </div>
            ))}
          </>
        ) : (
          <div className="no-content-box">
            <p>No Hospitals Found</p>
          </div>
        )
      ) : (
        <div className="no-content-box">
          <ComponentLoader />
        </div>
      )}
      <div ref={ref} />
      {isFetchingNextPage && <ComponentLoader />}
    </div>
  );
}

HospitalRequest.propTypes = {
  searchTerm: PropTypes.string,
  status: PropTypes.string,
};

export default HospitalRequest;
