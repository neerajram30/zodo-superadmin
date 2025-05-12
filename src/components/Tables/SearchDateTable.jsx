import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Table } from "antd";
import DateSearchHero from "../heros/DateSearchHero";
import { bin_icon_red } from "../imagepath";
import { itemRender, onShowSizeChange } from "../Pagination";

function SearchDateTable(props) {
  const { data, isLoading, handelQuery, columns, title, setSelecteditemsList } =
    props;
  const [selectedItems, setSelectedItems] = useState(null);
  console.log(selectedItems);
  const [searchTerm, setsearchTerm] = useState("");
  const [date, setdate] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    handleSelection(newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelecteditemsList(newSelectedRowKeys);
  };
  const query =
    (searchTerm &&
      date &&
      `name=${searchTerm}&from_date=${date.startDate}&to_date=${date.endDate}`) ||
    (searchTerm && `name=${searchTerm}`) ||
    (date && `from_date=${date.startDate}&to_date=${date.endDate}`) ||
    "";
  const handleDate = (date) => {
    setdate(date);
  };

  const handleSearch = (term) => {
    setsearchTerm(term);
  };
  const handleSelection = (items) => {
    setSelectedItems(items);
  };

  useEffect(() => {
    handelQuery(query);
  }, [query]);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="card-box">
      <h5>{title}</h5>
      <DateSearchHero handleDate={handleDate} handleSearch={handleSearch} />
      <div>
        {data?.length ? (
          <h5>
            {data?.length + " results found"}
            {selectedRowKeys.length > 0 && (
              <span className="delete-badge status-red ms-1">
                <img
                  src={bin_icon_red}
                  alt="delete"
                  className="dropdown-menu-icon"
                  width={15}
                  height={15}
                />
                <span className="mt-5 ps-2">CLEAR</span>
              </span>
            )}
          </h5>
        ) : null}
      </div>
      <div className="table-responsive">
        <Table
          pagination={{
            total: data?.length,
            showSizeChanger: true,
            onShowSizeChange: onShowSizeChange,
            itemRender: itemRender,
          }}
          columns={columns}
          dataSource={data ?? []}
          rowSelection={rowSelection}
          rowKey={(record) => record.id}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

SearchDateTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  isLoading: PropTypes.bool,
  handelQuery: PropTypes.func,
  title: PropTypes.string,
  setSelecteditemsList: PropTypes.func,
};

export default SearchDateTable;
