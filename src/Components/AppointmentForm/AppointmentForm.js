import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { display } from '../../notificationSlice'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
      localStorage.setItem("doctorData", JSON.stringify({
        name: doctorName,
        speciality: doctorSpeciality
      }))
      localStorage.setItem(doctorName, JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        date: appointmentDate,
        time: appointmentTime
      }))
      dispatch(display())
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date of Appointment:</label>
          <input type="date" id="appointmentDate" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="appointmentTime">Date of Appointment:</label>
          <input type="time" id="appointmentTime" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
