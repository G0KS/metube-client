import React, { useState } from "react";
import { PlusCircle } from "feather-icons-react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";

function Add() {
   const [uploadData, setUploadData] = useState({
      id: "",
      caption: "",
      thumbail: "",
      url: "",
   });
   const [show, setShow] = useState(false);

   const insertData = (e) => {
      const { name, value } = e.target;
      setUploadData({ ...uploadData, [name]: value });
   };
   console.log(uploadData);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <>
         <div className="btn" onClick={handleShow}>
            <PlusCircle size={100} color="green" />
         </div>

         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Uploading Video details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FloatingLabel
                  className="mb-3"
                  controlId="floatingid"
                  label="Video ID"
               >
                  <Form.Control
                     type="text"
                     placeholder="Video ID"
                     name="id"
                     onChange={insertData}
                  />
               </FloatingLabel>
               <FloatingLabel
                  className="mb-3"
                  controlId="floatingCaption"
                  label="Video Caption"
               >
                  <Form.Control
                     type="text"
                     placeholder="Video Caption"
                     name="caption"
                     onChange={insertData}
                  />
               </FloatingLabel>
               <FloatingLabel
                  className="mb-3"
                  controlId="floatingImageUrl"
                  label="Video Image URL"
               >
                  <Form.Control
                     type="text"
                     placeholder="Video Image URL"
                     name="thumbnail"
                     onChange={insertData}
                  />
               </FloatingLabel>
               <FloatingLabel
                  controlId="floatingVideoUrl"
                  label="Youtube Video URL"
               >
                  <Form.Control
                     type="text"
                     placeholder="Youtube Video URL"
                     name="url"
                     onChange={insertData}
                  />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="success">Upload Video</Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default Add;
