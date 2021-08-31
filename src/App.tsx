import React from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignInForm} />
          <Route path="/register" component={SignUpForm} />
          <Route path="*" component={() => <div>404 not found.</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
