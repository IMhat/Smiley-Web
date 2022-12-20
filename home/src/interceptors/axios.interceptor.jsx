import axios from "axios";
import {jwt, username} from "navKey/UserService";

const AxiosInterceptor = () =>{

    // const _axios = axios.create();

    // const configure = () => {
       
          
    //         const cb = () => {
    //           config.headers.Authorization = `Bearer ${jwt.value}`;
    //           return Promise.resolve(config);
    //         };
    //         return cb;
          
       
    //   };
    const updateHeader = (request) => {
        // const token = `Bearer ${jwt.value}`
        const token = `Bearer ${jwt.value}`
        const newHeaders = {
            Authorization: token,
            "Content-Type": "application/json",
        };
        request.headers = newHeaders;
        return request;
    };

    axios.interceptors.request.use((request) => {
        return updateHeader(request);
    });
};


const interceptors = {
    AxiosInterceptor
  };
export default interceptors

