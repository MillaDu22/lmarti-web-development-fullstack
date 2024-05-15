import Navbar from "../../components/Navbar";
import "./log.css";
import React, { useState } from 'react';

function SigninForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        // Ajoute ici la logique pour envoyer les données au backend pour la connexion
        console.log(formData);
        // Réinitialise le formulaire après soumission
        setFormData({
        email: '',
        password: ''
        });
    };

    return (
    <div className="log-page">
        <Navbar />
        <div className ="container">
            <h3 className="title-log">Login</h3>
            <form onSubmit={handleSubmit} className="form-container">
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
                    autoComplete="off"
                    required
                    />
                </label>
                <br />
                <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SigninForm;

