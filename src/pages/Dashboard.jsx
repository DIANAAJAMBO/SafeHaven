import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboardnav from '../components/Dashboardnav'


const Dashboard = () => {
    return (
        <div className='d-flex'>
            <div className='w-auto'>
                <Sidebar/>
            </div>
            <div className='col'>
                <Dashboardnav/>
            </div>
        </div>
    )
}

export default Dashboard