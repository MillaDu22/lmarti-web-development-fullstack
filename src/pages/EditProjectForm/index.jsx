import React, { useState } from "react";
import axios from "axios";
import './editProjectForm.css';

function EditProjectForm() {
    const [formData, setFormData] = useState({
        id: '',
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
    });

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
        const response = await axios.put(`http://localhost:3001/api/project/${formData.id}`, formData);
        console.log("Data updated:", response.data);
        } catch (error) {
        console.error("Error:", error);
        }
    };

    return (
        <form className="form-project" onSubmit={handleSubmit}>
        <h4 className="title-form">Edit Project</h4>

        <label htmlFor="id-project" className="label-formsAPI">Project ID:</label>
        <input type="text" id="id-project" name="id" autoComplete="off" className="input-field" value={formData.id} onChange={handleChange} />

        <label htmlFor="name-project" className="label-formsAPI">Name:</label>
        <input type="text" id="name-project" name="name" autoComplete="off" className="input-field" value={formData.name} onChange={handleChange} />
        
        <label htmlFor="informations-project" className="label-formsAPI">Informations (card):</label>
        <input type="text" id="informations-project" name="informations" autoComplete="off" className="input-field" value={formData.informations} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="tag1-project" className="label-formsAPI">Tag1:</label>
        <input type="text" id="tag1-project" name="tag1" autoComplete="off" className="input-field" value={formData.tag1} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="tag2-project" className="label-formsAPI">Tag2:</label>
        <input type="text" id="tag2-project" name="tag2" autoComplete="off" className="input-field" value={formData.tag2} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="tag3-project" className="label-formsAPI">Tag3:</label>
        <input type="text" id="tag3-project" name="tag3" autoComplete="off" className="input-field" value={formData.tag3} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="description-project" className="label-formsAPI">Description (page project):</label>
        <input type="text" id="description-project" name="description" autoComplete="off" className="input-field" value={formData.description} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="lien-code-project" className="label-formsAPI">Url code:</label>
        <input type="text" id="lien-code-project" name="lienCode" autoComplete="off" className="input-field" value={formData.lienCode} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="lien-site-project" className="label-formsAPI">Url site:</label>
        <input type="text" id="lien-site-project" name="lienSite" autoComplete="off" className="input-field" value={formData.lienSite} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="alt-cover-project" className="label-formsAPI">Alt cover:</label>
        <input type="text" id="alt-cover-project" name="altCover" autoComplete="off" className="input-field" value={formData.altCover} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="cover-url-project" className="label-formsAPI">Cover URL (webp):</label>
        <input type="text" id="cover-url-project" name="coverUrl" autoComplete="off" className="input-field" value={formData.coverUrl} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="photos-url-project" className="label-formsAPI">Photos URL (webp):</label>
        <input type="text" id="photos-url-project" name="photosUrl" autoComplete="off" className="input-field" value={formData.photosUrl} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="html-project" className="label-formsAPI">HTML %:</label>
        <input type="text" id="html-project" name="html" autoComplete="off" className="input-field" value={formData.html} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="css-project" className="label-formsAPI">CSS %:</label>
        <input type="text" id="css-project" name="css" autoComplete="off" className="input-field" value={formData.css} onChange={(e) => handleChange(e, 'project')} />
        
        <label htmlFor="js-project" className="label-formsAPI">JS %:</label>
        <input type="text" id="js-project" name="js" autoComplete="off" className="input-field" value={formData.js} onChange={(e) => handleChange(e, 'project')} />
        
        <p className="errormsg-form-project"></p>
        <div className="buttons">
            <input type="submit" className="btn-submit" value="Update" />
        </div>
        </form>
    );
}

export default EditProjectForm;
