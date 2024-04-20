import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import logo from '../assets/safehavenlogo.png'
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [active, setActive] = useState(1);
    return (
        <div className='sidebar d-flex justify-content-between flex-column text-black py-3 ps-3 pe-5 vh-100' style={{ backgroundColor: 'rgba(244, 97, 136, 0.1)' }}>
            <div>
                <div>
                    <a href='' className='p-3'>
                        <img src={logo} style={{ height: '40px', width: '100px' }} />
                    </a>
                </div>
                <div>
                    <ul className='nav nav-pills flex-column mt-5'>
                        <li className={active === 1 ? 'active nav-item p-2 mb-3 ' : "nav-item p-2 mb-3"} onClick={e => setActive(1)}>
                            <Link to='/dashboard' className='p-1'>
                                <MdSpaceDashboard size={25} className='me-3 ' />
                                <span className='fs-5'><strong>Overview</strong></span>
                            </Link>
                        </li>
                        <li className={active === 2 ? 'active nav-item p-2 mb-3' : "nav-item p-2 mb-3"} onClick={e => setActive(2)}>
                            <Link to='/dashboard/usermanagement' className='p-1'>
                                <AiOutlineUser size={25} className='me-3' />
                                <span className='fs-5' ><strong>User management</strong></span>
                            </Link>
                        </li>
                        <li className={active === 3 ? 'active nav-item p-2 mb-3' : "nav-item p-2 mb-3"} onClick={e => setActive(3)}>
                            <Link to='/dashboard/contacts' className='p-1'>
                                <BsTelephone size={20} className='me-3' />
                                <span className='fs-5' ><strong>Contacts</strong></span>
                            </Link>
                        </li>
                        <li className={active === 4 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(4)}>
                            <Link to='/dashboard/cases' className='p-1'>
                                <TbReportAnalytics size={20} className='me-3' />
                                <span className='fs-5' ><strong>Cases</strong></span>
                            </Link>
                        </li>
                        <li className='nav-item p-2 mt-5 ' >
                            <Link className='p-1'>
                                <FiLogOut size={20} className='me-3' />
                                <span className='fs-5' ><strong>Log Out</strong></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Sidebar