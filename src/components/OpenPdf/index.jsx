import React from 'react';
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

export default OpenPdf;



