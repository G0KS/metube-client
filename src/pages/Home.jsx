import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { Link } from "react-router-dom";

function Home() {
   const [serverRes, setServerRes] = useState({});
   const handleRes = (res) => {
      setServerRes(res);
   };
   return (
      <>
         <div className="d-flex align-items-center justify-content-between">
            <h1 className="mb-5">All Videos Here</h1>
            <Link className="btn btn-primary text-uppercase" to={"/watch-history"}>
               History
            </Link>
         </div>
         <div className="container-fluid">
            <Row>
               <Col lg={2}>
                  <Add handleRes={handleRes} />
               </Col>
               <Col lg={7}>
                  <View serverRes={serverRes} />
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
