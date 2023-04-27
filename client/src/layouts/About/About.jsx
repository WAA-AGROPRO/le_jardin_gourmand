import React, { useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './About.scss'

const customStyles = {
  content: {
    height: '95%',
    top: '54%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: 'rgba(255, 255, 255, 1)',
    borderradius: '50px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function About() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="about" id="about">
      <section className="about__first">
        <article className="about__article">
          <h2 className="about__title">Concept</h2>
          <p className="about__text">
             Le restaurant Le Jardin Gourmand vous propose une cuisine créative et soignée de saison.
          </p>
          <section className="about__ambiances">
            <article className="about__ambiance">
            <h3 className="about__ambiance-title">Traditionnelle</h3>
              <p className="about__ambiance-text">Ambiance cosy en pierres dorées typiques de la région</p>
            
            </article>
            <article className="about__ambiance">
            <h3 className="about__ambiance-title">Moderne</h3>
              <p className="about__ambiance-text">Avec un piano bar, sonorisation et jeux de lumières</p>
   
            </article>
            <article className="about__ambiance">
            <h3 className="about__ambiance-title">En terrasse</h3>
              <p className="about__ambiance-text">Dans un décor estival</p>
             
            </article>
          </section>
          <section className="about__second">
        <button className='about__btn' onClick={openModal}>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
          {` `}
           En savoir plus ...</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="En savoir plus"
        >

          <button className="btn-close" onClick={closeModal}>
            <FontAwesomeIcon icon={faRectangleXmark} size="3x" />
          </button>
          <div className="about__inmodal">
        
          <article className="about__article">
            <h2 className="about__title goudy">Sur place</h2>
            <p className="about__text">
              Le Jardin Gourmand met à votre disposition un grand parking privé et plusieurs salles privées
              allant de 10 à 200 personnes.
            </p>
            <p className="about__text goudy">
            Nos cartes changent à chaque saison (été, automne, hiver, printemps), 6 menus vous sont proposés de 28 à 78 € dont 1 menu végétarien et 1 menu végétalien. Nous sommes bien entendu réceptifs aux régimes spéciaux et honorons les demandes (sans lactose, sans gluten, etc.)
            </p>
          </article>
          <article className="about__article">
            <h2 className="about__title goudy">Service traiteur</h2>
            <p className="about__text goudy">
            Notre service traiteur avec livraison et service si nécessaire - Buffets froids, chauds, desserts - Cocktails jusqu'à 300 personnes
            </p>  
          </article>
          <article className="about__article">
            <h2 className="about__title goudy">Mariage</h2>
            <p className="about__text goudy">
              Vous souhaitez célébrer votre amour dans un restaurant typique et chaleureux ?
            </p> 
            <p className="about__text goudy">
              Un cadre enchanteur dans lequel vous pourrez profiter d’une gastronomie traditionnelle qui invite au partage et à la convivialité ?
            </p>
            <p className="about__text goudy">
            Avec nos prestations sur-mesure pour le plus beau jour de votre vie, vous serez sûrs d’impressionner vos invités et de ravir leurs papilles.
            </p>  
          </article>
          <article className="about__article">
            <h2 className="about__title goudy">Séminaire et Réunions</h2>
            <p className="about__text goudy">
            Que ce soit pour un petit déjeuner, un déjeuner ou un dîner à la carte ou demande personnalisée pour l'élaboration d'un menu,
nos prestations sont totalement modulables à vos demandes et exigences professionnelles, liées à un repas d'affaires.
           </p> 
            <p className="about__text goudy">
            Notre service traiteur pour vos événements d’entreprise avec livraison et service si nécessaire - Buffets froids, chauds, desserts - Cocktails jusqu'à 300 personnes
            </p>  
            <p className="about__text goudy">
            Plateaux repas chaud ou froid selon vos désirs.
Ils peuvent être constitués d’une entrée, d’un plat (poisson, viande ou végétarien) et de sa garniture, de fromage blanc, d’un dessert, d’eau minérale, de pain et de couverts jetables.
           </p>  
            <p className="about__text goudy">
            Plusieurs formules sont proposées : les plateaux affaires à 16€, les plateaux végétariens à 18€, les plateaux gourmands à 19€ et les plateaux prestige à 23€.

Nous assurons toutes les livraisons si nécessaires.
           </p>  
          </article>
          <article className="about__article">
            <h2 className="about__title goudy">Piano Bar et soirées à thème</h2>
            <p className="about__text goudy">
            Nous organisons régulièrement des soirées à thèmes culinaires, musicales, culturelles etc.
            Nos soirées antillaises, années 80, accord mets et vins, karaoké rencontrent un grand succès.
            </p>  
          </article>
        </div>
      </Modal>

      </section>

        </article>
        </section> 
      
    </div>
  )
}

export default About