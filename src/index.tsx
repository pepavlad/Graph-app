import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/index";
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUDcea0Mz5PCf9u6R6ckEzXm7HEfoFa_Q",
  authDomain: "graph-app-9a5a3.firebaseapp.com",
  databaseURL:
    "https://graph-app-9a5a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "graph-app-9a5a3",
  storageBucket: "graph-app-9a5a3.appspot.com",
  messagingSenderId: "175472711113",
  appId: "1:175472711113:web:641cd0cb99f792b646c418",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
