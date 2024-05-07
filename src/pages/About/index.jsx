import React from 'react';
import Navbar from '../../components/Navbar/index';
import Banniere from "../../components/Banniere/index";
import Collapse from '../../components/Collapse/index';
import SkillBar from '../../components/SkillBar/index';
import './about.css';

function About() {

    const ficheCollapse1 = [
        {
            "id": "1",
            "projets": [
                {"id": "1", "description": "Le projet Riding Cities: Mes premiers pas vers le langage HTML."},
                {"id": "2", "description": "Le projet Ohmyfood: Implémentation et amélioration de l'interface du site mobile avec des animations CSS."},
                {"id": "3", "description": "Le projet Print-It: Mes premiers pas vers le langage JavaScript."},
                {"id": "4", "description": "Le projet kasa: Création d'une application web de location immobilière avec React."},
                {"id": "5", "description": "Le projet Photographe Nina Carducci: Optimisation et référencement."},
                {"id": "6", "description": "Le projet Booki: Création de la page d'accueil d'une agence de voyage avec HTML & CSS."},
                {"id": "7", "description": "Le projet GameOn: Création, avec JavaScript, de la landing page d'une PME spécialisée dans les concours de jeux."},
                {"id": "8", "description": "Le projet FishEye: Création d'un site accessible pour une plateforme de photographes."},
                {"id": "9", "description": "Le projet Les petits plats: Développement d'algorithmes de recherche en JavaScript."},
                {"id": "10", "description": "Le projet Wealth Health: Passage d'une librairie JQuery vers React. "}
            ],
            "projetsCode": [
                {"id": "11", "description": "Le projet Architecte Sophie Bluel: Création d'une page web dynamique avec JavaScript."},
                {"id": "12", "description": "Le projet 724events: Débuggage du site de l'agence d'évènementiel."},
                {"id": "13", "description": "Le projet Argent-Bank: Implémentation du front-end de l'application bancaire avec React."},
                {"id": "14", "description": "Le projet Bills-app: Déboggage et tests d'un SaaS RH."},
                {"id": "15", "description": "Le projet SportSee: Développement d'un tableau de bord d'analytics avec React."}
            ],
            "liens": [
                {"id": "1", "url": "https://milladu22.github.io/riding-cities/"},
                {"id": "2", "url": "https://milladu22.github.io/OhMyFood/"},
                {"id": "3", "url": "https://milladu22.github.io/Print-it-JS/"},
                {"id": "4", "url": "https://milladu22.github.io/Kasa/"},
                {"id": "5", "url": "https://milladu22.github.io/nina-carducci/"},
                {"id": "6", "url": "https://milladu22.github.io/booki-agence-de-voyage/"},
                {"id": "7", "url": "https://milladu22.github.io/GameOn-website-FR/"},
                {"id": "8", "url": "https://milladu22.github.io/Front-End-Fisheye/"},
                {"id": "9", "url": "https://milladu22.github.io/Les-petits-plats/"},
                {"id": "10", "url": "https://milladu22.github.io/rhnet-wealth-health/"}
            ],
            "liensCode": [
                {"id": "11", "url": "https://github.com/MillaDu22/Portfolio-Architecte-Sophie-Bruel"},
                {"id": "12", "url": "https://github.com/MillaDu22/724events"},
                {"id": "13", "url": "https://github.com/MillaDu22/ArgentBank-website"},
                {"id": "14", "url": "https://github.com/MillaDu22/bills-app"},
                {"id": "15", "url": "https://github.com/MillaDu22/sportsee"}
            ],
            "projetNoLink": [
                {"id": "16", "description": "Le projet Menu by qwerta: Planification du développement du site du client."},
                {"id": "17", "description": "Le projet Learn@Home: Définition des besoins pour une app de soutien scolaire."}
            ]
        }
    ];
    const projets = ficheCollapse1[0]?.projets.map((projet) => (
        <div className="nav" key={projet.id}>
            <ul className="projets">
                <li className="projet">{projet.description}
                    <a href={ficheCollapse1[0]?.liens.find((lien) => lien.id === projet.id)?.url} className="Lien-collapse" aria-label="lien-site" target="blank">Voir le site.</a>
                </li>
            </ul>
        </div>
    ));
    const projetsCode = ficheCollapse1[0]?.projetsCode.map((projet) => (
        <div className="nav" key={projet.id}>
            <ul className="projets">
                <li className="projet">{projet.description}
                    <a href={ficheCollapse1[0]?.liensCode.find((lien) => lien.id === projet.id)?.url} className="Lien-collapse" aria-label="lien-code" target="blank">Voir le code.</a>
                </li>
            </ul>
        </div>
    ));
    
    const projetNoLink = ficheCollapse1[0]?.projetNoLink.map((projet) => (
        <div className="nav" key={projet.id}>
            <ul className="projets">
                <li className="projet">{projet.description}</li>
            </ul>
        </div>
    ));
    const ficheCollapse2 = [
        {
            "id": "1",
            "certificats": [
                {"id": "1", "description": " - Les métiers de développeur."},
                {"id": "2", "description":" - Creer un site web avec HTML5 et CSS3."},
                {"id": "3", "description":" - Le css avec Sass."},
                {"id": "4", "description":" - Programmer avec JavaScript."},
                {"id": "5", "description":" - Creer des animations css modernes."},
                {"id": "6", "description":" - Gerer du code avec Git et GitHub."},
                {"id": "7", "description":" - Utiliser la ligne de commande dans un terminal."},
                {"id": "8", "description":" - Le fonctionnement des algorithmes."},
                {"id": "9", "description":" - Ecrire du JavaScript pour le web."},
                {"id": "10", "description":" - Développeur agile."},
                {"id": "11", "description":" - React."},
                {"id": "12", "description":" - Optimisation du référencement d'un site (SEO) en améliorant les performances techniques."},
                {"id": "13", "description":" - L'accessibilité."},
                {"id": "14", "description":" - Tester et déboguer l'interface d'un site."},
                {"id": "15", "description":" - Utiliser le state manager Redux pour gérer l’état de mes applications."},
                {"id": "16", "description":" - Mettre en ligne mon site web."},
                {"id": "17", "description":" - Utiliser ChatGPT pour améliorer ma productivité"},
                {"id": "18", "description":" - Passer au Full Stack avec Node.js, Express et MongoDB"},
                {"id": "19", "description":" - Adopter les API REST pour mes projets web"},
                {"id": "20", "description":" - Appliquer les principes du Green IT dans mon entreprise"},
                {"id": "21", "description":" - Créer des sites web responsives avec Bootstrap 5"},
                {"id": "22", "description":" - Créer une maquette web avec Figma"},
                {"id": "23", "description":" - Réaliser un cahier des charges fonctionnel"},
                {"id": "24", "description":" - Utiliser des design patterns en JavaScript"},
                {"id": "25", "description":" - Corriger les bugs et trouver une solution à mes problèmes de code"}
            ],
            "liens": [
                {"id": "1", "url": "https://openclassrooms.com/fr/course-certificates/3972278678"},
                {"id": "2", "url": "https://openclassrooms.com/fr/course-certificates/3638376655"},
                {"id": "3", "url": "https://openclassrooms.com/fr/course-certificates/5852204522"},
                {"id": "4", "url": "https://openclassrooms.com/fr/course-certificates/4614307780"},
                {"id": "5", "url": "https://openclassrooms.com/fr/course-certificates/3744628093"},
                {"id": "6", "url": "https://openclassrooms.com/fr/course-certificates/5568821645"},
                {"id": "7", "url": "https://openclassrooms.com/fr/course-certificates/4581085720"},
                {"id": "8", "url": "https://openclassrooms.com/fr/course-certificates/1430244560"},
                {"id": "9", "url": "https://openclassrooms.com/fr/course-certificates/2389353375"},
                {"id": "10", "url": "https://openclassrooms.com/fr/course-certificates/9779431406"},
                {"id": "11", "url": "https://openclassrooms.com/fr/course-certificates/1299435073"},
                {"id": "12", "url": "https://openclassrooms.com/fr/course-certificates/7977967610"},
                {"id": "13", "url": "https://openclassrooms.com/fr/course-certificates/4875036124"},
                {"id": "14", "url": "https://openclassrooms.com/fr/course-certificates/8325307532"},
                {"id": "15", "url": "https://openclassrooms.com/fr/course-certificates/9973355833"},
                {"id": "16", "url": "https://openclassrooms.com/fr/course-certificates/6277851977"},
                {"id": "17", "url": "https://openclassrooms.com/fr/course-certificates/5766575595"},
                {"id": "18", "url": "https://openclassrooms.com/fr/course-certificates/6457821996"},
                {"id": "19", "url": "https://openclassrooms.com/fr/course-certificates/9759651794"},
                {"id": "20", "url": "https://openclassrooms.com/fr/course-certificates/6740933405"},
                {"id": "21", "url": "https://openclassrooms.com/fr/course-certificates/9279673309"},
                {"id": "22", "url": "https://openclassrooms.com/fr/course-certificates/7809078989"},
                {"id": "23", "url": "https://openclassrooms.com/fr/course-certificates/4804239846"},
                {"id": "24", "url": "https://openclassrooms.com/fr/course-certificates/2576888646"},
                {"id": "25", "url": "https://openclassrooms.com/fr/course-certificates/1820958245"}
            ],
            "tousCertificats": [
                {"id": "26", "description": " Tous les certificats/linkedin."}
            ],
            "liensTous": [
                {"id": "26", "url":"https://www.linkedin.com/in/ludmilla-marti-345313255/details/certifications/"}
            ]
        }
    ]
    const certificats = ficheCollapse2[0]?.certificats.map((certificat) => (
        <div className="nav" key={certificat.id}>
            <ul className="projets">
                <li className="projet">{certificat.description}
                    <a href={ficheCollapse2[0]?.liens.find((lien) => lien.id === certificat.id)?.url} className="Lien-collapse" aria-label="certificat" target="blank">Certificat.</a>
                </li>
            </ul>
        </div>
    ));
    
    const tousCertificats = ficheCollapse2[0]?.tousCertificats.map((touscertificat) => (
        <div className="nav" key={touscertificat.id}>
            <ul className="projets">
                <li className="projet">{touscertificat.description}
                    <a href={ficheCollapse2[0]?.liensTous.find((lientous) => lientous.id === touscertificat.id)?.url} className="Lien-collapse" aria-label="lien-tous-les-certificats" target="blank">Certificats</a>
                </li>
            </ul>
        </div>
    ));
    return (
        <div className= "AProposPage">
            <Navbar />
            <Banniere />
            <section className=" collapsesAbout">
                <div className = "box">
                    <div>
                        <Collapse
                            id = "1"
                            title = "Les projets de mon parcours de développeur-web"
                            content = {[...projets, ...projetsCode, ...projetNoLink]}/>
                    </div>
                </div>
                <div className = "box">
                    <div>
                        <Collapse
                            id="2"
                            title = "Mes certifications Openclassrooms"
                            content1 = {[...tousCertificats, ...certificats]}/>
                    </div>
                </div>
            </section>
            <div className="container-skillbar">
                <h3 className= "titre-bar-moyennes">Moyennes d'utilisation des technologies sur l'ensemble des projets</h3>
                <SkillBar skillName="HTML" percentage={11.95} />
                <SkillBar skillName="CSS" percentage={23.92} />
                <SkillBar skillName="Sass" percentage={5.59} />
                <SkillBar skillName="JavaScript" percentage={58.54} />
            </div>
        </div>
    )
}
export default About;