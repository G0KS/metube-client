import React, { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

function Category() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <div className="d-grid">
            <button onClick={handleShow} className="btn btn-success fw-bold">
               Add Categories
            </button>
         </div>

         {/* Modal */}
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>Add Category Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FloatingLabel
                  className="mb-3"
                  controlId="floatingid"
                  label="ID"
               >
                  <Form.Control type="text" placeholder="ID" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingcategory" label="Category">
                  <Form.Control type="text" placeholder="Category" />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="primary">
                  Add Category
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default Category;
