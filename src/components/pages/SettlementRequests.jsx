import React from 'react'
import Layout from '../layout/Layout'
import Breadcrumb from '../breadcrump/Breadcrumb'
import BasicHero from '../heros/BasicHero'
import SettlementList from '../settlements/SettlementList'

function SettlementRequests() {
    const breadCrumpData = [
        {
          name:"Dashboard",
          status:"inactive"
        },
        {
          name:"Fasttag Revenue",
          status:"active"
        }
      ]
  return (
    <Layout activeClassName="dashboard">
        <div className="page-wrapper">
        <div className="content">
          <Breadcrumb data={breadCrumpData}/>
          <BasicHero title="Settlement Requests"/>
          <SettlementList/>
        </div>
      </div>
    </Layout>
  )
}

export default SettlementRequests