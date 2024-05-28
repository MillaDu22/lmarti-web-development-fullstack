import React from 'react';
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Cv from "../pages/Cv/index";
import Sign from "../pages/Sign/index";
import Log from "../pages/Log/index";
import DashboardAdmin from "../components/DashboardAdmin/index";
import AddProjectForm from '../pages/AddProjectForm/index';
import EditProjectForm from '../pages/EditProjectForm/index';
import DeleteProjectForm from '../pages/DeleteProjectForm/index';
import AddCertificatForm from '../pages/AddCertificatForm/index';
import EditCertificatForm from '../pages/EditCertificatForm/index';
import DeleteCertificatForm from '../pages/DeleteCertificatForm/index';
import AddCVForm from '../pages/AddCvForm/index';
import EditCVForm from '../pages/EditCvForm/index';
import DeleteCVForm from '../pages/DeleteCvForm/index';
import Error from "../pages/Error/index";
import Project from "../pages/Project/index";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/log" element={<Log />} />
                <Route path="/dashboardadmin" element={<DashboardAdmin />} />
                <Route path="/addprojectform" element={<AddProjectForm />} />
                <Route path="/editprojectform" element={<EditProjectForm />} />
                <Route path="/deleteprojectform" element={<DeleteProjectForm />} />
                <Route path="/addcertificatform" element={<AddCertificatForm />} />
                <Route path="/editcertificatform" element={<EditCertificatForm />} />
                <Route path="/deletecertificatform" element={<DeleteCertificatForm />} />
                <Route path="/addcvform" element={<AddCVForm />} />
                <Route path="/editcvform" element={<EditCVForm />} />
                <Route path="/deletecvform" element={<DeleteCVForm />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;