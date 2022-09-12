import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          
          <li className="sidebarListItem ">
            <HomeIcon className="sidebarIcon" />
            Home
          </li>
         
          <li className="sidebarListItem active ">
            <CampaignIcon className="sidebarIcon" />
            Campaing
          </li>
          <li className="sidebarListItem">
            <Inventory2Icon className="sidebarIcon" />
            Products
          </li>
        </ul>
      </div> 
    </div>
  </div>
  )
}

export default Sidebar