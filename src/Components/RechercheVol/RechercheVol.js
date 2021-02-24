import React, { useContext, createContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { UserContext } from "../UserContext";
import { ResaContext } from "../ResaContext";
import { ResaProvider } from '../ResaContext';
/* David : Pas besoin du Provider, le provider doit aller dans le JSX racine qui englobe ton app */
const RechercheVol = () => {
  /* ici, tu dois récupérer la value que tu envoies avec ton provider via un useContext */
  /* exemple const value = useContext(MonContext) */
  /* si ta value est un tableau ou un objet, tu peux le récupérer avec du destructuring, genre const [val, val2] = ... */
  const HandleTextChange = ()=>{
    /* ici tu fais appel à setresa et à resa, mais tu ne les a pas appelés avant */
    /* ce sont justement les deux valeurs passées dans la value de ton context provider que tu dois récupérer plus haut dans ton useContext */
    setresa(InitialContext);
    console.log(resa)
  }
  return (
    <div>
      RechercheVol
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Control
                name="departure"
                
               // value={resa.departure}
                onChange={HandleTextChange}
                placeholder="Ville de départ"
              />
            </Col>
            <Col>
              <Form.Control
                name="arrival"
               // value={resa.arrival}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                placeholder="Ville d'arrivée"
              />
             
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col>
              <p>Nombre de passager(s)</p>
            </Col>
            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Control type="number" name="test" min="1" max="8" />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RechercheVol;
