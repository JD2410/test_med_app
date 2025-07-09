import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate, Navigate } from 'react-router-dom';
import doctorImage from './find_a_doctor.png';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearchIC = () => {
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
    return (
        <div className='finddoctor'>
            <div>
                <img src={doctorImage} width="260px" height="260px" />
            </div>
            <div>
            <h1>Find a doctor and Consult instantly</h1>
                <p>Use the search below to find a specialty you need assistance with</p>
            <div className="home-search-container"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                <div className="doctor-search-box">
                {/* <p>Perform a search to see the results.</p> */}
                    <input type="text" className="search-doctor-input-box" placeholder="Search doctors, clinics, hospitals, etc." onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />  
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
    )
}

export default FindDoctorSearchIC