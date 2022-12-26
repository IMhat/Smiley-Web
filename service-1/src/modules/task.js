// const API_SERVER = "http://localhost:3000";

import axios from "axios";
import {jwt, username} from "navKey/UserService";
// export const getProducts = () =>
//   fetch(`${API_SERVER}/admin/get-products`).then((res) => res.json());

// export const getProductById = (id) =>
//   fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

// export const currency = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });
const API_SERVER = "http://localhost:3000"

export const getTasksBacklog = () =>{
    
    return axios.get(`${API_SERVER}/admin/get-backlog`)

//    return axios.get('http://localhost:3000/admin/get-products', {
//             headers: {
//                 'Authorization': `Bearer ${jwt.value}`
//         }
//         })


}

export const getTasksApproved = ()=> {
    
    return axios.get(`${API_SERVER}/admin/get-approved`)
}



export const getTasksDone = ()=> {
   
    return axios.get(`${API_SERVER}/admin/get-done`)
}



export const getTasksToDo = ()=> {
   
    return axios.get(`${API_SERVER}/admin/get-todo`)
}


export const getTasksInProgress = ()=> {
   
    return axios.get(`${API_SERVER}/admin/get-inprogress`)
}