import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import AdminListings from './AdminListings'
import SellerList from './SellerList'
import UserList from './UserList'

function AdminDashboard() {
  return (
    <Tabs
    defaultActiveKey="profile"
    id="justify-tab-example"
    className="mb-3"
    justify
  >
    <Tab eventKey="home" title="Buyers">
      <UserList/>
    </Tab>
    <Tab eventKey="profile" title="Listings">
     <AdminListings/>
    </Tab>
    <Tab eventKey="longer-tab" title="Sellers">
      <SellerList/>
    </Tab>
  </Tabs>  )
}

export default AdminDashboard