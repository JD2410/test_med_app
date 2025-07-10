import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up'
import Login from './Components/Login/Login'
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'; 
import Appointments from './Components/BookingConsultation';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_page/>}/>
            <Route path="/signup" element={<Sign_Up/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
// Export the App component as the default export
export default App;