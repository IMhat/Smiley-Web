import React from "react";
import ReactDOM from "react-dom";

import {jwt, username} from "navKey/UserService";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import HomeContent from "home/HomeContent";

// import HttpService from "navKey/HttpService"

//  import interceptors from "./interceptors/axios.interceptor";
//  import interceptors from "./interceptors/axios.interceptor";

// // HttpService.AxiosInterceptor();

// interceptors.AxiosInterceptor();

ReactDOM.render(<HomeContent />, document.getElementById("app"));


