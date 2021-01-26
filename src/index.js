import ReactDOM from "react-dom";
import App from "./components/App";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap-grid.min.css"
import reducer from "./redux/reducer";
import "./style.css"
=======

>>>>>>> main
const logger = createLogger({
  diff: true,
  collapsed: true,
});


const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
