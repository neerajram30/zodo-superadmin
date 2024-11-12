import React from 'react'
import Breadcrumb from '../../breadcrump/Breadcrumb'
import Layout from '../../layout/Layout'
import DoctorsList from '../../Doctors/DoctorsList'

function Doctors() {
  const breadCrumpData = [
    {
      name:"Manage",
      status:"inactive"
    },
    {
      name:"Doctors",
      status:"active"
    }
  ]
  return (
    <Layout activeClassName="manage-doctors" id='menu-item3' id1='menu-items3'>
        <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData}/>
          <DoctorsList/>
        </div>
      </div>
    </Layout>
  )
}

export default Doctors