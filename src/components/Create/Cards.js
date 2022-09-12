import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import "./cards.css"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

 

function Cards( {campaingname,desc,id,img}) {
   
  const handleSelect = () => {
    localStorage.setItem("id",id); 
    <CheckCircleRoundedIcon></CheckCircleRoundedIcon>   
  }
 const Image= img || "https://rvs-order-summary-component.netlify.app/images/icon-music.svg";

  return (
    <div className='container'>
      
         <div class="card-plan">
                    <div class="card-plan-img"><img src= {Image}  height ="40" width ="40"alt=""/></div>
                    <div class="card-plan-text">
                        <div class="card-plan-title">{campaingname}</div>
                        <div class="card-plan-price">{desc}</div>
                    </div>
                    <div class="card-plan-link">
                        <IconButton aria-label="check" onClick={handleSelect} >{
                          localStorage.getItem("id")===id ? <CheckCircleRoundedIcon color='primary'/> : <CheckCircleOutlineOutlinedIcon/>
                        }
                        </IconButton>
                    </div>
                    
           </div>
  
    </div>
  )
}

export default Cards