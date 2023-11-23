import React from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'
function AddStudent() {
  return (
    <>
       <Header insideAddStudent={true}/>
      <SideBar/>
      <div>AddStudent</div>
    </>
   
  )
}

export default AddStudent