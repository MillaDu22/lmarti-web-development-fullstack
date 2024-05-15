import React, { useState } from 'react';
import "./sign.css";
import Navbar from "../../components/Navbar/index";

function Log() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoute ici la logique pour envoyer les données au backend
        console.log(formData);
        // Réinitialise le formulaire après soumission
        setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
        });
    };

    return (
        <div className= "signup-page">
            <Navbar />
            <div className ="container">
            <h3 className="title-sign">SignUp</h3>
                <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    />
                </label>
                <br />
                <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Log;
