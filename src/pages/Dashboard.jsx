import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboardnav from '../components/Dashboardnav'
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='d-flex'>
            <div className='w-auto'>
                <Sidebar />
            </div>
            <div className='col'>
                <Dashboardnav />
                <div style={{padding:'5%'}}>
                <Outlet />
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard