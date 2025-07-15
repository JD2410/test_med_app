import './ReviewForm.css'

const ReviewForm = () => {
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
                    <div className="row">
                        <div>2</div>
                        <div>Mark</div>
                        <div>Dentist</div>
                        <div><button className="feedback">Provide Feedback</button></div>
                        <div><i>No feedback given</i></div>
                    </div>
                    <div className="row">
                        <div>2</div>
                        <div>Mark</div>
                        <div>Dentist</div>
                        <div><button className="feedback">Provide Feedback</button></div>
                        <div><i>No feedback given</i></div>
                    </div>
                    <div className="row">
                        <div>2</div>
                        <div>Mark</div>
                        <div>Dentist</div>
                        <div><button className="feedback">Provide Feedback</button></div>
                        <div><i>No feedback given</i></div>
                    </div>
                </div>
            </div>
        </center>
    )
}

export default ReviewForm