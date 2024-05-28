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
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import "./OpenPdf.css";

function OpenPdf() {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        const fetchPdfUrl = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/cv"); 
                setPdfUrl(response.data); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the PDF URL:", error);
                setError('Error fetching the PDF URL');
                setLoading(false);
            }
        };

        fetchPdfUrl();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className="container-pdf-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <section className="pdf-viewer">
                    {pdfUrl ? (
                        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
                    ) : (
                        <div>No PDF URL found</div>
                    )}
                </section>
            </Worker>
        </main>
    );
}

export default OpenPdf;


