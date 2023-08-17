import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Videocard from "./Videocard";
import { getVideos } from "../services/allRequests";

function View({ serverRes }) {
   const [deleteStatus, setDeleteStatus] = useState(false);
   const handleDeleteStatus = (res) => {
      setDeleteStatus(res);
   };
   
   const [allVideos, setAllVideos] = useState([]);
   const getAllVideos = async () => {
      const response = await getVideos();
      setAllVideos(response.data);
   };

   console.log(allVideos);
   useEffect(() => {
      getAllVideos();
   }, [serverRes, deleteStatus]);

   return (
      <div className="border p-3 rounded">
         <Row>
            {allVideos?.map((video) => (
               <Col sm={12} md={6} className="mb-3 ps-3">
                  <Videocard
                     card={video}
                     handleDeleteStatus={handleDeleteStatus}
                  />
               </Col>
            ))}
         </Row>
      </div>
   );
}

export default View;
