import { DatePicker } from "antd";
import PropTypes from "prop-types";
import ExportSettlementTable from "../assests/ExportSettlementTable";
const { RangePicker } = DatePicker;

function DateSearchHero(props) {
  const { handleDate, query, type } = props;
  //   const [show, setShow] = useState(false);
  // const [searchTerm, setSearchterm] = useState("");
  // const debouncedSearchTerm = useDebounce(searchTerm);
  // useEffect(() => {
  //   if (handleSearch) {
  //     handleSearch(debouncedSearchTerm);
  //   }
  // }, [debouncedSearchTerm]);

  // const handleSearchInput = (searchTerm) => {
  //   setSearchterm(searchTerm);
  // };

  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6 col-xl-4">
        <div className="form-group local-forms">
          <RangePicker
            format="DD/MM/YYYY"
            onChange={(date) => handleDate(date)}
            className="range-picker form-control d-flex datetimepicker"
            allowClear
          />
        </div>
      </div>

      <div className="col-12 col-md-6 col-xl-3">
        {type === "settlement" && <ExportSettlementTable query={query}/>}
        {/* <ExportTable /> */}
      </div>
    </div>
  );
}

// validate props
DateSearchHero.propTypes = {
  handleDate: PropTypes.func.isRequired,
  type: PropTypes.string,
  query: PropTypes.string,
};

export default DateSearchHero;
