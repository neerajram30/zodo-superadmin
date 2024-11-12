import React from 'react'
import Breadcrumb from '../../breadcrump/Breadcrumb'
import Layout from '../../layout/Layout'

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
        </div>
      </div>
    </Layout>
  )
}

export default Doctors