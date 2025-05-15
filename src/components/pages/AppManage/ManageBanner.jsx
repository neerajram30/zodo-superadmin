import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HeaderTabs from "../../AppManage/HeaderTabs";
import BannerListing from "../../AppManage/BannerListing";

function ManageBanner() {
  const breadCrumpData = [
    {
      name: "Dashboard",
      status: "inactive",
      link: "/dashboard",
    },
    {
      name: "Manage Banner",
      status: "active",
      link: "/app-manage",
    },
  ];
  return (
    <Layout activeClassName="appmanage">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <HeaderTabs/>
          <BannerListing/>
          {/* <BannerForm/>  */}
          {/* <BannerTable/> */}
        </div>
      </div>
    </Layout>
  );
}

export default ManageBanner;
