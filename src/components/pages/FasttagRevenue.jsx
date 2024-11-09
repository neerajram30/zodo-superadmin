import React from 'react'
import Layout from '../layout/Layout'
import Breadcrumb from '../breadcrump/Breadcrumb'
import FasttagRevenueHeader from '../FasttagRevenue/FasttagRevenueHeader'
import Analytics from '../Dashboard/Analytics'
import FasttagDetails from '../FasttagRevenue/FasttagDetails'

function FasttagRevenue() {
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
          <FasttagRevenueHeader/>
          <Analytics/>
          <FasttagDetails/>
        </div>
      </div>
    </Layout>
  )
}

export default FasttagRevenue