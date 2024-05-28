import './deleteCvForm.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function DeleteCVForm() {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.delete(`http://localhost:3001/api/cv/${id}`);
        console.log("CV deleted:", response.data);
        navigate('/cv');
        } catch (error) {
        console.error("Error deleting CV:", error);
        }
    };

    return (
        <form className = "form-delete-cv" onSubmit={handleSubmit}>
        <h2>Delete CV</h2>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" value={id} onChange={handleChange} />
        <button type="submit">Delete CV</button>
        </form>
    );
}

export default DeleteCVForm;
