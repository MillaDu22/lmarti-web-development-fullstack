import React, { useState } from "react";
import Navbar from "../../components/Navbar/index";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "./deleteProjectForm.css";

function DeleteProjectForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ id: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.delete(`http://localhost:3001/api/project/${formData.id}`);
        console.log("Data deleted:", response.data);
        navigate('/');
        } catch (error) {
        console.error("Error:", error);
        }
    };

    return (
        <div className = "container-form">
        <Navbar />
        <Link className= "return-dash" to="/dashboardadmin"><i className="fa-solid fa-circle-left"></i></Link>
            <form className="form-project" onSubmit={handleSubmit}>
                <h4 className="title-form">Delete Project</h4>
                <label htmlFor="id-project" className="label-formsAPI">Project ID:</label>
                <input type="text" id="id-project" name="id" autoComplete="off" className="input-field" value={formData.id} onChange={handleChange} />
                <div className="buttons">
                    <input type="submit" className="btn-submit" value="Delete" />
                </div>
            </form>
        </div>
    );
}

export default DeleteProjectForm;
