import "./addCertificatForm.css";
import React, { useState } from "react";
import axios from "axios";

function AddCertificatForm() {
    const [formData, setFormData] = useState({
        name: "",
        id: "",
        certificatUrl: ""
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
        const response = await axios.post("http://localhost:3001/api/certificat", formData);
        console.log("Certificat added:", response.data);
        } catch (error) {
        console.error("Error adding certificat:", error);
        }
    };

    return (
        <form className ="form-certificat" onSubmit={handleSubmit}>
        <h2>Add Certificat</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
        <label htmlFor="certificatUrl">Certificat URL:</label>
        <input type="text" id="certificatUrl" name="certificatUrl" value={formData.certificatUrl} onChange={handleChange} />
        <button type="submit">Add Certificat</button>
        </form>
    );
}

export default AddCertificatForm;
