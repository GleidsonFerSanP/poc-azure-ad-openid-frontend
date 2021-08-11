import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import PrivateRoute from "./routes/Private";

const Admin = () => (
  <div>
    <NavBar />
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login"><LoginPage /></Route>
            <PrivateRoute path="/about"  component={AboutPage} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </div>
      </div>
    </div>
  );
}