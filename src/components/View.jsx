import React from "react";
import { Col, Row } from "react-bootstrap";
import Videocard from "./Videocard";

function View() {
   return (
      <div className="border p-3 rounded">
         <Row>
            <Col sm={12} md={6} className="mb-3 ps-3">
               <Videocard />
            </Col>
         </Row>
      </div>
   );
}

export default View;
