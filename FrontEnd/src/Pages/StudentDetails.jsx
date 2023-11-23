import React from 'react'
import Header from '../Components/Header'
import SideBar from './SideBar'

function StudentDetails() {
  return (
    <>
    <Header insideStudentDetails={true}/>
    <SideBar/>
      <div>StudentDetails</div>
    </>
  )
}

export default StudentDetails