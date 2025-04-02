import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import FileUploadModal from '../Modal';
const NavBar = () => {
    return (
        <> 
        <nav className='navbar flex flex-row'>
            <h1>Smart Watch Activity</h1>
            <ul className='flex flex-row'>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><FileUploadModal/></li>
               
            </ul>
            <div>
            <Icon className='setting_icon' icon="line-md:cog-filled-loop" width="24" height="24" />
            </div>
            
        </nav>
        <div className="border-bottom"></div>
        </>
    );
};

export default NavBar;