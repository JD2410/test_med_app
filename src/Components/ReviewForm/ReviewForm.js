import React, { useState, useEffect } from 'react';
import './ReviewForm.css'

const ReviewForm = () => {
    const [doctors, setDoctors] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
        doctorIndex: 0,
        name: '',
        review: '',
        rating: 1
    });

     // Function to handle button click event
  const handleButtonClick = (ele) => {
    setShowForm(true);
    setFormData({ ...formData, doctorIndex: ele });
  };
  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
        const newDoctors = [...doctors];
        const reviewObj = {
            name: formData.name,
            review: formData.review,
            rating: formData.rating
        }
        newDoctors[parseInt(formData.doctorIndex)].review = reviewObj;
        setDoctors(newDoctors);
        cancelReview()
    } else {
      setShowWarning(true);
    }
    
  };
  const cancelReview = () => {
    setFormData({
      doctorIndex: 0,
      name: '',
      review: '',
      rating: 1
    });
    setShowWarning(false);
    setShowForm(false);
  }

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
            <div className="review-form-container">
                <h1>Review</h1>
                <div className="review-table">
                    <div className="header-row">
                        <div className="header">Doctors Name & Experience</div>
                        <div className="header">Doctors Speciality</div>
                        <div className="header">Current Rating</div>
                        <div className="header">Provide Feedback</div>
                        <div className="header">Review Given</div>
                    </div>
                    {doctors ? doctors.map((element, index) => (
                        <div key={index} className="row">
                            <div><span>{element.name}</span><span>{element.experience} years of experience</span></div>
                            <div>{element.speciality}</div>
                            <div>{element.ratings}</div>
                            <div>
                            {element.review ? (
                                <button className="feedback disabled" disabled>Give Feedback</button>
                            ) : (
                                <button className="feedback" onClick={() => { handleButtonClick(index) }}>Give Feedback</button>
                            )}
                            </div>
                            <div>
                            {element.review ? (
                                <strong>{element.review.review}</strong>
                            ) : (
                                <i>No feedback given</i>
                            )}
                            </div>
                        </div>
                    )) : "no"}
                </div>
            </div>
        </center>
        {!showForm ? ( "" ) : (
        // Display form for giving feedback
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <h2>Give Your Feedback</h2>
                {/* Display warning message if not all fields are filled */}
                {showWarning && <p className="warning">Please fill out all fields.</p>}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                </div>
                {/* Submit button for form submission */}
                <div className='actions'>
                    <button type="submit">Submit</button>
                    <button onClick={cancelReview}>Cancel</button>
                </div>
                
            </form>
        </div>
        
      )}
        </>
    )
}

export default ReviewForm

