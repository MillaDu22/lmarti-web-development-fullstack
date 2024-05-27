import './editCvForm.css';
import React, { useState } from "react";
import axios from "axios";

function EditCVForm() {
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
        const response = await axios.put(`http://localhost:3001/api/cv/${formData.id}`, formData);
        console.log("CV updated:", response.data);
        } catch (error) {
        console.error("Error updating CV:", error);
        }
    };

    return (
        <form className= "form-edit-cv" onSubmit={handleSubmit}>
        <h2>Edit CV</h2>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        <label htmlFor="cvUrl">CV URL:</label>
        <input type="text" id="cvUrl" name="cvUrl" value={formData.cvUrl} onChange={handleChange} />
        <button type="submit">Update CV</button>
        </form>
    );
}

export default EditCVForm;
