import Breadcrumb from "../../breadcrump/Breadcrumb";
import ButtonSerchHero from "../../heros/ButtonSerchHero";
import Layout from "../../layout/Layout";
import UserTable from "../../User/UserTable";

function UserManage() {
  //   const { data: usersList, isLoading } = useGetUsers();
  //   console.log("USER LIST ",usersList);
  const breadCrumpData = [
    {
      name: "Manage Users",
      status: "active",
      link: "/user-manage",
    },
  ];

  const handleShow = () => {
    // logic
  };
  const handleSearch = () => {
    // logic
  };
  return (
    <Layout activeClassName="userManage">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="mt-3">

          <ButtonSerchHero
            handleShow={handleShow}
            title="All Users"
            handleSearchterm={handleSearch}
            buttonTitle="Add User"
            />
            </div>
          <UserTable usersList={[]} isLoading={false} />
        </div>
      </div>
    </Layout>
  );
}

export default UserManage;
