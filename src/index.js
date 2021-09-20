import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Store } from "./components/Context/StoreContext";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
