import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Landing() {
   const navigate = useNavigate();

   const handleNavigate = () => {
      navigate("/home");
   };
   
   return (
      <>
         <Row className="align-items-center">
            <Col></Col>
            <Col lg={5}>
               <h1 className="fs-1">Welcome to MeTube</h1>
               <p className="fs-5" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita aliquid quisquam numquam necessitatibus maiores
                  architecto, perferendis quis incidunt? Fuga repellendus dolor
                  quia assumenda animi quos necessitatibus corporis ratione
                  soluta eligendi.
               </p>
               <Button onClick={handleNavigate} className="btn btn-success">
                  Click here to know more
               </Button>
            </Col>
            <Col></Col>
            <Col lg={5}>
               <img
                  className="img-fluid"
                  width={"500px"}
                  src="https://img.freepik.com/premium-vector/video-mobile-screen-video-sharing-marketing-flat-vector-concept-with-elements-create-video-content-make-money_1212-1226.jpg"
                  alt="Landing image"
               />
            </Col>
         </Row>
      </>
   );
}

export default Landing;
