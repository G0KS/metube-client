import React, { useEffect, useState } from "react";
import { Button, Modal, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
   addCategory,
   deleteCategory,
   getAVideo,
   getCategories,
   updatedCategory,
} from "../services/allRequests";
import { Trash } from "feather-icons-react/build/IconComponents";
import Videocard from "./Videocard";

function Category() {
   const [allCategory, setAllCategory] = useState([]);

   const getCategoryList = async () => {
      const response = await getCategories();
      if (response.status >= 200 && response.status < 300) {
         console.log(response.data);
         setAllCategory(response.data);
      }
   };

   useEffect(() => {
      getCategoryList();
   }, []);

   const [categoryItem, setCategoryItem] = useState({
      id: "",
      categoryName: "",
      allvideos: [],
   });

   const addCategoryForm = (e) => {
      const { name, value } = e.target;
      setCategoryItem({ ...categoryItem, [name]: value });
   };

   const handleAddCategory = async (e) => {
      e.preventDefault();
      const { id, categoryName } = categoryItem;
      if (!id || !categoryName) {
         toast.warning("Please fill the form");
      } else {
         const response = await addCategory(categoryItem);
         console.log(response);
         if (response.status >= 200 && response.status < 300) {
            setShow(false);
            toast.success("Category added successfully");
            getCategoryList();
         } else {
            toast.warning("Please enter unique Id");
         }
      }
   };

   const handleDeletecategory = async (e, id) => {
      e.preventDefault();
      await deleteCategory(id);
      getCategoryList();
   };

   const dragOver = (e) => {
      e.preventDefault();
      console.log("dragging");
   };

   const dropped = async (e, categoryId) => {
      console.log("cID", categoryId);

      let sourceCardId = e.dataTransfer.getData("cardId");
      console.log("sID", sourceCardId);

      let { data } = await getAVideo(sourceCardId);
      console.log("sVideo data", data);

      let selectedCategory = allCategory.find((item) => item.id === categoryId);
      selectedCategory.allvideos.push(data);
      console.log("updated target category details ", selectedCategory);
      await updatedCategory(categoryId, selectedCategory);
      getCategoryList();
   };

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

         {allCategory?.map((item) => (
            <div
               className="mt-2 p-2 rounded border"
               droppable
               onDragOver={(e) => dragOver(e)}
               onDrop={(e) => dropped(e, item?.id)}
            >
               <div className="d-flex justify-content-between">
                  <h4>{item?.categoryName}</h4>
                  <span onClick={(e) => handleDeletecategory(e, item.id)}>
                     <Trash color="red"></Trash>
                  </span>
               </div>
               <Row>
                  {item?.allvideos.map((card) => (
                     <Col className="p-3 mb-1" sm={12}>
                        <Videocard card={card} insideCategory={true} />
                     </Col>
                  ))}
               </Row>
            </div>
         ))}

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
                  <Form.Control
                     type="text"
                     placeholder="ID"
                     name="id"
                     onChange={addCategoryForm}
                  />
               </FloatingLabel>
               <FloatingLabel controlId="floatingcategory" label="Category">
                  <Form.Control
                     type="text"
                     placeholder="Category"
                     name="categoryName"
                     onChange={addCategoryForm}
                  />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="primary" onClick={handleAddCategory}>
                  Add Category
               </Button>
            </Modal.Footer>
         </Modal>
         <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
      </>
   );
}

export default Category;
