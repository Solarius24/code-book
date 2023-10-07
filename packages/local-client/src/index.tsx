import React from "react";
import ReactDOM from "react-dom/client";
import App from "@cli-jsnote-sol/local-client/src/App";
import { Provider } from "react-redux";
import { store } from "@cli-jsnote-sol/local-client/src/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
