import './deleteCertificatForm.css';
import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function DeleteCertificatForm() {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.delete(`http://localhost:3001/api/certificat/${id}`);
        console.log("Certificat deleted:", response.data);
        navigate('/about');
        } catch (error) {
        console.error("Error deleting certificat:", error);
        }
    };

    return (
        <div className = "container-form">
            <Navbar />
            <Link className= "return-dash" to="/dashboardadmin"><i className="fa-solid fa-circle-left"></i></Link>
            <form className = "form-delete-certificat" onSubmit={handleSubmit}>
                <h2>Delete Certificat</h2>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" value={id} onChange={handleChange} />
                <button type="submit">Delete Certificat</button>
            </form>
        </div>
    );
}

export default DeleteCertificatForm;
