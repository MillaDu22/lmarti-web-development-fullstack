/*import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import "./OpenPdf.css";
import A4 from "../../assets/pdf/cv-lmarti-2024.pdf";

function OpenPdf() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <main className="container-pdf-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <section className="pdf-viewer">
                    <Viewer fileUrl= {A4} plugins={[defaultLayoutPluginInstance]}/>
                </section>
            </Worker>
        </main>
    );
}

export default OpenPdf;*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./OpenPdf.css";
import { useLocation } from 'react-router-dom';

function OpenPdf() {

    const [cvs, setCvs] = useState([]);
    const location = useLocation();
    const [url, setUrl] = useState(null);


    useEffect(() => {
        fetchCvs();
    }, []);
    const fetchCvs = async () => {
        try {
            const response = await axios.get('https://marti.alwaysdata.net/api/cv');
            setCvs(response.data);
            console.log(response.data)
            if (response.data.length > 0) {
                setUrl(response.data[0].url); 
            }
        } catch (error) {
            console.error("Error fetching the PDF URL:", error);
        };
    }
    useEffect(() => {
        // Récupére les paramètres de requête de l'URL //
        const searchParams = new URLSearchParams(location.search);
        const newCvId = searchParams.get('newCvId')

        // Si un nouvel identifiant de projet est présent dans les paramètres de requête, ajoute le nouveau projet à la liste des projets //
        if (newCvId) {
            fetchCvs(); // Rafraîchi la liste des projets depuis le serveur //
        }
    }, [location.search]);

    return (
        <div className = "container-cv">
            <img key={cvs.id} src={url} alt="cv" className="cv"/>
        </div>
    );
}

export default OpenPdf;
