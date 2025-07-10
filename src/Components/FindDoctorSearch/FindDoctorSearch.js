import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';
import doctorImage from '../../Assets/booking-appointment.png';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    const handleSpecialistDropdown = (value) => {
        setSearchDoctor(value)
        const remove = initSpeciality.filter(special => special.toLowerCase().includes(value.toLowerCase()))
        setSpecialities(remove)
    }
    return (
        <center>
        <div className='searchpage-container'>
        <div className='appointment finddoctor'>
            <div>
                <img src={doctorImage} width="260px" height="260px" />
            </div>
            <div>
            <h1>Find a doctor and book an appointment</h1>
                <p>Use the search below to find a specialty you need assistance with</p>
            <div className="home-search-container"> 
                <div className="doctor-search-box">
                {/* <p>Perform a search to see the results.</p> */}
                    <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => handleSpecialistDropdown(e.target.value)} />  
                    <i className="fa fa-search"></i>
                    <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                        {
                            specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                <span><i className="fa fa-user"></i></span>
                                <span>{speciality}</span>
                                <span>SPECIALITY</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </center>
    )
}

export default FindDoctorSearch