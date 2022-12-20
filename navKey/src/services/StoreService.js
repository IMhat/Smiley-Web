import { applyMiddleware, createStore } from "redux";
import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import rootReducer from "../modules";
// import interceptors from '../interceptors/axios.interceptor'
import interceptors from 'navKey/axios.interceptor'

const setup = () => {
  const middleware = applyMiddleware(thunk, axiosMiddleware(interceptors.getAxiosClient()));
  return createStore(rootReducer, middleware);
};

const StoreService = {
  setup,
};

export default StoreService;
