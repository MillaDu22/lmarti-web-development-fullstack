import React from 'react';
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Cv from "../pages/Cv/index";
import Error from "../pages/Error/index";
import Project from "../pages/Project/index";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projet/:id" element={<Project />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;