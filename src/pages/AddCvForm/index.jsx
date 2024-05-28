import "./addCvForm.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function AddCVForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        urlCv: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:3001/api/cv", formData);
        console.log("CV added:", response.data);
        navigate('/cv');
        } catch (error) {
        console.error("Error adding CV:", error);
        }
    };

    return (
        <form className = "form-add-cv" onSubmit={handleSubmit}>
        <h2>Add CV</h2>
        <label htmlFor="id-cv" className="label-formsAPI">CV ID:</label>
        <input type="text" id="id-cv" name="id" autoComplete="off" className="input-field" value={formData.id} onChange={handleChange} />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        <label htmlFor="url">CV URL:</label>
        <input type="text" id="url" name="urlCv" value={formData.urlCv} onChange={handleChange} />
        <button type="submit">Add CV</button>
        </form>
    );
}

export default AddCVForm;
