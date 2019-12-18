import React from "react";

import "./config/ReactotronConfig";

import reducers from "./store/reducers/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Routes from "./routes";
let store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
