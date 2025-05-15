// import React from "react";
import { useGetBanner } from "../../hooks/appmanage/useGetBanner";
import DataTable from "../DataTables/DataTable";

function BannerTable() {
  const { data, isLoading } = useGetBanner();
  console.log("Banner data ", data);
  const columns = [
    {
      title: "Banner",
      dataIndex: "image",
      render: (item) => (
        <div className="table-banner-img">
          <img src={item} className="image-fluid" width={10} height={10} />
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "",
    },
  ];
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-table show-entire">
          <div className="card-body">
            <div className="doctor-list">
              <DataTable data={ data ?? []} columns={ columns ?? []} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
      {/* <ConfirmDelete show={show} setShow={setShow} title="Doctor" /> */}
    </div>
  );
}

export default BannerTable;
