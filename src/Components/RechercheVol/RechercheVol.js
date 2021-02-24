import React, { useContext, createContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { UserContext } from "../UserContext";
import { ResaContext } from "../ResaContext";
import { ResaProvider } from '../ResaContext';

const RechercheVol = () => {

  const HandleTextChange = ()=>{
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
