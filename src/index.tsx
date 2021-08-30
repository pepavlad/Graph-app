import * as React from "react";
import * as ReactDOM from "react-dom";
import "./firebase";
import { Provider } from "react-redux";
import App from "./App";

const app = <App />;
ReactDOM.render(app, document.getElementById("root") as HTMLElement);
