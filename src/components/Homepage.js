import React from 'react'
import TopBar from './Topbar/TopBar'
import Sidebar from './Sidebar/Sidebar'
import "./homepage.css";
import Home from './Campaign/Home';
import Create from './Create/Create';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function Homepage() {
  

 
  return (
    <React.Fragment>
      <Router>
        <TopBar/>
        <div className="container">
        <Sidebar />
        <div className="others">
        <Routes>
            <Route  exact path ="/" element={<Home />}/>
            <Route  path ="/create" element={<Create/>}/>
          </Routes>
        </div>
        </div>
     </Router>
    </React.Fragment>
    
  )
}

export default Homepage
