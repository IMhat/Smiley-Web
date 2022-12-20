

import React, { useState, useEffect, Suspense } from "react";
import { createEffect, createSignal, Show } from "solid-js";


import { Link } from "react-router-dom";

// import {jwt, username} from "navKey/SideMenu";
import {jwt, username} from "navKey/UserService";
import { getProducts, currency } from "./modules/product";


export default function Service2Content(){

        // const [loggedIn, setLoggedIn] = createSignal(false);

    // createEffect(() => {
    //     return jwt.subscribe((jwt) => {
    //     setLoggedIn(!!jwt);
    //     });
    // });
    const [products, setProducts] = useState([]);
    const fetchProducts = async() =>{
        const {data} = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
      try {
        fetchProducts();
      } catch (error) {
        
      }
    }, []);
    // useEffect(() => {
    //   getProducts().then(setProducts);
    // }, []);

    return(
        // <Show when={loggedIn()}>
        <div>
        <div className="my-40"> Home content 
        </div>
        
       {/* <p>{`Username = ${username.value}`}</p>
       <p>{`Token = ${jwt.value}`}</p> */}

        {/* {JSON.stringify(products)} */}

        <div className="grid grid-cols-4 gap-5">
             {products.map((product) => (
               <div key={product.id}>
                 <Link to={`/product/${product.id}`}>
                   <img src={product.images} alt={product.name} />
                 </Link>
                 <div className="flex">
                   <div className="flex-grow font-bold">
                     <Link to={`/product/${product.id}`}>
                       <a>{product.name}</a>
                     </Link>
                   </div>
                   <div className="flex-end">{currency.format(product.price)}</div>
                   {/* <div className="flex-end">{product.price}</div> */}
                 </div>
                 <div className="text-sm mt-4">{product.description}</div>
               </div>
             ))}
         </div>
       
       
        <div className="mt-96"> Home contentt </div>
    </div>
    );
}