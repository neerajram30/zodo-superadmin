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

function SpecializationList() {
  // State for selected table rows
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // State to control visibility of edit modal
  const [showEdit, setShowEdit] = useState(false);
  // State to control visibility of delete confirmation modal
  const [showDelete, setShowDelete] = useState(false);
  // State to store the ID of the specialisation being edited or deleted
  const [specialisationId, setSpecialisationId] = useState(null);
  // Fetch specialisation list data and loading state from custom hook
  const { data, isLoading } = useSpecialisationList();

  // Fetch delete mutation function and loading state from custom hook
  const {
    mutate,
    isLoading: deleteLoading,
  } = useDeleteSpecialisation();
  console.log("Delete loading", deleteLoading);

  // Get the setter for specialisations from the global store
  const setSpecialisations = useSpecialisations(
    (state) => state.setSpecialisations
  );
  // Update the global store with the fetched data
  setSpecialisations(data);
  // Get the specialisations array from the global store
  const specialisationData = useSpecialisations(
    (state) => state.specialisations
  );
  // State to store the currently selected specialisation for editing
  const [specialisation, setSpecialisation] = useState("");

  // Transform the specialisation data for the table
  const specialisationList = Array.isArray(specialisationData) && specialisationData.map((item) => {
    return {
      id: item.id, // Unique identifier for each row
      specialisationName: item.name, // Name of the specialisation
      createdDate: formatDate(item.createdAt), // Formatted creation date
      lastUpdated: formatDate(item.updatedAt), // Formatted last updated date
    };
  });

  // Handler for row selection changes in the table
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  // Row selection configuration for the table
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // Table columns configuration
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
            {/* Edit button */}
            <button
              className="ms-2 border-0 bg-transparent"
              onClick={() => handleEdit(record.id)}
            >
              <img src={pencil_notebook} key={text} />
            </button>
            {/* Delete button */}
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

  // Handler for edit button click
  const handleEdit = (specialisationId) => {
    console.log(specialisationId);

    // Find the selected specialisation by ID
    const selectedSpecialisation = specialisationData?.find(
      (item) => item.id === specialisationId
    );

    console.log("Selected Specialisation", selectedSpecialisation);

    setSpecialisation(selectedSpecialisation);
    setShowEdit(true);
    // setSpecialisationId(specialisationId);
  };

  // Handler for delete button click
  const handleDelete = (id) => {
    // const specialisationId = specialisation.id;
    // console.log("Selecte specialisation ", id);
    // mutate(id);
    setSpecialisationId(id);
    setShowDelete(true);
  };

  // Handler for confirming deletion
  const onDelete = () => {
    if (specialisationId) {
      mutate(specialisationId);
      setShowDelete(false);
    }
  };
  return (
    <div className="mt-3">
      {/* Ant Design Table for displaying specialisations */}
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
      {/* Edit Specialization Modal */}
      <EditSpecialization
        show={showEdit}
        setShow={setShowEdit}
        specialisation={specialisation}
      />

      {/* Confirm Delete Modal */}
      <ConfirmDelete
        show={showDelete}
        setShow={setShowDelete}
        title="Delete Specialisation"
        deleteItem={onDelete}
        id={specialisationId}
      />
    </div>
  );
}

// Export the SpecializationList component as default
export default SpecializationList;
