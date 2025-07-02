import { useState } from "react";
import { useGetUsers } from "../../../hooks/users/useGetusers";
import Breadcrumb from "../../breadcrump/Breadcrumb";
import Layout from "../../layout/Layout";
import UserTable from "../../User/UserTable";
import BasicSearchHero from "../../heros/BasicSearchHero";

function UserManage() {
  const [searchTerm,setSearchterm] = useState("");
  const query =  searchTerm ? `&name=${searchTerm}` : ""
  const { data , isLoading } = useGetUsers(query);
  console.log("USER LIST ",data, isLoading);
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
  const handleSearch = (term) => {
    // logic
    // setSearchterm(term)
    console.log(term);
    setSearchterm(term);
    
  };
  return (
    <Layout activeClassName="manage-users">
      <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData} />
          <div className="mt-3">

          <BasicSearchHero
            handleShow={handleShow}
            title="All Users"
            handleSearchterm={handleSearch}
            buttonTitle="Add User"
            />
            </div>
          <UserTable usersList={data} isLoading={isLoading} />
        </div>
      </div>
    </Layout>
  );
}

export default UserManage;
