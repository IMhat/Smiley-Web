import axios from "axios";
import {jwt, username} from "navKey/UserService";
import UserService from "../services/UserService";

const AxiosInterceptor = () => {

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

    //         if (UserService.isLoggedIn()) {
    //   const cb = () => {
    //     request.headers.Authorization = `Bearer ${UserService.getToken()}`;
    //     return Promise.resolve(config);
    //   };
    //   return UserService.updateToken(cb);
    // }
        // const token = `Bearer ${sessionStorage.getItem('kctoken')}`
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

// const configure = () => {
//   axios.interceptors.request.use((config) => {
//     if (UserService.isLoggedIn()) {
//       const cb = () => {
//         config.headers.Authorization = `Bearer ${UserService.getToken()}`;
//         return Promise.resolve(config);
//       };
//       return UserService.updateToken(cb);
//     }
//   });
// };




const interceptors = {
    AxiosInterceptor,
    // configure
   
  };


export default interceptors

