import React, { useState } from "react";
import { PlusCircle } from "feather-icons-react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";
import { addVideo } from "../services/allRequests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({handleRes}) {
   const [uploadData, setUploadData] = useState({
      id: "",
      caption: "",
      thumbnail: "",
      url: "",
   });
   const [show, setShow] = useState(false);

   const insertData = (e) => {
      const { name, value } = e.target;
      setUploadData({ ...uploadData, [name]: value });
   };

   const youtubeURLGen = (e) => {
      let youtubeUrl = e.target.value;
      if (youtubeUrl.includes("v=")) {
         let index = youtubeUrl.indexOf("v=");
         let videoUrl = youtubeUrl.substring(index + 2, index + 13);
         let check = `https://www.youtube.com/embed/${videoUrl}`;
         setUploadData({ ...uploadData, url: check });
      }
   };
   // console.log(uploadData);

   const uploadVideo = async () => {
      const { id, caption, thumbnail, url } = uploadData;
      if (!id || !caption || !thumbnail || !url) {
         toast.warning("Please fill the form");
      } else {
         const response = await addVideo(uploadData);
         if (response.status >= 200 && response.status < 300) {
            handleRes(response.data)
            setShow(false);
            toast.success("Video added successfully");
         } else {
            toast.warning("Please enter unique Id");
         }
      }
   };

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
                     onChange={youtubeURLGen}
                  />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="success" onClick={uploadVideo}>
                  Upload Video
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

export default Add;
