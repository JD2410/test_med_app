import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up'
import Login from './Components/Login/Login'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'; 
import Appointments from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import Reviews from './Components/ReviewForm/ReviewForm';
import Profile from './Components/ProfileCard/ProfileCard'
import Report from './Components/ReportsLayout/ReportsLayout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Notification>
            <Routes>
                <Route path="/" element={<Landing_page/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation/>}/>
                <Route path="/appointments" element={<Appointments/>}/>
                <Route path="/reviews" element={<Reviews/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/reports" element={<Report/>}/>
            </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}
export default App;