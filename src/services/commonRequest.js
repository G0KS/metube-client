import axios from "axios";

export const commonRequest = async (url, method, body) => {
   let configReq = {
      url,
      method,
      data: body,
      headers: { "content-type": "application/json" },
   };

   return await axios(configReq)
      .then((res) => {
         return res;
      })
      .catch((err) => {
         return err;
      });
};
 