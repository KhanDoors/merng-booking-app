import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Events from "./components/Events";
import Bookings from "./components/Bookings";
import MainNavbar from "./components/Navbar/MainNavbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <MainNavbar />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={Auth} />
              <Route path="/events" component={Events} />
              <Route path="/bookings" component={Bookings} />
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
