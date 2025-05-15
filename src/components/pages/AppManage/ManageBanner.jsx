import Layout from "../../layout/Layout";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import HeaderTabs from "../../AppManage/HeaderTabs";
import BannerForm from "../../AppManage/BannerForm";

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
          <BannerForm/> 
        </div>
      </div>
    </Layout>
  );
}

export default ManageBanner;
