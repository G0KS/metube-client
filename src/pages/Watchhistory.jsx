import React, { useEffect, useState } from "react";
import { getHistories } from "../services/allRequests";
import { Link } from "react-router-dom";

function Watchhistory() {
   const [history, setHistory] = useState([]);

   const getWatchHistory = async () => {
      const { data } = await getHistories();
      setHistory(data);
   };

   useEffect(() => {
      getWatchHistory();
   }, []);

   return (
      <>
         <h1>Watch History</h1>
         <Link to="/home">
            <button className="btn btn-outline-info">Go back</button>
         </Link>
         <table className="table shadow m-3 rounded border">
            <thead>
               <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>URL</th>
                  <th>Time</th>
               </tr>
            </thead>
            <tbody>
               {history.map((item, index) => (
                  <tr>
                     <td>{index + 1}</td>
                     <td>{item?.cardname} </td>
                     <td>{item?.url}</td>
                     <td>{item?.date}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
}

export default Watchhistory;
