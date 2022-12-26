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

export const getProducts = () =>{
    const API_SERVER = "http://localhost:3000"

    return axios.get(`${API_SERVER}/admin/get-products`)

//    return axios.get('http://localhost:3000/admin/get-products', {
//             headers: {
//                 'Authorization': `Bearer ${jwt.value}`
//         }
//         })


}

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });