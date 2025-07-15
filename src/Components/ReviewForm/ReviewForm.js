import React, { useState, useEffect } from 'react';
import './ReviewForm.css'

const ReviewForm = () => {
    const [doctors, setDoctors] = useState(false);

     const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        getDoctorsDetails();
    }, [])
    return (
        <center>
            <div className="review-form-container">
                <h1>Review</h1>
                <div className="review-table">
                    <div className="header-row">
                        <div className="header">Serial Number</div>
                        <div className="header">Doctors Name</div>
                        <div className="header">Doctors Speciality</div>
                        <div className="header">Provide Feedback</div>
                        <div className="header">Review Given</div>
                    </div>
                    {doctors ? doctors.map((element, index) => (
                        <div key={index} className="row">
                            <div>{index}</div>
                            <div>{element.name}</div>
                            <div>{element.speciality}</div>
                            <div><button className="feedback">Provide Feedback</button></div>
                            <div><i>No feedback given</i></div>
                        </div>
                    )) : "no"}
                </div>
            </div>
        </center>
    )
}

export default ReviewForm

