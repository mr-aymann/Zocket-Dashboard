import React, { useState,useEffect } from 'react'
import Cards from './Cards';
import "./create.css"
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import Post from './Post';


function Create() {
    const [campaingname, setCampaingname] = useState();
    const [img, setImg] = useState();
    const[product,setProduct]=useState();
    const[location,setLocation]=useState();
    const[platform,setPlatform]=useState();
    const[status,setStatus]=useState();
    const [cid, setCid] = useState();
    const [alignment, setAlignment] = React.useState('web');
    const [start, setStart] = React.useState(dayjs('2022-08-18T21:11:54'));
    const [end, setEnd] = React.useState(dayjs('2022-08-18T21:11:54'));
    const [budget, setBudget] = React.useState(100);


    const submitPost=async(e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:5000/api/campainList",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                campaingname,img,product,location,platform,status,start,end,budget
            })
        });
        const data=await res.json();
        if(res.status===400 || !data){
            window.alert("Invalid Registration");
        }else{
            window.alert("Registration Successful");
        }
        
    }

    const handleClick = () => {
         const id=localStorage.getItem("id");
         console.log(id);
         setCampaingname(rows[id].campaingname);
         setPlatform(rows[id].platform);
         setCid(id);
      }
      const section2=()=>{
        const id=localStorage.getItem("id");
        console.log(id);
        setProduct(cake[id].name);
        setImg(cake[id].Image);
      }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        };
    const handleStartChange = (newDate) => {
        setStart(newDate);
        };
    const handleEndChange = (newDate) => {
        setEnd(newDate);
        };
    const valueBudget = (value) => {
        setBudget(value);
        return `${value}°C`;
      }
      const valueradius = (value) => {
        return `${value}°C`;
      }
     const handlelocation=(e)=>{
            setLocation(e.target.value);
        }

const rows = [
    { campaingname:"Get Leads as Calls" ,desc:"Reach Broader audience and reach through calls",platform:"Facebook"},
    { campaingname:"Get Leads as Facebook" ,desc:"Reach Broader audience and reach through calls",platform:"Facebook"},
    { campaingname:"Increase Page Followers" ,desc:"Reach Broader audience and reach through calls",platform:"Facebook"},
    { campaingname:"Customers Leads" ,desc:"Reach Broader audience and reach through calls",platform:"Google"},
    { campaingname:"Get more youtube views" ,desc:"Reach Broader audience and reach through calls",platform:"Youtube"},
    { campaingname:"Get more website traffic" ,desc:"Reach Broader audience and reach through calls",platform:"Google"},
    { campaingname:"Get Leads as Calls" ,desc:"Reach Broader audience and reach through calls",platform:"Facebook"},
    { campaingname:"Get Leads as Calls" ,desc:"Reach Broader audience and reach through calls",platform:"Youtube"},
    { campaingname:"Get Leads as Calls" ,desc:"Reach Broader audience and reach through calls",platform:"Google"},
]

const cake =[
    {name:"BlueBerry cake",price:"Rs. 500",desc:"BlueBerry cake with fresh cream",Image:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"Chocolate cake",price:"Rs. 500",desc:"Chocolate cake with fresh cream",Image:"https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"Strawberry cake",price:"Rs. 500",desc:"Strawberry cake with fresh cream",Image:"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"BlueBerry cake",price:"Rs. 500",desc:"BlueBerry cake with fresh cream",Image:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"Chocolate cake",price:"Rs. 500",desc:"Chocolate cake with fresh cream",Image:"https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"Strawberry cake",price:"Rs. 500",desc:"Strawberry cake with fresh cream",Image:"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"BlueBerry cake",price:"Rs. 500",desc:"BlueBerry cake with fresh cream",Image:"https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"Chocolate cake",price:"Rs. 500",desc:"Chocolate cake with fresh cream",Image:"https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {name:"Strawberry cake",price:"Rs. 500",desc:"Strawberry cake with fresh cream",Image:"https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},  
]

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 100,
        label: '100',
    },
]

const sliePage= document.querySelector(".slidepage");
const slidePage1= document.querySelector(".slidepage1");
const slidePage2= document.querySelector(".slidepage2");
const form= document.querySelector(".form");
;

const transition1=()=>{
    sliePage.style.marginTop="-100%";
    form.style.height="60vh"
}
const prevtransition1=()=>{
    sliePage.style.marginTop="0%";
    form.style.height="50vh"
}
const nexttranstion2=()=>{
    slidePage1.style.marginTop="-100%";
    form.style.height="100vh"

}
const prevtranstion2=()=>{
    slidePage1.style.marginTop="0%";
    form.style.height="60vh"
}
const nexttranstion3=()=>{
    slidePage2.style.marginTop="-70%";
    form.style.height="50vh"
}

useEffect(() => {
}, [campaingname,platform,cid,start,end,budget])

  return (
    <div>
        <div className='container'>
            <div className='form-outer'>
                <div className='progress'>
                  <div className="step">
                    <p>What You Want to do</p>
                    <div className="bullet"><span>1</span></div>
                    <div className='check'> <CheckIcon/></div>
                 </div>
                  
                  <div className="step"><p>Choose Product</p>
                    <div className="bullet"><span>2</span></div><div className='check'><CheckIcon/></div></div> 
                  <div className="step"><p>Campaign Setting</p>
                    <div className="bullet"><span>3</span></div><div className='check'><CheckIcon/></div></div> 
                  <div className="step"><p>Ready To go</p>
                    <div className="bullet"><span>4</span></div><div className='check'><CheckIcon/></div></div> 
                </div>

                <form method='POST' className='form'> 
                    <div className='campaign-name'>   
                    <div className="page slidepage" onClick={handleClick}>
                        {
                           rows.map((row,i) => (
                            <div classname =" just" id={i}>
                            <Cards  campaingname={row.campaingname} desc={row.desc} id={i+1}   />
                            </div>
                           )) 
                        }
                       <Button  variant="contained" onClick={transition1}>Continue</Button><br/> 
                        </div>  
                        
                    </div>
                   
                        <div className='cake-name'>
                           
                        <div className="page slidepage1" onClick={section2}>
                        {
                            cake.map((row,i) => (
                                <div classname =" just" id={i}>
                                <Cards  campaingname={row.name} desc={row.price} id={i+1} img={ row.Image}  />
                                </div>
                                 ))
                        }
                        
                        </div>
                        <Button variant="contained" onClick={prevtransition1}>Previous</Button>
                         <Button variant="contained" onClick={nexttranstion2}>Continue</Button> 
                    </div>
                   <br/><br/><br/>
                        <div className="page slidepage2" >  
                            <div className="budget">
                                <div className="Header">
                                    <h4>Budges and date info</h4>
                                </div>
                            <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleAlignment}
                                    aria-label="Platform"
                                    >
                                    <ToggleButton value="web">Lifetime</ToggleButton>
                                    <ToggleButton value="android">Daily</ToggleButton>
                            </ToggleButtonGroup>
                            <br/>
                           <div className="dates">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                    label="Start Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={start}
                                    onChange={handleStartChange}
                                    renderInput={(params) => <TextField {...params} />}  />
                            </LocalizationProvider>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                    label="End Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={end}
                                    onChange={handleEndChange}
                                    renderInput={(params) => <TextField {...params} />}  />
                            </LocalizationProvider>
                            </div>
                            
                                <div className='slider-text'>
                                    <p>Set your budget</p>
                                </div>
                            <Slider  step={1000} size ="big"defaultValue={50} aria-label="Default" valueLabelDisplay="auto" min={1000} max ={100000} getAriaValueText={valueBudget} marks={marks} />
                        
                            
                                
                                    <div className="Header">
                                        <h4>Location info</h4></div>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleAlignment}
                                    aria-label="Platform"
                                    >
                                    <ToggleButton value="location">Location</ToggleButton>
                                    <ToggleButton value="radius">radius</ToggleButton>
                            </ToggleButtonGroup>
                            <br/>
                            <div className='location-text'>
                            <TextField id="outlined-basic" label="Location" variant="outlined" onChange={handlelocation}/>   
                             </div>
                             <p>Select Target radius</p>
                             <Slider  step={1} defaultValue={10} aria-label="Default" valueLabelDisplay="auto" min={1} max ={30} getAriaValueText={valueradius}/>
                            
                            
                            <div className='btn'>
                            <Button variant="contained" onClick={prevtranstion2}>Previous</Button>
                             <Button variant="contained" onClick={nexttranstion3}>Continue</Button>
                             </div> 
                    </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/>
                    <div className='post'>
                                <Post img ={cake[0].Image} />
                                <Post img ={cake[1].Image} />
                                <Post img ={cake[2].Image} />
                                <Post img ={cake[3].Image} /></div>
                                <br/><br/><br/>
                                <div className='btn'>
                            <Button variant="contained" onClick={submitPost}>Submit</Button></div>
                    </form>
            </div>
        </div>
       
    </div>
  )
}

export default Create