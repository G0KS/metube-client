import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { Trash } from "feather-icons-react";
import { addHistory, deleteVideo } from "../services/allRequests";
import { v4 as uuidv4 } from "uuid";

function Videocard({ card, handleDeleteStatus, insideCategory }) {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = async () => {
      setShow(true);
      const id = uuidv4();
      const { caption, url } = card;
      let cardTime = new Date();
      if (id != "" && caption != "" && url != "" && cardTime != "") {
         const body = { id, cardname: caption, url, date: cardTime };
         const response = await addHistory(body);
      }
   };
   const removeVideo = async (id) => {
      const response = await deleteVideo(id);
      if (response.status >= 200 && response.status < 300) {
         handleDeleteStatus(true);
      }
      console.log(response);
   };

   const dragStarted = (e, id) => {
      console.log("ID:", id);
      e.dataTransfer.setData("cardId", id);
   };
   return (
      <>
         <Card
            className="shadow"
            draggable
            onDragStart={(e) => dragStarted(e, card?.id)}
         >
            <Card.Img
               onClick={handleShow}
               height={"180px"}
               variant="top"
               src={card?.thumbnail}
            />
            <Card.Body>
               <Card.Title className="d-flex justify-content-between">
                  <span onClick={handleShow} className="text-primary fw-bold">
                     {card?.caption}
                  </span>
                  {insideCategory ? (
                     ""
                  ) : (
                     <span onClick={() => removeVideo(card?.id)}>
                        <Trash color="red" />
                     </span>
                  )}
               </Card.Title>
            </Card.Body>
         </Card>

         {/* Modal */}
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Video Caption</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <iframe
                  width={"100%"}
                  height={"400px"}
                  src={`${card?.url}?autoplay=1`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
               ></iframe>{" "}
            </Modal.Body>
         </Modal>
      </>
   );
}

export default Videocard;
