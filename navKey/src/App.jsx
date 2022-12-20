// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.scss";

// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     <div>Name: navKey</div>
//     <div>Framework: react</div>
//     <div>Language: JavaScript</div>
//     <div>CSS: Tailwind</div>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));


import React from "react";
import ReactDOM from "react-dom";

// import "remixicon/fonts/remixicon.css";
import "./index.scss";

// import NavBar from "navBar/NavBar";
import Main from "./components/Main";
// import MainLayout from "navBar/MainLayout";
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";

import interceptors from "navKey/axios.interceptor"












const renderApp = () =>ReactDOM.render(<Main />, document.getElementById("app"));
// ReactDOM.render(<MainLayout />, document.getElementById("app"));

UserService.initKeycloak(renderApp);


interceptors.AxiosInterceptor();
// interceptors.configure();
// HttpService.configure();






