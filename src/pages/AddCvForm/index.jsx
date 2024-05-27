import "./addCvForm.css";
import React, { useState } from "react";
import axios from "axios";

function AddCVForm() {
    const [formData, setFormData] = useState({
        title: "",
        cvUrl: ""
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
        } catch (error) {
        console.error("Error adding CV:", error);
        }
    };

    return (
        <form className = "form-add-cv" onSubmit={handleSubmit}>
        <h2>Add CV</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        <label htmlFor="cvUrl">CV URL:</label>
        <input type="text" id="cvUrl" name="cvUrl" value={formData.cvUrl} onChange={handleChange} />
        <button type="submit">Add CV</button>
        </form>
    );
}

export default AddCVForm;
