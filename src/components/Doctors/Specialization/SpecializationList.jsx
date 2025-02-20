import { Table } from "antd";
import React, { useState } from "react";
import { itemRender, onShowSizeChange } from "../../Pagination";
import { formatDate } from "../../configs/formatDate";
import useSpecialisations from "../../../store/useSpecialisations";
import { useSpecialisationList } from "../../../hooks/specialisation/useSpecialisationList";
import { deleteicon, pencil_notebook } from "../../imagepath";
import EditSpecialization from "../../modals/EditSpecialization";
import ConfirmDelete from "../../modals/ConfirmDelete";
import useDeleteSpecialisation from "../../../hooks/specialisation/useDeleteSpecialisation";
import ToastMessage from "../../toast/ToastMessage";
function SpecializationList() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [specialisationId, setSpecialisationId] = useState(null);
  const { data, isLoading, isError } = useSpecialisationList();
  console.log(isError);

  const {
    mutate,
    showToast,
    setShowToast,
    isLoading: deleteLoading,
  } = useDeleteSpecialisation();
  console.log("Show toast ", showToast);
  console.log(deleteLoading);
  console.log(setShowToast);

  const setSpecialisations = useSpecialisations(
    (state) => state.setSpecialisations
  );
  setSpecialisations(data);
  const specialisationData = useSpecialisations(
    (state) => state.specialisations
  );
  const [specialisation, setSpecialisation] = useState("");
  console.log("Specialisation data ", specialisationData);

  const specialisationList = specialisationData?.map((item) => {
    return {
      id: item.id,
      specialisationName: item.name,
      createdDate: formatDate(item.createdAt),
      lastUpdated: formatDate(item.updatedAt),
    };
  });

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = [
    {
      title: "SPECIALISATION NAME",
      dataIndex: "specialisationName",
      sorter: (a, b) =>
        a.specialisationName.length - b.specialisationName.length,
    },
    {
      title: "CREATED DATE",
      dataIndex: "createdDate",
      sorter: (a, b) => a.createdDate.length - b.createdDate.length,
    },
    {
      title: "LAST UPDATED",
      dataIndex: "lastUpdated",
      sorter: (a, b) => a.lastUpdated.length - b.lastUpdated.length,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div className="d-flex">
            <button
              className="ms-2 border-0 bg-transparent"
              onClick={() => handleEdit(record.id)}
            >
              <img src={pencil_notebook} key={text} />
            </button>
            <button
              className="ms-2 border-0 bg-transparent"
              onClick={() => handleDelete(record.id)}
            >
              <img src={deleteicon} key={record.id} />
            </button>
          </div>
        );
      },
    },
  ];

  const handleEdit = (specialisationId) => {
    console.log(specialisationId);

    const selectedSpecialisation = specialisationData?.find(
      (item) => item.id === specialisationId
    );

    console.log("Selected Specialisation", selectedSpecialisation);

    setSpecialisation(selectedSpecialisation);
    setShowEdit(true);
    // setSpecialisationId(specialisationId);
  };

  const handleDelete = (id) => {
    // const specialisationId = specialisation.id;
    // console.log("Selecte specialisation ", id);
    // mutate(id);
    setSpecialisationId(id);
    setShowDelete(true);
  };

  const onDelete = () => {
    if (specialisationId) {
      mutate(specialisationId);
    }
  };
  return (
    <div className="mt-3">
      <Table
        pagination={{
          total: specialisationList?.length,
          showSizeChanger: true,
          // showTotal: (total, range) =>
          //   `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          onShowSizeChange: onShowSizeChange,
          itemRender: itemRender,
        }}
        columns={columns}
        dataSource={specialisationList}
        rowSelection={rowSelection}
        rowKey={(record) => record.id}
        loading={isLoading}
      />
      <EditSpecialization
        show={showEdit}
        setShow={setShowEdit}
        specialisation={specialisation}
      />

      <ConfirmDelete
        show={showDelete}
        setShow={setShowDelete}
        title="Delete Specialisation"
        deleteItem={onDelete}
        id={specialisationId}
      />
      <ToastMessage showToast={showToast} setShowToast={setShowToast} />
    </div>
  );
}

export default SpecializationList;
