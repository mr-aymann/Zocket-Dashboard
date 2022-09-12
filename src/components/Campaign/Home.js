import React,{useState,useEffect} from "react";
import "./home.css";
import Button from '@mui/material/Button';
import DashTable from './DashTable'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {
    const [search, setSearch] = React.useState('');
    const [platform,setPlatform]=useState('');
    const [status,setStatus]=useState('');
    const[date,setDate]=useState('');
    
    const navigate = useNavigate();

    const handlePlatform = (event) => {
      setPlatform(event.target.value);
    };
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
    const createPage = () => {
      navigate("/create");
  }
    const handleStatus = (event) => {
      setStatus(event.target.value);
    };
    const handleDate = (event) => {
      setDate(event.target.value);
    };
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:5000/api/find")
        .then((res) => {
           setDatas(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        }
        )
    }
    fetchData();
  }, []);


  return (
    <div className="home">
    <div className='container-campain'>
    <div className="header">
        Your Campaings
    </div>
    <Button className='button' variant="contained" onClick={createPage}>Create New Campaign</Button>
    </div>
    <div  className ="forms" >
      <div className='nav-header'>
        <div className='search'>
        <TextField id="outlined-search" label="Search field" type="search" onClick={handleSearch} />
        </div>
        <div className='dropdown'>
        <FormControl sx={{ m: 5, minWidth: 200 }} >
        <InputLabel id="demo-simple-select-label">Platform</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={platform}
          label="Age"
          onChange={handlePlatform}
        >
          <MenuItem value={10}>Facebook</MenuItem>
          <MenuItem value={20}>Instagram</MenuItem>
          <MenuItem value={30}>Youtube</MenuItem>
          <MenuItem value={30}>Google</MenuItem>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 5, minWidth: 200 }} >
        <InputLabel id="demo-simple-select-label">All Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          onChange={handleStatus}
        >
          <MenuItem value={10}>Live Now</MenuItem>
          <MenuItem value={20}>Paused</MenuItem>
          <MenuItem value={30}>Exhausted</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 5, minWidth: 200 }} >
        <InputLabel id="demo-simple-select-label">Last 30 days</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={date}
          label="Age"
          onChange={handleDate}
        >
          <MenuItem value={10}>Last 3 Months</MenuItem>
          <MenuItem value={20}>Last 6 Months</MenuItem>
    
        </Select>
      </FormControl>
      </div>
        
        </div>
    <DashTable datas={datas}/>
    </div>
    
    </div>
  )
}

export default Home