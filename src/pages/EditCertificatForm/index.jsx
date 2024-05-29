import './editCertificatForm.css';
import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function EditCertificatForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        description: "",
        urlCertificat: ""
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3001/api/certificat/${formData.id}`);
            const certificat = response.data;
            setFormData({
                id: certificat._id,
                description: certificat.description,
                urlCertificat: certificat.url
            });
            setErrorMessage('');
        } catch (error) {
            console.error("Error fetching certificat:", error);
            setErrorMessage('Certificat not found or error fetching certificat');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.put(`http://localhost:3001/api/certificat/${formData.id}`, formData);
        console.log("Certificat updated:", response.data);
        navigate('/about');
        } catch (error) {
        console.error("Error updating certificat:", error);
        }
    };

    return (
        <div className = "container-form">
        <Navbar />
        <Link className= "return-dash" to="/dashboardadmin"><i className="fa-solid fa-circle-left"></i></Link>
            <form className="form-edit-certificat" onSubmit={handleSubmit}>
                <h2>Edit Certificat</h2>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />

                <button className="search-by-id" type="button" onClick={handleSearch}>Search</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <label htmlFor="description">Name:</label>
                <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
                <label htmlFor="urlCertificat">Certificat URL:</label>
                <input type="text" id="urlCertificat" name="urlCertificat" value={formData.urlCertificat} onChange={handleChange} />
                <button type="submit">Update Certificat</button>
            </form>
        </div>
    );
}

export default EditCertificatForm;
