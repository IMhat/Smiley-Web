import React, { useState, useEffect, Suspense } from "react";
import { createEffect, createSignal, Show } from "solid-js";
import "./styles/home_content.css";

import { Link } from "react-router-dom";

// import {jwt, username} from "navKey/SideMenu";
import { jwt, username } from "navKey/UserService";
import { getProducts, currency } from "./modules/product";
import CounterTasks from "./counterTasksBacklog/counter_tasks";

export default function HomeContent() {
  // const [loggedIn, setLoggedIn] = createSignal(false);

  // createEffect(() => {
  //     return jwt.subscribe((jwt) => {
  //     setLoggedIn(!!jwt);
  //     });
  // });
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    try {
      fetchProducts();
    } catch (error) {}
  }, []);
  // useEffect(() => {
  //   getProducts().then(setProducts);
  // }, []);

  return (
    <div className="home">
      Home
      <div>
        <CounterTasks />
      </div>
    </div>
  );
}
