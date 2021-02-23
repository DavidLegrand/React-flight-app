import React, { useState, useContext } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import Pub from "../Pub/Pub";
import RechercheVol from "../RechercheVol/RechercheVol";
import Form from "react-bootstrap/Form";

import {UserContext} from '../UserContext';





export const Homepage = () => {
  const addSearchRow = () => {
    setCheckAllerRetour(!checkAllerRetour);
  };

  const [checkAllerRetour, setCheckAllerRetour] = useState(false);


  return (

    <div>
      <p>Homepage</p>

      <NavigationBar />
      <div>
        
      </div>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          checked={checkAllerRetour}
          onClick={addSearchRow}
          type="checkbox"
          label="Aller-retour"
          id="myCheckbox"
        />
        {checkAllerRetour ? (
          <div>
            <RechercheVol />
            <RechercheVol />
          </div>
        ) : (
          <div>
            <RechercheVol />
          </div>
        )}
      </Form.Group>

      <Pub />
    </div>

  );
};

export default Homepage;
