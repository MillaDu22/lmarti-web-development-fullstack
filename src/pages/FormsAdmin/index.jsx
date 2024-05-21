import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../../components/Navbar";
import "./formsAdmin.css";

function FormsAdmin() {
    const [formData, setFormData] = useState({
        project: {
            name: '',
            informations: '',
            tag1: '',
            tag2: '',
            tag3: '',
            description: '',
            lienCode: '',
            lienSite: '',
            altCover: '',
            coverUrl: '',
            photosUrl: '',
            html: '',
            css: '',
            js: ''
        },
        certificat: {
            name: '',
            id: '',
            certificatUrl: ''
        },
        cv: {
            title: '',
            cvUrl: ''
        }
    });

    const handleChange = (e, section) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e, section) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/api/${section}`, formData[section]);
            console.log('Data submitted for:', response.data);
            console.log(`Form data submitted for ${section}:`, formData[section]);
            // Handle success
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    const handleUpdate = async (section) => {
        try {
            const response = await axios.put(`http://localhost:3001/api/${section}/${formData[section].id}`, formData[section]);
            console.log('Data updated for:', response.data);
            console.log(`Form data updated for ${section}:`, formData[section]);
            // Handle success
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    const handleDelete = async (section) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/${section}/${formData[section].id}`);
            console.log('Data deleted:', response.data);
            console.log(`Data deleted for ${section}`);
            setFormData(prevState => ({
                ...prevState,
                [section]: section === 'project' ? {
                    name: '',
                    informations: '',
                    tag1: '',
                    tag2: '',
                    tag3: '',
                    description: '',
                    lienCode: '',
                    lienSite: '',
                    altCover: '',
                    coverUrl: '',
                    photosUrl: '',
                    html: '',
                    css: '',
                    js: ''
                } : section === 'certificat' ? {
                    name: '',
                    id: '',
                    certificatUrl: ''
                } : {
                    title: '',
                    cvUrl: ''
                }
            }));
            // Handle success //
        } catch (error) {
            console.error('Error:', error);
            // Handle error //
        }
    };
    
    return (
        <main className="main-admin">
            <Navbar />
            <h3 className="title-forms">Les formulaires</h3>
            <div className="container-forms">
                <form className="form-project" onSubmit={(e) => handleSubmit(e, 'project')}>
                    <h4 className="title-form">Project</h4>
                    <label htmlFor="name-project" className="label-formsAPI">Name:</label>
                    <input type="text" id="name-project" name="name" autoComplete="off" className="input-field" value={formData.project.name} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="informations-project" className="label-formsAPI">Informations (card):</label>
                    <input type="text" id="informations-project" name="informations" autoComplete="off" className="input-field" value={formData.project.informations} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="tag1-project" className="label-formsAPI">Tag1:</label>
                    <input type="text" id="tag1-project" name="tag1" autoComplete="off" className="input-field" value={formData.project.tag1} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="tag2-project" className="label-formsAPI">Tag2:</label>
                    <input type="text" id="tag2-project" name="tag2" autoComplete="off" className="input-field" value={formData.project.tag2} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="tag3-project" className="label-formsAPI">Tag3:</label>
                    <input type="text" id="tag3-project" name="tag3" autoComplete="off" className="input-field" value={formData.project.tag3} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="description-project" className="label-formsAPI">Description (page project):</label>
                    <input type="text" id="description-project" name="description" autoComplete="off" className="input-field" value={formData.project.description} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="lien-code-project" className="label-formsAPI">Url code:</label>
                    <input type="text" id="lien-code-project" name="lienCode" autoComplete="off" className="input-field" value={formData.project.lienCode} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="lien-site-project" className="label-formsAPI">Url site:</label>
                    <input type="text" id="lien-site-project" name="lienSite" autoComplete="off" className="input-field" value={formData.project.lienSite} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="alt-cover-project" className="label-formsAPI">Alt cover:</label>
                    <input type="text" id="alt-cover-project" name="altCover" autoComplete="off" className="input-field" value={formData.project.altCover} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="cover-url-project" className="label-formsAPI">Cover URL (webp):</label>
                    <input type="text" id="cover-url-project" name="coverUrl" autoComplete="off" className="input-field" value={formData.project.coverUrl} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="photos-url-project" className="label-formsAPI">Photos URL (webp):</label>
                    <input type="text" id="photos-url-project" name="photosUrl" autoComplete="off" className="input-field" value={formData.project.photosUrl} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="html-project" className="label-formsAPI">HTML %:</label>
                    <input type="text" id="html-project" name="html" autoComplete="off" className="input-field" value={formData.project.html} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="css-project" className="label-formsAPI">CSS %:</label>
                    <input type="text" id="css-project" name="css" autoComplete="off" className="input-field" value={formData.project.css} onChange={(e) => handleChange(e, 'project')} />
                    
                    <label htmlFor="js-project" className="label-formsAPI">JS %:</label>
                    <input type="text" id="js-project" name="js" autoComplete="off" className="input-field" value={formData.project.js} onChange={(e) => handleChange(e, 'project')} />
                    
                    <p className="errormsg-form-project"></p>
                    <div className="buttons">
                        <button type="button" className="btn-update" onClick={() => handleUpdate('project')}>Modifier</button>
                        <button type="button" className="btn-delete" onClick={() => handleDelete('project')}>Supprimer</button>
                        <input type="submit" className="btn-submit" value="Ajouter" />
                    </div>
                </form>

                <form className="form-certificat" onSubmit={(e) => handleSubmit(e, 'certificat')}>
                    <h4 className="title-form">Certificat</h4>
                    <label htmlFor="name-certificat" className="label-formsAPI">Nom du Certificat:</label>
                    <input type="text" id="name-certificat" name="name" autoComplete="off" className="input-field" value={formData.certificat.name} onChange={(e) => handleChange(e, 'certificat')} />
                    
                    <label htmlFor="id-certificat" className="label-formsAPI">Identifiant:</label>
                    <input type="text" id="id-certificat" name="id" autoComplete="off" className="input-field" value={formData.certificat.id} onChange={(e) => handleChange(e, 'certificat')} />
                    
                    <label htmlFor="certificat-url" className="label-formsAPI">Certificat URL (pdf):</label>
                    <input type="text" id="certificat-url" name="certificatUrl" autoComplete="off" className="input-field" value={formData.certificat.certificatUrl} onChange={(e) => handleChange(e, 'certificat')} />
                    
                    <p className="errormsg-form-certificat"></p>
                    <div className="buttons">
                        <button type="button" className="btn-delete" onClick={() => handleDelete('certificat')}>Supprimer</button>
                        <input type="submit" className="btn-submit" value="Ajouter" />
                    </div>
                </form>

                <form className="form-cv" onSubmit={(e) => handleSubmit(e, 'cv')}>
                    <h4 className="title-form">CV</h4>
                    <label htmlFor="title-cv" className="label-formsAPI">Title CV:</label>
                    <input type="text" id="title-cv" name="title" autoComplete="off" className="input-field" value={formData.cv.title} onChange={(e) => handleChange(e, 'cv')} />
                    
                    <label htmlFor="cv-url" className="label-formsAPI">CV URL (pdf):</label>
                    <input type="text" id="cv-url" name="cvUrl" autoComplete="off" className="input-field" value={formData.cv.cvUrl} onChange={(e) => handleChange(e, 'cv')} />
                    
                    <p className="errormsg-form-cv"></p>
                    <div className="buttons">
                        <button type="button" className="btn-delete" onClick={() => handleDelete('cv')}>Supprimer</button>
                        <input type="submit" className="btn-submit" value="Ajouter" />
                    </div>
                </form>
            </div>
        </main>
    )
}
export default FormsAdmin;
