import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Service1Content from "service_1/Service1Content";

import interceptors from "./interceptors/axios.interceptor";

ReactDOM.render(<Service1Content/>, document.getElementById("app"));

interceptors.Service1Interceptor();
