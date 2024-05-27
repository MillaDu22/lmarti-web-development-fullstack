import './deleteCertificatForm.css';
import React, { useState } from "react";
import axios from "axios";

function DeleteCertificatForm() {
    const [id, setId] = useState("");

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.delete(`http://localhost:3001/api/certificat/${id}`);
        console.log("Certificat deleted:", response.data);
        } catch (error) {
        console.error("Error deleting certificat:", error);
        }
    };

    return (
        <form className = "form-delete-certificat" onSubmit={handleSubmit}>
        <h2>Delete Certificat</h2>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={handleChange} />
        <button type="submit">Delete Certificat</button>
        </form>
    );
}

export default DeleteCertificatForm;
