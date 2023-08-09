import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { Trash } from "feather-icons-react";

function Videocard() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <Card className="shadow">
            <Card.Img
               onClick={handleShow}
               height={"180px"}
               variant="top"
               src="https://www.animatedvideo.com/blog/wp-content/uploads/2019/07/7-benefits-of-clickworthy-video-thumbnails-in-video-marketing.png"
            />
            <Card.Body>
               <Card.Title className="d-flex justify-content-between">
                  <span onClick={handleShow} className="text-primary fw-bold">
                     Card Title
                  </span>
                  <span>
                     <Trash color="red" />
                  </span>
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
                  src="https://www.youtube.com/embed/6O1sX27rc5I?autoplay=1"
                  title="YouTube video player"
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
