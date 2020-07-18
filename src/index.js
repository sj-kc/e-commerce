import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./store/store";
import { fetchProducts } from "./store/actions/products";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = configStore();

let hasRendered = false;

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};
ReactDOM.render("Loading", document.getElementById("root"));

store.dispatch(fetchProducts());
renderApp();
serviceWorker.unregister();
