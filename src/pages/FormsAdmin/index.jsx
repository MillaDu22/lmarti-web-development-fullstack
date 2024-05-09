import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./formsAdmin.css";

function FormsAdmin() {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };


    return(
        <main className="main-admin">
            <Navbar />
            <h3 className="title-forms">Les formulaires</h3>
            <div className="container-forms">

                <form className="form-project" >
                    <h4 className ="title-form">Project</h4>
                    <label htmlFor="name-project" className="label-formsAPI">Name:</label>
                    <input type="text" id="name-project" autoComplete="off" className="name-project" defaultValue="" />
                    <label htmlFor="informations-project" className="label-formsAPI">Informations(card):</label>
                    <input type="text" id="informations-project" autoComplete="off" className="informations-project" defaultValue=""  />
                    <label htmlFor="tag1-project" className="label-formsAPI">Tag1:</label>
                    <input type="text" id="tag1-project" autoComplete="off" className="tag1-project" defaultValue=""  />
                    <label htmlFor="tag2-project" className="label-formsAPI">Tag2:</label>
                    <input type="text" id="tag2-project" autoComplete="off" className="tag2-project" defaultValue=""  />
                    <label htmlFor="tag3-project" className="label-formsAPI">Tag3:</label>
                    <input type="text" id="tag3-project" autoComplete="off" className="tag3-project" defaultValue=""  />
                    <label htmlFor="description-project" className="label-formsAPI">Description(page project):</label>
                    <input type="text" id="description-project" autoComplete="off" className="description-project" defaultValue=""  />
                    <label htmlFor="lien-code-project" className="label-formsAPI">Url code:</label>
                    <input type="text" id="lien-code-project" autoComplete="off" className="lien-code-project" defaultValue=""  />
                    <label htmlFor="lien-site-project" className="label-formsAPI">Url site:</label>
                    <input type="text" id="lien-site-project" autoComplete="off" className="lien-site-project" defaultValue=""  />
                    <label htmlFor="alt-cover-project" className="label-formsAPI">Alt cover:</label>
                    <input type="text" id="alt-cover-project" autoComplete="off" className="alt-cover-project" defaultValue=""  />
                    <label htmlFor="cover-project" className="label-formsAPI">Cover(webp):</label>
                    <span className="custom-file-upload-cover">
                        <i className="fas fa-cloud-upload-alt"></i>Cover
                    </span>
                    <input type="file" id="cover-project" className="cover" defaultValue={selectedFile}  onChange={handleFileChange} />
                    <span className = "name-file-selected">{selectedFile ? selectedFile.name : 'Aucun fichier sélectionné'}</span>
                    <label htmlFor="photos-project" className="label-formsAPI">Photos slider(webp):</label>
                    <span className="custom-file-upload-photos">
                        <i className="fas fa-cloud-upload-alt"></i>Photos
                    </span>
                    <input type="file" id="photos-project" className="photos" defaultValue={selectedFile}  onChange={handleFileChange} multiple/>
                    <span className = "name-file-selected">{selectedFile ? selectedFile.name : 'Aucun fichier sélectionné'}</span>
                    <label htmlFor="html-project" className="label-formsAPI">Html%(number):</label>
                    <input type="text" id="html-project" autoComplete="off" className="html-project" defaultValue=""  />
                    <label htmlFor="css-project" className="label-formsAPI">Css%(number):</label>
                    <input type="text" id="css-project" autoComplete="off" className="css-project" defaultValue=""  />
                    <label htmlFor="js-project" className="label-formsAPI">Js%(number):</label>
                    <input type="text" id="js-project" autoComplete="off" className="js-project" defaultValue=""  />
                    <p className="errormsg-form-project"></p>
                    <input type="submit" id="submit-form-project" className="submit-form-project" name="form-project" value="Ajouter"/>
                </form>

                <form className="form-certificat">
                <h4 className ="title-form">Certificat</h4>
                    <label htmlFor="name-certificat" className="label-formsAPI">Nom du Certificat:</label>
                    <input type="text" id="name-certificat" autoComplete="off" className="name-certificat" defaultValue=""  />
                    <label htmlFor="id" className="label-formsAPI">Identifiant:</label>
                    <input type="text" id="id" autoComplete="off" className="id"  defaultValue="" />
                    <label htmlFor="certificat" className="label-formsAPI">Certificat(pdf):</label>
                    <span className="custom-file-upload-certificat">
                        <i className="fas fa-cloud-upload-alt"></i>Certificat
                    </span>
                    <input type="file" id="certificat" className="certificat"  defaultValue={selectedFile}  onChange={handleFileChange}  />
                    <span className = "name-file-selected">{selectedFile ? selectedFile.name : 'Aucun fichier sélectionné'}</span>
                    <p className="errormsg-form-certificat"></p>
                    <input type="submit" id="submit-form-certificat" className="submit-form-certificat" name="form-cerfificat" value="Ajouter"/>
                </form>

                <form className="form-cv">
                    <h4 className ="title-form">Cv</h4>
                    <label htmlFor="title-cv" className="label-formsAPI">Title CV:</label>
                    <input type="email" id="title-cv" autoComplete="off" className="title-cv" defaultValue=""  />
                    <label htmlFor="cv" className="label-formsAPI">Cv(pdf):</label>
                    <span className="custom-file-upload-cv">
                        <i className="fas fa-cloud-upload-alt"></i>Cv
                    </span>
                    <input type="file" id="cv" className="cv" defaultValue={selectedFile}  onChange={handleFileChange} />
                    <span className = "name-file-selected">{selectedFile ? selectedFile.name : 'Aucun fichier sélectionné'}</span>
                    <p className="errormsg-form-cv"></p>
                    <input type="submit" id="submit-form-cv" className="submit-form-cv" name="form-cv" value="modifier"/>
                </form>

            </div>
        </main>
    )
}
export default FormsAdmin;