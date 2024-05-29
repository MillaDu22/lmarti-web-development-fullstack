import './editCvForm.css';
import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function EditCVForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        urlCv: ""
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
            const response = await axios.get(`http://localhost:3001/api/cv/${formData.id}`);
            const cv = response.data;
            setFormData({
                id: cv._id,
                title: cv.title,
                urlCv: cv.url
            });
            setErrorMessage('');
        } catch (error) {
            console.error("Error fetching cv:", error);
            setErrorMessage('Cv not found or error fetching cv');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.put(`http://localhost:3001/api/cv/${formData.id}`, formData);
        console.log("CV updated:", response.data);
        navigate('/cv');
        } catch (error) {
        console.error("Error updating CV:", error);
        }
    };

    return (
        <div className = "container-form">
            <Navbar />
            <Link className= "return-dash" to="/dashboardadmin"><i className="fa-solid fa-circle-left"></i></Link>
            <form className= "form-edit-cv" onSubmit={handleSubmit}>
                <h2>Edit CV</h2>
                <label htmlFor="id-cv" className="label-formsAPI">CV ID:</label>
                <input type="text" id="id-cv" name="id" autoComplete="off" className="input-field" value={formData.id} onChange={handleChange} />
                <button className="search-by-id" type="button" onClick={handleSearch}>Search</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                <label htmlFor="cvUrl">CV URL:</label>
                <input type="text" id="cvUrl" name="urlCv" value={formData.urlCv} onChange={handleChange} />
                <button type="submit">Update CV</button>
            </form>
        </div>
    );
}

export default EditCVForm;
