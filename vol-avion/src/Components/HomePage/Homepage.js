import React from 'react';
import NavBar from '../NavBar/NavBar';
import PageCompte from '../PageCompte/PageCompte';
import Pub from '../Pub/Pub';
import RechercheVol from '../RechercheVol/RechercheVol';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
    return (
      <div>
            Homepage
            <NavBar/>
            <RechercheVol/>
            <RechercheVol/>
            <Pub/>

            
            
      </div>
    );
  };
    
    export default Homepage;