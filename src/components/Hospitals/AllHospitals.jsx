import React, { useEffect } from "react";
// import { hospitalDetails } from "../configs/hospitalDetails";
import HospitalCard from "./HospitalCard";
import PropTypes from "prop-types";
import ComponentLoader from "../loadings/ComponentLoader";
import { useInView } from "react-intersection-observer";
import { useGetHospitals } from "../../hooks/hospitals/useGetHospitals";

function AllHospitals(props) {
  const { searchTerm } = props;
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetHospitals(searchTerm);
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
        <>
          {hospitalList?.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-4 d-flex" key={item.id}>
              <HospitalCard hospitalData={item} hospitalId={item?.id} />
            </div>
          ))}
        </>
      ) : (
        <ComponentLoader />
      )}
      <div ref={ref} />
      {isFetchingNextPage && <ComponentLoader />}
    </div>
  );
}

AllHospitals.propTypes = {
  searchTerm: PropTypes.string,
};

export default AllHospitals;
