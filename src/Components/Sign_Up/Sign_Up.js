// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };
    return (
        <>
        <div className='wrapper'>
        <div className="signup-container">
        <h1>Sign up</h1>
        <p>Already a member? <a href="../Login/Login.html">Login</a></p>
        <form method="POST" onSubmit={register}>
            <div className="input">
                <label for="role">Role</label>
                <input type="text" id="role" name="role" placeholder="Enter your role" />
            </div>
            <div className="input">
                <label for="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter your name" min="4" required />
            </div>
            <div className="input">
                <label for="phone">Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" id="phone" name="phone" placeholder="Enter your phone number" min="10" required />
            </div>
            <div className="input">
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email address" required />
            </div>
            <div className="input">
                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter your password" min="8" required />
            </div>
            <div className="actions">
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                <input type="reset" value="Reset" />
                <input type="submit" value="Create" />
            </div>
        </form>
    </div>
    </div>
        </>
    )
}

export default Sign_Up