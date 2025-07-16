// Following code has been commented with appropriate comments for your reference. 
// Import necessary modules from React and other files
import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css"

// Define a Function component called ProfileForm
const Profile = () => {
  // Set up state variables using the useState hook
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  // Access the navigation functionality from React Router
  const navigate = useNavigate();
  
  // Use the useEffect hook to fetch user profile data when the component mounts or updates
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  // Function to fetch user profile data from the API
  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

      if (!authtoken) {
        navigate("/login");
      } else {
        const response = await fetch(`${API_URL}/api/auth/user`, {
          headers: {
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, // Add the email to the headers
          },
        });
        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
          console.log(user)
        } else {
          // Handle error case
          throw new Error("Failed to fetch user profile");
        }
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  // Function to enable edit mode for profile details
  const handleEdit = () => {
    setEditMode(true);
  };

  // Function to update state when user inputs new data
  const handleInputChange = (e) => {
    
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
    console.log(updatedDetails)
  };

  // Function to handle form submission when user saves changes
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

      if (!authtoken || !email) {
        navigate("/login");
        return;
      }

      const payload = { ...updatedDetails };
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          "Email": email,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Update the user details in session storage
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);

        setUserDetails(updatedDetails);
        setEditMode(false);
        // Display success message to the user
        alert(`Profile Updated Successfully!`);
        navigate("/");
      } else {
        // Handle error case
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };

  // Render the profile form with different sections based on edit mode
  return (
    <center>
    <div className="profile-container">
        <h1>Profile Section</h1>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={userDetails.email}
              disabled // Disable the email field
            />
          </label>
          {/* Create similar logic for displaying and editing name and phone from userDetails */}
          <label>
            Name
            <input
              type="name"
              name="name"
              value={updatedDetails.name} 
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="phone"
              name="phone"
              value={updatedDetails.phone} 
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          <h3>Welcome, {userDetails.name}</h3>
          <div className="userDetails">
            <div className="row">
                <div>Unique Identification</div>
                <div>{userDetails.id ? (userDetails.id) : ("Loading")}</div>
            </div>
            <div className="row">
                <div>Name</div>
                <div>{userDetails.name ? (userDetails.name) : ("Loading")}</div>
            </div>
            <div className="row">
                <div>Email</div>
                <div>{userDetails.email ? (userDetails.email) : ("Loading")}</div>
            </div>
            <div className="row">
                <div>Phone Number</div>
                <div>{userDetails.phone ? (userDetails.phone) : ("Loading")}</div>
            </div>
          </div>
          {/* Implement code to display and allow editing of phone and email similar to above */}
          <button onClick={handleEdit}>Edit Details</button>
        </div>
      )}
    </div>
    </center>
  );
};

// Export the ProfileForm component as the default export
export default Profile;
