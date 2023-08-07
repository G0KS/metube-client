import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
   return (
      <>
         <Header />
         <div className="container m-5">
            <Routes>
               <Route path="/" element={<Landing />} />
               <Route path="/home" element={<Home />} />
            </Routes>
         </div>
         <Footer />
      </>
   );
}

export default App;
