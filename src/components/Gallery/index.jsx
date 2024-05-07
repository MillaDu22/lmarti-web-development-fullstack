import React from 'react';
import "./gallery.css";
import Card from "../Card/index";
import datasProjects from '../../DatasProjects/datasProjects.json';

function Gallery() {
    // Tableau des différentes classes de taille //
    const sizes = ['card-small', 'card-medium', 'card-large'];

    // Index des cartes avec grande taille //
    const largeSizeCardsIndexes = [0, 2, datasProjects.length - 1]; // Première, troisième et dernière carte //

    return (
        <section className="gallery">
            <h2 className="title-gallery">Ma galerie</h2>
            <div className="galleryGrid">
                {datasProjects.map((datasProject, index) => {
                    // Sélectionne une taille aléatoire pour chaque carte //
                    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

                    // Vérifie si cette carte doit avoir une grande taille //
                    const isLargeSize = largeSizeCardsIndexes.includes(index);

                    return (
                        <Card
                            key={datasProject.id}
                            id={datasProject.id}
                            title={datasProject.title}
                            cover={datasProject.cover}
                            alt={datasProject.alt}
                            informations={datasProject.informations}
                            size={isLargeSize ? 'card-large' : randomSize} // Si c'est une grande taille, utilise 'card-large', sinon utilise une taille aléatoire //
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Gallery;






