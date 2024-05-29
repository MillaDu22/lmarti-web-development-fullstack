import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/index";
import './dashboardAdmin.css';

function DashboardAdmin() {
    return (
        <div className = "container-dashboard">
            <Navbar />
            <div id="dashboard">
                <h1>Admin Dashboard</h1>
                <div className="section">
                    <h2>Projects</h2>
                    <Link to="/addprojectform"><button>Add Project</button></Link>
                    <Link to="/editprojectform"><button>Edit Project</button></Link>
                    <Link to="/deleteprojectform"><button>Delete Project</button></Link>
                </div>
                <div className="section">
                    <h2>Certificates</h2>
                    <Link to="/addcertificatform"><button>Add Certificat</button></Link>
                    <Link to="/editcertificatform"><button>Edit Certificat</button></Link>
                    <Link to="/deletecertificatform"><button>Delete Certificat</button></Link>
                </div>
                <div className="section">
                    <h2>CV</h2>
                    <Link to="/addcvform"><button>Add Cv</button></Link>
                    <Link to="/editcvform"><button>Edit Cv</button></Link>
                    <Link to="/deletecvform"><button>Delete Cv</button></Link>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;
