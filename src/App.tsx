// import {useState} from 'react';
import * as React from 'react';
import './App.css';
// import HeaderComponent from './Pages/Header';
import DashboardComponent from './Pages/Dashboard';
import SideBarComponent from './Pages/SideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentProfileComponent from './Pages/Student/StudentProfile';


function App() {
	return (
		<div>
		{/* <HeaderComponent /> */}
		
		<SideBarComponent />
			<Router> 
        <Routes>
		<Route path="" element={<DashboardComponent id={123} />}/>
		<Route path="dashboard" element={<DashboardComponent id={123} />}/>
          <Route path="student-profile" element={<StudentProfileComponent />} />
        </Routes>
      </Router>
			
		</div >
	);

}

export default App;

