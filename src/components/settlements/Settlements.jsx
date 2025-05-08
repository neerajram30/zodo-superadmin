import PropTypes from "prop-types";

function Settlements(props) {
  const { tabData } = props;
  return (
    <div className="tab-content mt-1">
      {tabData.map((tabItem, i) => (
        <div
          className={`tab-pane ${i == 0 ? "show active" : ""}`}
          id={tabItem.id}
          key={tabItem.id + i}
        >
          {tabItem.content}
        </div>
      ))}
    </div>
  );
}
Settlements.propTypes = {
  tabData: PropTypes.array,
};

export default Settlements;
