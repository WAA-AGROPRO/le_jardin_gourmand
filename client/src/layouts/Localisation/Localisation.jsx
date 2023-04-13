import React from 'react';
import './Localisation.scss';

function Localisation() {
  return (
    <div className="localisation">
      <a href="https://www.google.com/maps/dir/45.7335553,4.8780116/le+jardin+gourmand+amberieu/@45.8335689,4.6841828,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47f4902f9ec64453:0x13788d5d76002aec!2m2!1d4.7361593!2d45.9289661" className="localisation__container">
        <h3 className="localisation__container__title">Le Jardin Gourmand</h3>
        <p className="localisation__container__text">
          73 Rue du Sophora
          <br />
          69480 Ambérieux
        </p>
      </a>
    </div>
  )
}

export default Localisation