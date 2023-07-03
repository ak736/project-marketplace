import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/store";
import {Provider} from "react-redux"
import axios from "axios"
import ScrollUp from "./components/scrollBtn/ScrollUp";

axios.defaults.baseURL="https://project-marketplace-kappa.vercel.app/"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <ScrollUp />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
