import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

function TransparentTabs(props) {
  const { tabData } = props;
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || tabData[0]?.link;

  const activeTab = tabData.find((tab) => tab.link === currentTab);

  return (
    <>
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom border-0">
          {tabData.map((tabItem, i) => (
            <li key={tabItem.id + i} className="pb-2">
              <Link
                className={`nav-link`}
                style={
                  currentTab === tabItem.link
                    ? { borderBottom: "2px solid #05A95C" }
                    : {}
                }
                to={`?tab=${tabItem.link}`}
              >
                {tabItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {activeTab && (
          <div className="tab-pane show active" id={activeTab.id}>
            {activeTab.content}
          </div>
        )}
      </div>
    </>
  );
}

TransparentTabs.propTypes = {
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default TransparentTabs;
