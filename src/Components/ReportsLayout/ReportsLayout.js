import "./ReportsLayout.css"
import React, { useState, useEffect } from 'react';

const Reports = () => {
    const [doctors, setDoctors] = useState(false);
    useEffect(() => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <>
        <center>
            <div className="report-container">
                <h1>Reports</h1>
                <div className="review-table">
                    <div className="header-row">
                        <div className="header">Serial Number</div>
                        <div className="header">Doctors Name</div>
                        <div className="header">Doctors Speciality</div>
                        <div className="header">Provide Feedback</div>
                        <div className="header">Download Report</div>
                    </div>
                    {doctors ? doctors.map((element, index) => (
                        <div key={index} className="row">
                            <div>{index}</div>
                            <div>{element.name}</div>
                            <div>{element.speciality}</div>
                            <div><button className="feedback">View Report</button></div>
                            <div><button className="feedback">View Report</button></div>
                        </div>
                    )) : "Loading"}
                </div>
            </div>
        </center>
        </>
    )
}

export default Reports