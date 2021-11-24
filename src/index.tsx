import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FoobarProvider from "./contexts/foobar/FoobarProvider";
import DashboardProvider from "./contexts/dashboard/DashboardProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <FoobarProvider>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </FoobarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
