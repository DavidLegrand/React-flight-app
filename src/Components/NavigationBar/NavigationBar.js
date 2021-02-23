import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";


const NavigationBar = () => {
    return (
      <div>
            NavigationBar <BsFillPersonFill/>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React Vols App</Navbar.Brand>
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#link">Se connecter</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <BsFillPersonFill/>
              <BsFillPersonLinesFill/>
            </Navbar>
      </div>
    );
  };
    
    export default NavigationBar;