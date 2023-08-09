import React from "react";
import { Col, Row } from "react-bootstrap";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";

function Home() {
   return (
      <>
         <h1 className="mb-5">All Videos Here</h1>
         <div className="container-fluid">
            <Row>
               <Col lg={2}>
                  <Add />
               </Col>
               <Col lg={7}>
                  <View />
               </Col>
               <Col>
                  <Category />
               </Col>
            </Row>
         </div>
      </>
   );
}

export default Home;
