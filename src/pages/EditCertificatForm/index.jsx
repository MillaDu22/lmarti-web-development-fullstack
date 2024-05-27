import './editCertificatForm.css';
import React, { useState } from "react";
import axios from "axios";

function EditCertificatForm() {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
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
        const response = await axios.put(`http://localhost:3001/api/certificat/${formData.id}`, formData);
        console.log("Certificat updated:", response.data);
        } catch (error) {
        console.error("Error updating certificat:", error);
        }
    };

    return (
        <form className="form-edit-certificat" onSubmit={handleSubmit}>
        <h2>Edit Certificat</h2>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="certificatUrl">Certificat URL:</label>
        <input type="text" id="certificatUrl" name="certificatUrl" value={formData.certificatUrl} onChange={handleChange} />
        <button type="submit">Update Certificat</button>
        </form>
    );
}

export default EditCertificatForm;
