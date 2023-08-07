import { Upload, Airplay } from "feather-icons-react/build/IconComponents";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
   return (
      <Navbar className="bg-primary">
         <Container>
            <Navbar.Brand>
               <Link to={"/"} style={{ textDecoration: "none" }} className="d-flex align-items-center">
                  <Airplay color="blue" size={40} />
                  <h1>MeTube</h1>
               </Link>
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
}

export default Header;
