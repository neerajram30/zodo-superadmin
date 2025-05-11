import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

function TransparentTabs(props) {
  const { tabData } = props;
  const [searchParams] = useSearchParams();
  const tabs = searchParams.get("tab") || tabData[0]?.link;
  return (
    <>
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom border-0">
          {tabData.map((tabItem, i) => (
            <li key={tabItem.id + i} className="pb-2">
              <Link
                className={`nav-link`}
                style={tabs === tabItem.link ? {borderBottom:'2px solid #05A95C'} : {}}
                // to={`#${tabItem.id}`}
                to={`?tab=${tabItem.link}`}
                // data-bs-toggle="tab"
              >
                {tabItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabData.map((tabItem, i) => (
          <div
            className={`tab-pane ${tabs === tabItem.link ? "show active" : ""}`}
            id={tabItem.id}
            key={tabItem.id + i}
          >
            {tabItem.content}
          </div>
        ))}
      </div>
    </>
  );
}

TransparentTabs.propTypes = {
  tabData: PropTypes.node,
};

export default TransparentTabs;
