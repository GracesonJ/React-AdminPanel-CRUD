import React from 'react'
import { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
       setSidebarCollapsed(!sidebarCollapsed);
    };
  return (
    <>
        <div className="wrapper bg-black">
            <div>
                <button className="btn text-primary" onClick={toggleSidebar} >
                <i class="fa-solid fa-list fs-3"></i> 
                </button>
                <div id="sidebar" className={sidebarCollapsed ? 'collapsed' : ''}>
                    {/* Sidebar content goes here */}
                    <aside id="sidebar">
                        <div className="m-2">
                        <Link to={'/admindashboard'}>Admin Dashboard</Link>
                        </div>
                        <div className="m-2">
                        <Link to={'/addstudents'}>Add Students</Link>
                        </div>
                        <div className="m-2">
                        <Link to={'/studentdetails'}>Students Details</Link>
                        </div>
                        
                    </aside>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar