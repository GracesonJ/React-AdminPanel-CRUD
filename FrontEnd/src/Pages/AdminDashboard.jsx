import React from 'react'
import Header from '../Components/Header'
import SideBar from './SideBar'
function AdminDashboard() {
  return (
    <>
    <Header insideDashboard={true}/>
    <SideBar/>
    </>
  )
}

export default AdminDashboard