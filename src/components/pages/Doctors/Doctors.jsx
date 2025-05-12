import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import DoctorsList from "../../Doctors/DoctorsList";
import DoctorRequests from "../../Doctors/DoctorRequests";
import TransparentTabs from "../../tabs/TransparentTabs";

function Doctors() {
  const breadCrumpData = [
    {
      name: "Doctors",
      status: "active",
      link: "/manage-doctors",
    },
  ];
  const tabData = [
    { id: "dr_list", title: "All Doctors", content: <DoctorsList />,link:'all' },
    {
      id: "dr_request",
      title: "Doctor Requests",
      content: <DoctorRequests />,
      link:'requests'
    },
  ];


  
  return (
    <Layout activeClassName="manage-doctors" id="menu-item3" id1="menu-items3">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="card-box mt-3">
            {/* <div className="profile-tabs">
              <ul className="nav nav-tabs nav-tabs-bottom">
                {tabData.map((tabItem, i) => (
                  <li key={tabItem.id + i}>
                    <Link
                      className={`nav-link ${i == 0 ? "active" : ""}`}
                      to={`#${tabItem.id}`}
                      data-bs-toggle="tab"
                    >
                      {tabItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {tabData.map((tabItem, i) => (
                  <Link
                    className={`tab-pane ${i == 0 ? "show active" : ""}`}
                    id={tabItem.id}
                    key={tabItem.id + i}
                  >
                    {tabItem.content}
                  </Link>
                ))}
              </div>
            </div> */}
            <TransparentTabs tabData={tabData}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Doctors;
