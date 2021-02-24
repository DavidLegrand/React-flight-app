import React, { useState, useContext } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";
import Pub from "../Pub/Pub";
import RechercheVol from "../RechercheVol/RechercheVol";
import Form from "react-bootstrap/Form";

import { UserContext } from "../UserContext";
import { ResaContext } from "../ResaContext";
import { ResaProvider } from "../ResaContext";

export const Homepage = () => {
  const addSearchRow = () => {
    setCheckAllerRetour(!checkAllerRetour);
  };

  const [checkAllerRetour, setCheckAllerRetour] = useState(false);

  return (
    <div>
      <p>Homepage</p>

      <NavigationBar />
      <div></div>

<ResaProvider>
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
        </ResaProvider>

      

      <Pub />
    </div>
  );
};

export default Homepage;
