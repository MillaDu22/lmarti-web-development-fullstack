import React from 'react';
import "./cv.css";
import Navbar from '../../components/Navbar/index';
import OpenPdf from "../../components/OpenPdf/index";


const CvPage =() => {
    return (
        <div className="page">
            <Navbar />         
            <OpenPdf/>
        </div>
    )
}
export default CvPage;