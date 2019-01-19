import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Events from "./components/Events";
import Bookings from "./components/Bookings";
import MainNavbar from "./components/Navbar/MainNavbar";
import AuthContext from "./context/auth-context";

class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavbar />
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && (
                  <Redirect from="/auth" to="/events" exact />
                )}
                {!this.state.token && <Route path="/auth" component={Auth} />}
                <Route path="/events" component={Events} />
                {this.state.token && (
                  <Route path="/bookings" component={Bookings} />
                )}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
