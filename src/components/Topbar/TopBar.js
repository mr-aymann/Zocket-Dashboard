import React from 'react'
import "./topbar.css";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate('/');
  }
  return (
    <div>
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" >
            <img src="C:\MyLearnings\web dev\react\zocket\dashboard\src\logo2.svg" alt="" className="logo" onClick={handleClick} />Zocket
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
           <ShoppingCartIcon/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <NotificationsActiveIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
           
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <span>Mukund Cake shop</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopBar